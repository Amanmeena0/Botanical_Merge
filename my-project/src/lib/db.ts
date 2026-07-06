export interface MergeItem {
  id: string;
  timestamp: number;
  image1: string; // base64 or object URL / data URL
  image2: string; // base64 or object URL / data URL
  result: string; // base64 style transfer result
  name: string;   // botanical style title
}

const DB_NAME = "BotanicalMergeDB";
const STORE_NAME = "merges";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
  });
}

export async function saveMergeItem(item: Omit<MergeItem, "id" | "timestamp" | "name"> & { name?: string }): Promise<MergeItem> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const actualStore = transaction.objectStore(STORE_NAME);

    const timestamp = Date.now();
    const id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9);
    
    // Automatically generate a beautiful botanical name if none is provided
    const prefixes = ["Enchanted", "Crimson", "Solar", "Lunar", "Velvet", "Gilded", "Spectral", "Verdant", "Mystic", "Mossy", "Aura"];
    const suffixes = ["Fern", "Orchid", "Ivy", "Petal", "Sprout", "Flora", "Blossom", "Lotus", "Leaf", "Bloom", "Thorn"];
    const randomName = `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${suffixes[Math.floor(Math.random() * suffixes.length)]} #${Math.floor(100 + Math.random() * 900)}`;

    const newItem: MergeItem = {
      id,
      timestamp,
      image1: item.image1,
      image2: item.image2,
      result: item.result,
      name: item.name || randomName,
    };

    const request = actualStore.put(newItem);
    request.onsuccess = () => resolve(newItem);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllMergeItems(): Promise<MergeItem[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      // Sort by newest first
      const sorted = (request.result as MergeItem[]).sort((a, b) => b.timestamp - a.timestamp);
      resolve(sorted);
    };
    request.onerror = () => reject(request.error);
  });
}

export async function deleteMergeItem(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

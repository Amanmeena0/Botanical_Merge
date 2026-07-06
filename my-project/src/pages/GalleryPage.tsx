import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@/components/UiView";
import { getAllMergeItems, deleteMergeItem } from "@/lib/db";
import type { MergeItem } from "@/lib/db";

export default function GalleryPage() {
  const [merges, setMerges] = useState<MergeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load history from IndexedDB
  const loadHistory = async () => {
    try {
      setIsLoading(true);
      const items = await getAllMergeItems();
      setMerges(items);
    } catch (err) {
      console.error("Failed to load merge history:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this merge from your history?")) {
      return;
    }
    try {
      await deleteMergeItem(id);
      setMerges((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to delete merge:", err);
    }
  };

  const handleDownload = (result: string, name: string) => {
    const link = document.createElement("a");
    link.href = result;
    link.download = `${name.toLowerCase().replace(/\s+/g, "-")}.png`;
    link.click();
  };

  // SEO setup
  useEffect(() => {
    document.title = "Gallery - Botanical Merge Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore your custom historical botanical merges. View details, download creations, and manage your artistic creation history.");
    }
  }, []);

  return (
    <div className="bg-background text-on-surface grainy-bg min-h-screen flex flex-col font-jakarta selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      <Navbar />

      <main className="max-w-container-max mx-auto px-gutter py-xl flex-1 w-full relative">
        {/* Decorative Blurred Spots */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <header className="text-center mb-16 animate-fadeIn">
            <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest bg-primary/5 px-4 py-2 rounded-full">Creation Archive</span>
            <h1 className="font-headline-lg text-headline-lg text-primary mt-4 mb-3">Your Botanical Gallery</h1>
          </header>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-80 animate-pulse">
              <span className="material-symbols-outlined text-primary/40 animate-spin text-5xl mb-4">autorenew</span>
              <p className="font-label-md text-label-md text-on-surface-variant">Gathering your botanical collection...</p>
            </div>
          ) : merges.length === 0 ? (
            <div className="text-center py-20 px-6 bg-surface-container-lowest border border-outline-variant/10 rounded-3xl max-w-150 mx-auto shadow-xs animate-fadeIn">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/5 mb-6 text-secondary/40">
                <span className="material-symbols-outlined text-4xl">folder_open</span>
              </div>
              <h2 className="font-title-lg text-title-lg text-on-surface mb-3">Your Gallery is Empty</h2>
              <p className="font-body-md text-on-surface-variant max-w-90 mx-auto mb-8">
                You haven't merged any plants or textures yet. Head over to the Studio and let your imagination bloom!
              </p>
              <Link 
                id="btn-goto-studio-empty"
                to="/studio" 
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-xl py-md font-label-md text-label-md rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined">auto_awesome</span>
                Open the Studio
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {merges.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-surface-container-lowest border border-outline-variant/20 rounded-3xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col"
                >
                  {/* Result Image */}
                  <div className="relative aspect-square overflow-hidden bg-surface-container-low border-b border-outline-variant/10">
                    <img 
                      src={item.result} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="font-label-sm text-label-sm text-white/80">
                        {new Date(item.timestamp).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                  </div>

                  {/* Details and Actions */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-title-lg text-title-lg text-primary font-bold mb-4">{item.name}</h3>
                    
                    {/* Source Previews */}
                    <div className="mb-6">
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Source Combination</p>
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center">
                          <img 
                            src={item.image1} 
                            alt="Source 1" 
                            className="w-16 h-16 rounded-xl object-cover border border-outline-variant/30 shadow-xs z-10 hover:z-25 hover:scale-110 transition-all"
                          />
                          <span className="text-outline/40 mx-2 z-0 font-bold">+</span>
                          <img 
                            src={item.image2} 
                            alt="Source 2" 
                            className="w-16 h-16 rounded-xl object-cover border border-outline-variant/30 shadow-xs z-10 hover:z-25 hover:scale-110 transition-all"
                          />
                        </div>
                        <div className="text-xs text-on-surface-variant/80 italic leading-snug">
                          Merged into a single creative vision.
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-between gap-3">
                      <button 
                        id={`btn-download-${item.id}`}
                        onClick={() => handleDownload(item.result, item.name)}
                        className="flex-1 h-12 bg-secondary text-on-secondary font-label-md text-label-md rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        Download
                      </button>
                      
                      <button 
                        id={`btn-delete-${item.id}`}
                        onClick={() => handleDelete(item.id)}
                        className="h-12 w-12 border border-error/20 text-error hover:bg-error-container hover:text-on-error-container transition-all rounded-xl flex items-center justify-center group/del"
                        title="Delete merge history"
                      >
                        <span className="material-symbols-outlined text-[20px] group-hover/del:scale-110 transition-transform">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

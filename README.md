# Botanical Merge | Blend Your Vision

A full-stack neural style transfer application that applies artistic styles from reference images to content images using deep learning.

## 🎨 Features

- **Style Transfer**: Transfer artistic styles from one image to another using pre-trained neural networks
- **Feature Extraction**: Extract and analyze visual features from images
- **REST API**: FastAPI backend for processing and image management
- **Modern UI**: React + TypeScript frontend with Tailwind CSS
- **Database Integration**: MongoDB for persistent data storage
- **Image Processing**: Batch image handling and optimization

## 🛠️ Tech Stack

### Backend
- **Python 3.x** with FastAPI & Uvicorn
- **TensorFlow & TensorFlow Hub** for neural networks
- **OpenCV** for image processing
- **MongoDB** for database
- **NumPy, Pillow** for image manipulation

### Frontend
- **React 19** + TypeScript
- **Vite** for fast bundling
- **Tailwind CSS** for styling
- **Radix UI** component primitives
- **Clerk** for authentication

## 📁 Project Structure

This repository contains the frontend application:
```
└── my-project/             # React + TypeScript frontend
    ├── src/                # React components and application logic
    └── public/             # Static assets
```

> [!NOTE]
> The backend repository has been separated and is located at `Botanical_Merge_Backend` in the parent directory.

## 🚀 Quick Start

### Frontend Setup
```bash
cd my-project
npm install
npm run dev
```

### Backend Setup
To run the backend, navigate to the separate backend repository (`Botanical_Merge_Backend`):
```bash
cd ../Botanical_Merge_Backend
python -m venv .venv
source .venv/bin/activate   # On macOS/Linux
# or: .venv\Scripts\activate  # On Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

## 📝 Environment Variables

Create a `.env` file in the `Botanical_Merge_Backend` directory:
```
MONGODB_URI=your_mongodb_connection_string
API_PORT=8000
```

## 🔧 Available Scripts

**Backend:**
- `uvicorn main:app --reload` - Start development server

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## 📦 Key Components

- **Style Transfer Engine**: Uses TensorFlow Hub pre-trained models
- **Feature Extraction**: Analyzes image features for style analysis
- **API Endpoints**: RESTful endpoints for image upload and processing
- **UI Dashboard**: Interactive interface for style transfer operations

## 🎯 Usage

1. Upload a content image
2. Select or upload a style reference image
3. Configure transfer parameters
4. Process and view results
5. Download or save the styled image

---

**Status**: Development

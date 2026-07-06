import { useEffect } from "react";
import { Navbar, Footer } from "@/components/UiView";

export default function ResourcesPage() {
  // SEO setup
  useEffect(() => {
    document.title = "Resources & Technology - Botanical Merge Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about the neural style transfer technology, deep learning models, and modern web stack that powers Botanical Merge.");
    }
  }, []);

  return (
    <div className="bg-background text-on-surface grainy-bg min-h-screen flex flex-col font-jakarta selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      <Navbar />

      <main className="max-w-container-max mx-auto px-gutter py-8 flex-1 w-full relative">
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 w-full mx-auto">
          {/* Header */}
          <header className="text-center mb-8 animate-fadeIn">
            <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest bg-primary/5 px-4 py-2 rounded-full">Knowledge Hub</span>
            <h1 className="font-headline-lg text-headline-lg text-primary mt-4 mb-3">Science & Design</h1>
            <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
              Explore the deep learning technologies and architectural stack that drive our intentional botanical creations.
            </p>
          </header>

          {/* Section 1: The Concept of Merging */}
          <section className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 md:p-8 mb-6 shadow-xs hover:border-primary/20 transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">filter_vintage</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">The Merging Concept</h2>
            </div>
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-4">
              Botanical Merge fuses the structural form (content) of one plant image with the aesthetic textures, tones, and visual styles of another. By decoupling <strong>geometry</strong> from <strong>surface styling</strong>, creators can breed new, imaginary botanical species that share properties of both parents.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-surface-container-low/50 p-4 rounded-2xl border border-outline-variant/5">
              <div className="text-center p-3 bg-surface rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">potted_plant</span>
                <h4 className="font-label-md text-label-md text-on-surface font-bold mb-1">Canvas Alpha</h4>
                <p className="text-xs text-on-surface-variant">Supplies the core shape, outline, and botanical layout.</p>
              </div>
              <div className="flex items-center justify-center text-primary font-bold font-headline-sm text-2xl py-2">
                +
              </div>
              <div className="text-center p-3 bg-surface rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary text-3xl mb-2">texture</span>
                <h4 className="font-label-md text-label-md text-on-surface font-bold mb-1">Canvas Beta</h4>
                <p className="text-xs text-on-surface-variant">Supplies the patterns, color palette, and textures.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Deep Learning Neural Style Transfer */}
          <section className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 md:p-8 mb-6 shadow-xs hover:border-primary/20 transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">How Deep Learning is Used</h2>
            </div>
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-4">
              At the heart of the studio is a <strong>Neural Style Transfer (NST)</strong> model based on convolutional neural networks (CNNs). Here is the technical breakdown of how it synthesizes a new image:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-1">Feature Extraction (VGG-19)</h4>
                  <p className="font-body-md text-on-surface-variant">
                    We feed both source images into a pre-trained VGG-19 neural network. Deep layers represent high-level conceptual structures (content), while shallow layers capture granular stylistic patterns like brushstrokes or leaf veins.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-1">Gram Matrices & Style Loss</h4>
                  <p className="font-body-md text-on-surface-variant">
                    Style is computed by calculating correlations between filter outputs at different layers (using Gram Matrices). By minimizing the difference in style representations, the generated image adopts the exact color palette and texture gradients of Canvas Beta.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-1">Optimization Loop</h4>
                  <p className="font-body-md text-on-surface-variant">
                    Starting from a blend or white noise, the system runs an optimizer (like L-BFGS or Adam) to iteratively adjust pixel values to minimize a combined loss function: 
                    <code className="block mt-1.5 p-2.5 bg-surface-container-low rounded-xl text-primary font-mono text-sm text-center">
                      Total Loss = α * Content Loss + β * Style Loss
                    </code>
                  </p>
                </div>
              </li>
            </ul>

            {/* Neural style flow diagram */}
            <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10 text-center">
              <p className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider mb-3">Neural Architecture Flow</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-label-md">
                <div className="px-3 py-1.5 bg-surface rounded-lg border border-outline-variant/10 shadow-xs">
                  Content (Alpha)
                </div>
                <span className="material-symbols-outlined text-outline/40 rotate-90 sm:rotate-0">arrow_forward</span>
                <div className="px-3 py-2 bg-primary text-on-primary rounded-xl font-bold">
                  VGG-19 CNN Optimizer
                </div>
                <span className="material-symbols-outlined text-outline/40 rotate-90 sm:rotate-0">arrow_back</span>
                <div className="px-3 py-1.5 bg-surface rounded-lg border border-outline-variant/10 shadow-xs">
                  Style (Beta)
                </div>
                <span className="hidden sm:inline material-symbols-outlined text-outline/40">subdirectory_arrow_right</span>
                <span className="sm:hidden material-symbols-outlined text-outline/40 rotate-90">arrow_forward</span>
                <div className="px-3 py-1.5 bg-secondary text-on-secondary rounded-lg font-bold">
                  Fused Hybrid Output
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Technical Stack */}
          <section className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 md:p-8 mb-6 shadow-xs hover:border-primary/20 transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-2xl">layers</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">The Technology Stack</h2>
            </div>
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-4">
              Botanical Merge operates using a split architecture: a sleek React-based client for creation and auth, combined with a performant Python deep learning server.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-outline-variant/20 bg-surface rounded-2xl">
                <h4 className="font-title-md text-title-md text-primary font-bold mb-2">Frontend Application</h4>
                <ul className="space-y-1.5 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <strong>React 19 & TypeScript</strong> — Declarative UI layer
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <strong>Vite</strong> — Lightning-fast compilation & hot loading
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <strong>Clerk Authentication</strong> — Secure user accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <strong>IndexedDB</strong> — Offline browser storage for merges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <strong>Vercel Analytics</strong> — Core metrics and insights
                  </li>
                </ul>
              </div>
              <div className="p-4 border border-outline-variant/20 bg-surface rounded-2xl">
                <h4 className="font-title-md text-title-md text-secondary font-bold mb-2">Backend & Deep Learning</h4>
                <ul className="space-y-1.5 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <strong>FastAPI</strong> — High-performance python web framework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <strong>PyTorch / Torchvision</strong> — Deep learning backend
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <strong>VGG-19</strong> — Pretrained Convolutional model
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <strong>Uvicorn</strong> — ASGI server for quick routing
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// pages/index.jsx
import Head from 'next/head';
import { motion } from 'framer-motion';

// Mock Data (this would come from your Prisma database)
const wallpapers = [
  { id: 1, title: 'Abstract Waves', url: '/images/abstract.jpg', height: 'h-96' },
  { id: 2, title: 'Dark Mountain', url: '/images/mountain.jpg', height: 'h-72' },
  { id: 3, title: 'Neon Cyberpunk', url: '/images/neon.jpg', height: 'h-120' },
  // ... more items
];

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      {/* SEO Setup */}
      <Head>
        <title>4kWALLPAPER | Discover Stunning High-Res Backgrounds</title>
        <meta name="description" content="Download high-quality 4k wallpapers for your desktop and mobile devices." />
      </Head>

      {/* Sticky Chrome Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-canvas px-xl border-b border-[#dadad3]">
        {/* TEXT LOGO - No Icon */}
        <h1 className="text-heading-xl font-bold tracking-tighter text-primary">
          4kWALLPAPER
        </h1>

        {/* Search Bar (Rounded Full per spec) */}
        <div className="hidden md:flex flex-1 mx-xl max-w-2xl">
          <input 
            type="text" 
            placeholder="Search for 4k wallpapers, nature, dark..." 
            className="w-full bg-surface-card px-md py-sm rounded-full text-body focus:bg-canvas focus:outline-none focus:ring-2 focus:ring-[#435ee5]"
          />
        </div>

        {/* Auth / CTA */}
        <div className="flex gap-md">
          <button className="bg-surface-card text-ink font-bold px-lg py-sm rounded-md hover:bg-[#e5e5e0]">
            Log in
          </button>
          <button className="bg-primary text-canvas font-bold px-lg py-sm rounded-md hover:bg-primary-pressed transition-colors">
            Sign up
          </button>
        </div>
      </header>

      {/* Masonry Content Grid */}
      <main className="px-xl py-section mx-auto max-w-[1280px]">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-sm space-y-sm">
          {wallpapers.map((pin, index) => (
            <motion.div
              key={pin.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative break-inside-avoid bg-surface-card rounded-md overflow-hidden group cursor-pointer ${pin.height}`}
            >
              {/* Image Placeholder - Replace with next/image */}
              <div className="w-full h-full bg-[#c8c8c1] flex items-center justify-center">
                 <span className="text-mute text-sm">{pin.title}</span>
              </div>

              {/* Hover Overlay Pill (from design spec) */}
              <div className="absolute top-sm left-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-canvas text-ink text-xs font-bold px-md py-xs rounded-full shadow-md">
                  Save
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

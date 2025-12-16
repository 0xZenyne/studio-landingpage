import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import type { GalleryItem } from 'types'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    title: 'Minimalist Portrait',
    category: 'Photography',
    image: 'https://picsum.photos/seed/p1/800/1000',
  },
  {
    id: '2',
    title: 'Urban Shapes',
    category: 'Photography',
    image: 'https://picsum.photos/seed/p2/800/1000',
  },
  {
    id: '3',
    title: 'Ceramic Texture',
    category: 'Craft',
    image: 'https://picsum.photos/seed/p3/800/1000',
  },
  {
    id: '4',
    title: 'Shadow Play',
    category: 'Digital',
    image: 'https://picsum.photos/seed/p4/800/1000',
  },
  {
    id: '5',
    title: 'The Glass House',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/p5/800/1000',
  },
  {
    id: '6',
    title: 'Golden Hour',
    category: 'Photography',
    image: 'https://picsum.photos/seed/p6/800/1000',
  },
  {
    id: '7',
    title: 'Mono Concept',
    category: 'Digital',
    image: 'https://picsum.photos/seed/p7/800/1000',
  },
  {
    id: '8',
    title: 'Matte Finish',
    category: 'Craft',
    image: 'https://picsum.photos/seed/p8/800/1000',
  },
]

function RouteComponent() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Photography', 'Digital', 'Craft', 'Architecture']

  const filteredItems =
    filter === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="serif italic">Works</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto mb-12">
            Explore our curated selection of projects, from commercial shoots to
            personal artistic explorations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-black text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] overflow-hidden bg-slate-100 rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                  <span className="text-xs uppercase tracking-widest mb-2 opacity-70">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold serif">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

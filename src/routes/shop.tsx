import { createFileRoute } from '@tanstack/react-router'
import { Info, ShoppingCart } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import type { Product } from 'types'

export const Route = createFileRoute('/shop')({
  component: RouteComponent,
})

const SHOP_DATA: Product[] = [
  {
    id: '1',
    name: 'Oak Minimalist Frame',
    category: 'Frame',
    price: 45,
    image: 'https://picsum.photos/seed/f1/600/600',
    description: 'Handcrafted oak frame with high-grade anti-reflective glass.',
  },
  {
    id: '2',
    name: 'Obsidian Matte Cup',
    category: 'Cup',
    price: 28,
    image: 'https://picsum.photos/seed/c1/600/600',
    description: 'Ergonomic ceramic cup with a signature matte black finish.',
  },
  {
    id: '3',
    name: 'Floating Glass Frame',
    category: 'Frame',
    price: 55,
    image: 'https://picsum.photos/seed/f2/600/600',
    description: 'Modern frameless design that lets your artwork breathe.',
  },
  {
    id: '4',
    name: 'Dune Sandstone Cup',
    category: 'Cup',
    price: 32,
    image: 'https://picsum.photos/seed/c2/600/600',
    description: 'Textured sandstone finish inspired by coastal landscapes.',
  },
  {
    id: '5',
    name: 'Walnut Heritage Frame',
    category: 'Frame',
    price: 65,
    image: 'https://picsum.photos/seed/f3/600/600',
    description: 'Deep walnut wood for a classic and timeless studio look.',
  },
  {
    id: '6',
    name: 'Cloud Ceramic Mug',
    category: 'Cup',
    price: 25,
    image: 'https://picsum.photos/seed/c3/600/600',
    description: 'Soft white curves with a unique marbled sky pattern.',
  },
]

function RouteComponent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-screen bg-slate-50/30 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="pt-20 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                The <span className="serif italic">Studio</span> Shop
              </h1>
              <p className="text-slate-500 max-w-xl">
                Bespoke artifacts designed in-house. From custom frames to
                artisanal cups, elevate your space.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-slate-400">
              <Info size={18} />
              <span className="text-xs uppercase tracking-widest font-bold">
                Free Worldwide Shipping on $100+
              </span>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOP_DATA.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold serif">{product.name}</h3>
                  <span className="text-lg font-medium text-slate-900">
                    ${product.price}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  {product.description}
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-4 bg-black text-white rounded-full text-sm font-bold flex items-center justify-center group-hover:bg-slate-800 transition-colors"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Customize & Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Customize Modal Mockup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 bg-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-10">
                <h2 className="text-3xl font-bold serif mb-2">
                  {selectedProduct.name}
                </h2>
                <span className="text-xl font-medium text-slate-900 mb-6 block">
                  ${selectedProduct.price}
                </span>

                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 tracking-widest block mb-3">
                      Custom Engraving
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lumina 2024"
                      className="w-full border-b border-slate-200 py-2 focus:border-black outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 tracking-widest block mb-3">
                      Finish
                    </label>
                    <div className="flex space-x-3">
                      {['Matte', 'Gloss', 'Satin'].map((f) => (
                        <button
                          key={f}
                          className="px-4 py-1.5 border border-slate-200 rounded-full text-xs hover:border-black transition-colors"
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button className="w-full py-4 bg-black text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full py-4 text-slate-500 text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

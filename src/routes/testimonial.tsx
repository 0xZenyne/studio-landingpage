import { createFileRoute } from '@tanstack/react-router'
import { Quote, Star } from 'lucide-react'
import { motion } from 'motion/react'
import type { Testimonial } from 'types'

export const Route = createFileRoute('/testimonial')({
  component: RouteComponent,
})

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Julianne V.',
    role: 'Interior Designer',
    text: 'Lumina Studio transformed our office space. Their frames are museum-quality, and the photography captured our brand essence perfectly.',
    avatar: 'https://picsum.photos/seed/av1/100/100',
  },
  {
    id: '2',
    name: 'Robert Blake',
    role: 'Coffee Connoisseur',
    text: "The Obsidian cup is my daily driver. Perfect weight, incredible texture. It's rare to find something this beautiful that's also functional.",
    avatar: 'https://picsum.photos/seed/av2/100/100',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Architect',
    text: "I've commissioned several digital pieces for clients. The attention to detail and professional communication from the team is unmatched.",
    avatar: 'https://picsum.photos/seed/av3/100/100',
  },
  {
    id: '4',
    name: 'Kenji Sato',
    role: 'Art Collector',
    text: "The studio's work has a soul. You can tell they care about every line and every shadow. Truly a premium experience from start to finish.",
    avatar: 'https://picsum.photos/seed/av4/100/100',
  },
]

function RouteComponent() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="pt-20 pb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Client <span className="serif italic">Voices</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            We're honored to have worked with some of the most creative minds
            and passionate individuals globally.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-8 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-slate-100 mb-6" size={48} />
                <p className="text-xl text-slate-700 leading-relaxed mb-10 italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 bg-slate-900 rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold serif mb-8">
              Ready to create your story?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
              Let's collaborate on your next project. Whether it's a studio
              session or a custom shop order, we're here to help.
            </p>
            <button className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Contact Us Now
            </button>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </motion.div>
      </div>
    </div>
  )
}

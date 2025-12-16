import Particles from '@/components/Particles'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Camera, Palette, ShoppingBag, Star } from 'lucide-react'
import { motion } from 'motion/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <Particles />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
              Creative Visual Studio
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6">
              Crafting <span className="serif italic">Elegance</span> <br /> In
              Every Pixel.
            </h1>
            <p className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
              We bring your vision to life through high-end photography, bespoke
              digital art, and custom-crafted studio products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center group hover:scale-105 transition-transform"
              >
                View Portfolio
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                to="/about"
                className="border border-slate-200 text-slate-800 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/studio-hero/800/1000"
                alt="Studio Work"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-50 z-0 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-100 z-0 rounded-full blur-3xl opacity-40"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Projects Done', value: '250+' },
            { label: 'Happy Clients', value: '1.2k' },
            { label: 'Awards Won', value: '15' },
            { label: 'Cups Designed', value: '5k+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-slate-500 text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Expertise
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From the lens to the final print, we ensure every detail reflects
              the premium quality our studio is known for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Photography',
                icon: <Camera />,
                desc: 'High-end studio sessions for brands and individuals.',
              },
              {
                title: 'Bespoke Design',
                icon: <Palette />,
                desc: 'Custom artwork tailored to your home or office aesthetic.',
              },
              {
                title: 'Curated Shop',
                icon: <ShoppingBag />,
                desc: 'Handcrafted frames and personalized cups for your lifestyle.',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-black">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/about"
                  className="text-sm font-bold flex items-center hover:underline"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Star
            className="mx-auto mb-8 text-slate-200 fill-slate-200"
            size={48}
          />
          <h2 className="text-3xl md:text-5xl font-medium leading-tight serif italic">
            "Design is not just what it looks like and feels like. Design is how
            it works and the emotion it evokes in your everyday life."
          </h2>
          <p className="mt-8 text-slate-500 uppercase tracking-widest text-sm">
            — Lumina Studio Team
          </p>
        </div>
      </section>
    </div>
  )
}

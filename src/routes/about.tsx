import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-10 serif italic">
            Our <br /> Philosophy.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Founded in 2018, Lumina Studio began as a small boutique photography
            lab with a singular mission: to blend technical precision with
            artistic soul.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Today, we are a multidisciplinary team of photographers, digital
            artists, and craftspeople. We believe that the objects and images
            you surround yourself with should reflect a narrative of quality and
            intentionality.
          </p>
          <div className="flex space-x-12">
            <div>
              <p className="text-3xl font-bold mb-1">05</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">12</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                Global Awards
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]"
        >
          <img
            src="https://picsum.photos/seed/about/800/1000"
            alt="The Studio Space"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: 'Quality First',
                desc: 'We never compromise on materials. From Italian leather to archival paper, only the best makes the cut.',
              },
              {
                title: 'Human Touch',
                desc: 'While we embrace modern tools, every product is hand-finished by our master artisans in the studio.',
              },
              {
                title: 'Sustainability',
                desc: 'We source locally and use eco-conscious packaging because we care about the legacy we leave behind.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <span className="text-slate-500 font-bold text-lg mb-4 block">
                  0{i + 1}.
                </span>
                <h3 className="text-3xl font-bold mb-6 serif">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold serif italic mb-4">
              Meet the Visionaries
            </h2>
            <p className="text-slate-500">
              The hearts and hands behind Lumina Studio.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Marcus Chen',
                role: 'Lead Photographer',
                img: 'https://picsum.photos/seed/m1/400/400',
              },
              {
                name: 'Elena Rossi',
                role: 'Art Director',
                img: 'https://picsum.photos/seed/m2/400/400',
              },
              {
                name: 'Sami Al-Fayed',
                role: 'Master Potter',
                img: 'https://picsum.photos/seed/m3/400/400',
              },
              {
                name: 'Chloe Dubois',
                role: 'Digital Artist',
                img: 'https://picsum.photos/seed/m4/400/400',
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

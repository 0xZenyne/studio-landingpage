import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold serif mb-8 block">
              LUMINA STUDIO
            </Link>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed">
              Elevating aesthetics through professional photography, bespoke
              digital art, and artisanal studio goods.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About', path: '/about' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-black transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">
              Newsletter
            </h4>
            <p className="text-sm text-slate-500 mb-6">
              Receive curated updates on new works and seasonal drops.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-slate-200 py-3 focus:border-black outline-none text-sm bg-transparent"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-xs uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-6">
          <p className="text-sm text-slate-400">
            © 2024 Lumina Studio. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-400">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

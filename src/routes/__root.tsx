import CustomCursor from '@/components/Cursor'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="relative min-h-screen bg-white">
      <div className="pt-20">
        <Navbar />
        <CustomCursor />
      </div>
      <Outlet />
      <Footer />
    </div>
  ),
})

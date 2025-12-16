export interface Product {
  id: string
  name: string
  category: 'Frame' | 'Cup'
  price: number
  image: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  avatar: string
}

export interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
}

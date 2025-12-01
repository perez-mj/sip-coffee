import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import About from '@/views/About.vue'
import Visit from '@/views/Visit.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { title: 'Home | Sip Coffee' }
  },
  { 
    path: '/menu', 
    name: 'Menu', 
    component: Menu,
    meta: { title: 'Menu | Sip Coffee' }
  },
  { 
    path: '/about', 
    name: 'About', 
    component: About,
    meta: { title: 'About Us | Sip Coffee' }
  },
  { 
    path: '/visit', 
    name: 'Visit', 
    component: Visit,
    meta: { title: 'Visit Us | Sip Coffee' }
  },
  { 
    path: '/gallery', 
    name: 'Gallery', 
    component: Gallery,
    meta: { title: 'Gallery | Sip Coffee' }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact,
    meta: { title: 'Contact | Sip Coffee' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Dynamic page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Sip Coffee | Filipino-inspired Coffee Shop'
  next()
})

export default router
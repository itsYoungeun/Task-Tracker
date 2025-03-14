import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
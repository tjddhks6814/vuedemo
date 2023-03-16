import Home from '@/pages/Home'
import Login from '@/pages/Login'
import { createRouter, createWebHistory } from 'vue-router'

// Router은 따로 분리해서 사용

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

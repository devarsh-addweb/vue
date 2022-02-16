import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/Home'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/LogIn'
    },
    {
        name:'Add',
        component:Add,
        path:'/Add'
    },
    {
        name:'Update',
        component:Update,
        path:'/Update/:id'
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
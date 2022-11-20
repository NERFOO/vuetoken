import { createWebHistory, createRouter } from "vue-router";
import EmpleadosComponent from './components/EmpleadosComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import EmpleadoDetalle from './components/EmpleadoDetalle.vue'

const routes = [
    {
        path : "/" , component : LoginComponent
    },
    {
        path : "/empleados" , component : EmpleadosComponent
    },
    {
        path : "/empleadodetalle/:id" , component : EmpleadoDetalle
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;
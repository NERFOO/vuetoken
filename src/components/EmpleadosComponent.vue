<template>
    <div>
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in usuarios" :key="user.idEmpleado">
                        <td>{{user.idEmpleado}}</td>
                        <td>{{user.apellido}}</td>
                        <td>{{user.oficio}}</td>
                        <td>{{user.salario}}</td>
                        <td><router-link :to="`/empleadodetalle/${user.idEmpleado}`" class="btn btn-success">Detalles</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "EmpleadosComponent" ,
    data() {
        return {
            usuarios : []
        }
    },
    mounted() {
        service.getUsuarios().then( res => {
            this.usuarios = res;
        })
    }
}
</script>

<style>

</style>
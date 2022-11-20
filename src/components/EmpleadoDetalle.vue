<template>
    <div>
        <div class="card" style="width: 50%; margin: auto">
            <div class="card-body">
                <h5 class="card-title">{{usuario.apellido}}</h5>
                <p class="card-text">{{usuario.oficio}}</p>
                <p class="card-text">{{usuario.salario}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "EmpleadoDetalle" ,
    data() {
        return {
            usuario : {} ,
            id : 0
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        service.getUsuarioId(this.id).then( res => {
            this.usuario = res;
        })
    }
}
</script>

<style>

</style>
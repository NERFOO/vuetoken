<template>
    <div>
        <form v-on:submit.prevent="cargarToken()">
            <label>Username</label>
            <input type="text" v-model="usuario.username"><br/>
            <label>Password</label>
            <input type="password" v-model="usuario.password"><br/>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "LoginComponent" ,
    data() {
        return {
            usuario : {
                username : "" ,
                password : ""
            }
        }
    },
    methods : {
        cargarToken() {
            service.post(this.usuario).then( res => {
                localStorage.setItem('token', res.response);
                this.$router.push(`/empleados`);
            })
        }
    },
    mounted() {
    }
}
</script>

<style>

</style>
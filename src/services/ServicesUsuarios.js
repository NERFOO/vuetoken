import Global from "@/Global";
import axios from "axios";

export default class ServicesPeliculas {
    post(usuario) {
        return new Promise(function (resolve) {
            var json = JSON.stringify(usuario);
            var header = {
                "Content-Type" : "application/json" ,
                "responseType" : "json"
                // "Authorization" : "Bearer " + token
            }
            var request = "/auth/login/";
            var url = Global.url + request;

            axios.post(url, json, {headers : header}).then( res => {
                resolve(res.data);
            })
        })
    }

    getUsuarios() {
        return new Promise(function (resolve) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };

            var request = "/api/Empleados/";
            var url = Global.url + request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }

    getUsuarioId(id) {
        return new Promise(function (resolve) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };

            var request = "/api/Empleados/" + id;
            var url = Global.url + request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }
}
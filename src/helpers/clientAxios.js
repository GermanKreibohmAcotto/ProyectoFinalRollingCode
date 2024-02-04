import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_URL_BACK_LOCAL}/api`
    // baseURL: `${import.meta.env.VITE_URL_BACK_DEPLOY}/api`
})

export const config = {
    'content-type': 'application/json'
}

export default clienteAxios
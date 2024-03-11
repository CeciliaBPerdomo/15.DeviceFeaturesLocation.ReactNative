import { object, string, ref } from "yup"

export const registerSchema = object().shape({
    password: string().required("La contrasena es requerida").min(6, "Minimo 6 caracteres"),
    confirmPassword: string().required("La confirmacion de contrasena es requerida").oneOf([ref("password")], "El password no coincide"),
    email: string().required("El e-mail es requerido").email("No es un mail valido")
})

export const loginSchema = object().shape({
    password: string().required("La contrasena es requerida").min(6, "Minimo 6 caracteres"),
    email: string().required("El e-mail es requerido").email("No es un mail valido")
})
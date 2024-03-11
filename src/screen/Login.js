import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'

import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from "../features/auth/authSlice"
import { loginSchema } from '../utils/validaciones/authSchema'


const Login = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMail, setErrorMail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    const [triggerLogin] = useLoginMutation()

    const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data } = await triggerLogin({ email, password })
            
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken
            }))
        } catch (error) {
            setErrorMail("")
            setPassword("")

            switch (error.path) {
                case "email":
                    setErrorMail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                default:
                    break
            }
        }
    }
    return (
        <View style={styles.main}>
            <View style={styles.container}>

                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorMail}
                />

                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />

                <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
                <Text style={styles.sub}>No tienes cuenta?</Text>

                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    main: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20
    },

    container: {
        width: "90%",
        backgroundColor: colors.green1,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },

    title: {
        fontSize: 22,
        fontFamily: fonts.JosefinSlabBold
    },

    sub: {
        fontSize: 14,
        fontFamily: fonts.JosefinSlabBold
    },

    subLink: {
        fontSize: 14,
        fontFamily: fonts.JosefinSlabBold,
        color: "blue"
    },
})
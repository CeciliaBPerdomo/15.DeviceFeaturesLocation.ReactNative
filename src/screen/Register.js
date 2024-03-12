import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useRegisterMutation } from '../app/services/auth'

// Redux
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { registerSchema } from '../utils/validaciones/authSchema'

const Register = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorMail, setErrorMail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const [triggerRegister] = useRegisterMutation()

    const onSubmit = async () => {
        try {
            // Validacion
            registerSchema.validateSync({ email, password, confirmPassword })
            const { data } = await triggerRegister({ email, password })
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))
        } catch (error) {
            
            setErrorMail("")
            setPassword("")
            setErrorConfirm("")

            switch (error.path) {
                case "email":
                    setErrorMail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                case "confirmPassword":
                    setErrorConfirm(error.message)
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

                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error={errorConfirm}
                />

                <SubmitButton onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>Ya tienes cuenta?</Text>

                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.subLink}>Inicia sesión</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register

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
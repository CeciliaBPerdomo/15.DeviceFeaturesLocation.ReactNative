import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapPreview from '../components/MapPreview'

import AddButton from '../components/AddButton'

const LocationSelector = ({ navigation }) => {
    const [location, setLocation] = useState({
        latitude: "",
        longitude: ""
    })

    const [errorMsg, setErrorMsg] = useState(null)
    const [address, setAdress] = useState("Colonia")

    const onConfirmAddress = () => {
        console.log("Confirmado")
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {address}
            </Text>

            {/* Latitud: -34.463481 | Longitud: -57.832339 */}
            <MapPreview
                latitude="-34.463481" // {location.latitude}
                longitude="-57.832339" // {location.longitude}
            />

            <AddButton
                title="Confirmar localización"
                onPress={onConfirmAddress}
            />
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 40,
        gap: 20
    },
    text: {
        fontSize: 16
    },
})
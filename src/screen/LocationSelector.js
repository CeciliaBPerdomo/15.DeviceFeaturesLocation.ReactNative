import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import MapPreview from '../components/MapPreview'
import AddButton from '../components/AddButton'

// Expo Location
import * as Location from "expo-location"
import Constants from "expo-constants"

const API_KEY = Constants.expoConfig.extra.MAP_API_KEY;

const LocationSelector = ({ navigation }) => {
    const [location, setLocation] = useState({
        latitude: "",
        longitude: ""
    })

    const [errorMsg, setErrorMsg] = useState(null)
    const [address, setAdress] = useState("")

    useEffect(() => {
        // Funcion asincronica anonima
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status != "granted") {
                setErrorMsg("Permisos denegado")
                return
            } else {
                let location = await Location.getCurrentPositionAsync()
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            }
        })()

    }, [])

    useEffect(() => {
        (async () => {
            if (location.latitude) {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${API_KEY}`)
                const data = await response.json()
                setAdress(data.results[0].formatted_address)
            }
        })()
    }, [location])


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
                latitude={location.latitude}
                longitude={location.longitude}
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
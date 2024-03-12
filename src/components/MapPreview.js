import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MapPreview = ({ latitude, longitude }) => {

    const YOUR_API_KEY = "AIzaSyBj749kc3OVwi0FxBt2EaIha_ByTPPZxFw"

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
        &zoom=13
        &size=600x300
        &maptype=roadmap
        &markers=color:blue%7Clabel:S%7C${latitude},${longitude}
        &key=${YOUR_API_KEY}`

    return (
        <Image
            source={
                latitude ? { uri: mapPreviewUrl } :
                require("../../assets/mapa.jpg")
            }
            style={styles.imagen}
        />
    )
}

export default MapPreview

const styles = StyleSheet.create({
    imagen: {
        width: "90%",
        height: 300,
        borderWidth: 1,
        borderRadius: 20,
    }
})
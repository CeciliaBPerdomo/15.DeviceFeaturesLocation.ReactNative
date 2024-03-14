import { StyleSheet, Image } from 'react-native'
import Constants from "expo-constants"

const API_KEY = Constants.expoConfig.extra.MAP_API_KEY;

const MapPreview = ({ latitude, longitude }) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${latitude},${longitude}
    &key=${API_KEY}`

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
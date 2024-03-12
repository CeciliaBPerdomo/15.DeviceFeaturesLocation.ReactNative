import { Pressable, StyleSheet, Text } from 'react-native'
import colors from '../utils/global/colors'

const AddButton = ({ title, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green2,
        width: "70%",
        paddingVertical: 10,
        margin: 12
    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
})
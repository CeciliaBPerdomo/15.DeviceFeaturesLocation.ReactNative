import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headers from '../components/Headers';
import Profile from '../screen/Profile';
import ImageSelector from '../screen/ImageSelector';
import LocationSelector from '../screen/LocationSelector';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={({ navigation }) => {
                return {
                    header: () => {
                        return <Headers
                            title="Perfil"
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
            <Stack.Screen
                name="Perfil"
                component={Profile}
            />

            <Stack.Screen
                name="ImageSelector"
                component={ImageSelector}
            />

            <Stack.Screen
                name="LocationSelector"
                component={LocationSelector}
            />  


        </Stack.Navigator>
    )
}

export default ProfileStack
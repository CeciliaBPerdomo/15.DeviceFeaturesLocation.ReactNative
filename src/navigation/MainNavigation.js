//Navegacion
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation';

import { useEffect } from 'react';
import AuthStack from './AuthStack';

//Redux
import { useSelector } from 'react-redux';

const MainNavigation = () => {

    const user = useSelector((state) => state.auth)

    // useEffect(() => {
    //    console.log("useEffect", user)
    // }, [user])

    return (
            <NavigationContainer>

                { user.idToken ?
                    <TabNavigation /> :
                    <AuthStack /> 
                }

            </NavigationContainer>
    )
}

export default MainNavigation

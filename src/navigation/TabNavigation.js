import { StyleSheet } from 'react-native'
import colors from '../utils/global/colors';

// Bottoms Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartStack from './CartStack';
import ShopStack from './ShopStack'
import OrderStack from './OrderStack';
import TabBarIcon from '../components/TabBarIcon';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,         // No muestra el encabezado del tab
                tabBarShowLabel: false,     // No muestra el texto del tab
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Productos" icono="home" focused={focused} />
                }}
            />

            <Tab.Screen
                name="CartStack"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Carrito" icono="shopping-cart" focused={focused} />
                }}
            />

            <Tab.Screen
                name="OrderStack"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Ordenes" icono="list" focused={focused} />
                }}
            />

            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Perfil" icono="users" focused={focused} />
                }}
            />

        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green1,
        height: 80,
        shadowColor: "black",
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 25,
        borderRadius: 15,
        elevation: 4
    }
})
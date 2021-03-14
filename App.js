/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Home } from "./screens/";

import { images, icons, COLORS, FONTS, SIZES } from './constants';
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
        "CarmenSans-Regular" : require('./assets/fonts/CarmenSans-Regular.otf'),
        "CarmenSans-SemiBold" : require('./assets/fonts/CarmenSans-SemiBold.otf'),
        "CarmenSans-Thin" : require('./assets/fonts/CarmenSans-Thin.otf'),
        "CocoGothic-Bold" : require('./assets/fonts/CocoGothic-Bold.ttf'),
        "CocoGothic": require('./assets/fonts/CocoGothic.ttf'),
    })

    if(!loaded){
        return null;
    }

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'SHOE SELECTOR',
                        headerStyle: {
                            //backgroundColor: '#f4511e',
                        },
                        headerTintColor: COLORS.lightGray,
                        headerTitleStyle: {
                            ...FONTS.navTitle
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default () => {
    return <App />;
};

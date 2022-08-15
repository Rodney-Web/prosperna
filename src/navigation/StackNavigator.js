import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddProductScreen from '../screens/AddProductScreen';
import StoreScreen from '../screens/StoreScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import EditProductScreen from '../screens/EditProductScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator () {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false}}>
            <Stack.Screen
                name='Store'
                component={StoreScreen}
            />
            <Stack.Screen
                name='AddProduct'
                component={AddProductScreen}
            />
            <Stack.Screen
                name='EditProduct'
                component={EditProductScreen}
            />
            <Stack.Screen
                name='ProductDetail'
                component={ProductDetailScreen}
            />
            <Stack.Screen
                name='Cart'
                component={CartScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
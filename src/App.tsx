import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
import {Text, View} from 'react-native';

export type RootParamsList = {
  Home: undefined;
  Details: {
    product: Product;
  };
};

const Stack = createNativeStackNavigator<RootParamsList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending Product',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hello world</Text>
    // </View>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Home from "../views/Home";
import Galery from "../views/Galery";

const Stack = createNativeStackNavigator<RootStackParams>();
const routesScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7, 26, 93, 255)',
  },
  headerTitleStyle: {
    color: 'white',
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routesScreenDefaultOptions}
        />
        <Stack.Screen
          name="Galery"
          component={Galery}
          options={routesScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
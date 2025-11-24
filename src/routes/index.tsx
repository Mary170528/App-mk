import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "../pages/login";
import ForgotPassword from "../pages/esqueciSenha";

import TelaHome from "../pages/TelaHome";
import Profile from "../pages/Perfil user";

import TelaExames from "../pages/TelaExames";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobrenós";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* ---------------------------
      TABS (MENU INFERIOR)
----------------------------- */
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#8B0000",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ddd",
      }}
    >

      {/* HOME */}
      <Tab.Screen
        name="Home"
        component={TelaHome}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
      />

      {/* EXAMES */}
      <Tab.Screen
        name="Exames"
        component={TelaExames}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="analytics" size={26} color={color} />
          ),
        }}
      />

      {/* CONTATO */}
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="call" size={26} color={color} />
          ),
        }}
      />

      {/* PERFIL */}
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={26} color={color} />
          ),
        }}
      />

      {/* SOBRE NÓS */}
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={26} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

/* ---------------------------
      STACK PRINCIPAL
----------------------------- */
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* TELAS INICIAIS */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        {/* TABS APÓS LOGIN */}
        <Stack.Screen name="HomeTabs" component={Tabs} />

        {/* TELAS INTERNAS (caso chame por navigation.navigate) */}
        <Stack.Screen name="TelaExames" component={TelaExames} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Sobre" component={Sobre} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

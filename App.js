import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
}

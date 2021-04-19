import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Search from "../screens/Search";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";
import Detail from "../screens/Detail";
import {Button} from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {DrawerContent} from "../components/DrawerContent";

import Tabs from "./Tabs";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Modal } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default () => (
<>
  {/* <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  /> */}
  <Drawer.Navigator
    // mode={Modal}
    drawerContent={props => <DrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor:"#e91963",
      itemStyle: { marginVertical: 5 },
    }}
    screenOptions={{
      // headerStatusBarHeight: 5,
      // headerTransparent: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: "#5234bf",
        
        
        // height: 50,
      },
      // headerTitle:null,
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerShown: true,
      headerTransparent: true,
      headerLeft: null,
    }}>
    <Stack.Screen
      name="SignIn"
      component={SigninScreen}
      options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: true, headerRight:()=>(
      <View style={{flexDirection:"row",justifyContent:"flex-end", alignItems:"center"}}>
        <TouchableOpacity 
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 0,
          marginRight: 10
        }} >
          <Icon 
          name="heart-outline"
          color={"white"}
          size={25}
          >
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity         
          style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 0,
          marginRight: 10
        }}>
          <Icon 
          name="account-check-outline"
          color={"white"}
          size={25}
          ></Icon>
        </TouchableOpacity>
        <TouchableOpacity         
          style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 0,
          marginRight: 10
        }}>
          <Icon 
          name="cloud-print-outline"
          color={"white"}
          size={25}
          ></Icon>
        </TouchableOpacity>
      </View>
      
    )}}>
    </Stack.Screen>
    <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}></Stack.Screen>
  </Drawer.Navigator>
</>
);

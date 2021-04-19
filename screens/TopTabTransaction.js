import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QRgen from './QRgen';
import Search from '../screens/Search';
import TransactionCredit from "../screens/TransactionCredit"

const Tab = createMaterialTopTabNavigator();

const TopTabTransaction = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TransactionCredit" component={TransactionCredit} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

export default TopTabTransaction
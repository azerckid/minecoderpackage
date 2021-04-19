import React from "react";
import {View, StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer"
import {
    Avatar, 
    Title, 
    Caption, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch,
    Paragraph
  } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";


export const DrawerContent=(props)=>{

    const [isDarkTheme, setIsDarkTheme] =React.useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
                <View style={styles.drawerSection}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row", marginTop: 15}}>
                            <Avatar.Image source={{
                                uri:"https://images.samsung.com/is/image/samsung/ph-feature-galaxy-a80-blackpink-176653911?$ORIGIN_JPG$"
                            }}
                            size={60}>
                            </Avatar.Image>
                            <View style={{marginLeft: 15, flexDirection:"column"}}>
                                <Title style={styles.title}>Black Pink</Title>
                                <Caption styles={styles.caption}>lisa@blackpink.com</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.pragraph, styles.caption]}>800</Paragraph>
                                <Caption>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.pragraph, styles.caption]}>1200</Paragraph>
                                <Caption>Follower</Caption>
                            </View>
                        </View>                    
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size})=>(
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                ></Icon>
                            )}
                            label="Home"
                            onPress={()=>{props.navigation.navigate("Home")}}>
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size})=>(
                                <Icon 
                                    name="qrcode"
                                    color={color}
                                    size={size}
                                ></Icon>
                            )}
                            label="QR Code Generator"
                            onPress={()=>{props.navigation.navigate("QR Generator")}}>
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size})=>(
                                <Icon 
                                    name="qrcode-scan"
                                    color={color}
                                    size={size}
                                ></Icon>
                            )}
                            label="QR Code Scan"
                            onPress={()=>{props.navigation.navigate("QR Scan")}}>
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size})=>(
                                <MaterialIcons 
                                    name="transform"
                                    color={color}
                                    size={size}
                                ></MaterialIcons>
                            )}
                            label="Transaction"
                            onPress={()=>{props.navigation.navigate("Transaction")}}>
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size})=>(
                                <Icon 
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                ></Icon>
                            )}
                            label="Support"
                            onPress={()=>{}}>
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size})=>(
                                <SimpleLineIcons 
                                    name="settings"
                                    color={color}
                                    size={size}
                                ></SimpleLineIcons>
                            )}
                            label="Settings"
                            onPress={()=>{}}>
                        </DrawerItem>
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}></Switch>
                                </View>
                                
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
           </DrawerContentScrollView>
           <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size})=>(
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        ></Icon>
                    )}
                    label="Sign Out"
                    onPress={()=>{}}>
                </DrawerItem>
           </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    DrawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize: 16,
        marginTop:3,
        fontWeight:"bold"
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
    },
    row:{
        marginTop: 20,
        flexDirection:"row",
        alignItems:"center"
    },
    section:{
        flexDirection:"row",
        alignItems:"center",
        marginRight: 15
    },
    pragraph:{
        fontWeight:"bold",
        marginRight:3
    },
    drawerSection:{
        marginTop:10,
    },
    bottomDrawerSection:{
        marginBottom: 5,
        borderTopColor:"#f4f4f4",
        borderTopWidth: 1,
    },
    preference:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})
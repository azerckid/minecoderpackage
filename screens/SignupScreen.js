import React, { useState } from "react";
import { View,TextInput, StyleSheet, TouchableOpacity,Icon } from "react-native";
import { Input, Text } from "react-native-elements";
import firebase from "../firebase/fire";
import ScrollContainer from "../components/ScrollContainer"
import {Picker} from '@react-native-picker/picker';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [recommender, setRecommender] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const signUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(response);
      alert("sign Up successfully");
      navigation.navigate("SignIn");
      // 계정 만들기 API
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ScrollContainer >
      <Text>국가</Text>
      <View style={styles.pickerBoxContainer}>
        <View style={styles.pickerBoxInner}>
          <Picker
          style={{ height: 50, width: "100%"}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="대한민국" value="대한민국" />
            <Picker.Item label="인도네시아" value="인도네시아" />
            <Picker.Item label="베트남" value="베트남" />
            <Picker.Item label="일본" value="일본" />
          </Picker>
        </View>
      </View>
      <Text style={{marginTop: 10}}>지점</Text>
      <View style={styles.pickerBoxContainer}>
        <View style={styles.pickerBoxInner}>
          <Picker
          style={{ height: 50, width: "100%"}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="대한민국" value="대한민국" />
            <Picker.Item label="인도네시아" value="인도네시아" />
            <Picker.Item label="베트남" value="베트남" />
            <Picker.Item label="일본" value="일본" />
          </Picker>
        </View>
      </View>
      <Input
        label="성함"
        value={name}
        placeholder="성함을 입력해 주세요."
        onChangeText={setEmail}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          borderStyle: "solid",
          paddingLeft: 10,
          fontSize: 12,
        }}
      /> 
      <Input
        label="이메일"
        value={email}
        placeholder="이메일 주소를 입력해 주세요."
        onChangeText={setEmail}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          borderStyle: "solid",
          paddingLeft: 10,
          fontSize:12,
        }}
      />
      <Input
        label="아이디"
        value={id}
        placeholder="성함을 입력해 주세요."
        onChangeText={setEmail}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          borderStyle: "solid",
          paddingLeft: 10,
          fontSize:12,
        }}
      /> 
      <Input
        label="비밀번호"
        value={password}
        placeholder="비밀번호를 입력해 주세요."
        onChangeText={setPassword}
        secureTextEntry
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 5,
          paddingLeft: 10,
          fontSize: 12,
        }}
      />
      <Input
        label="비밀번호"
        value={password}
        placeholder="비밀번호를 한번 더 입력해주세요."
        onChangeText={setPassword}
        secureTextEntry
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          paddingLeft: 10,
          fontSize:12,
        }}
      />
      <Input
        label="추천인"
        value={recommender}
        placeholder="성함을 입력해 주세요."
        onChangeText={setEmail}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          borderStyle: "solid",
          paddingLeft: 10,
          fontSize:12,
        }}
      />
      <Input
        label="후원인"
        value={sponsor}
        placeholder="성함을 입력해 주세요."
        onChangeText={setEmail}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          borderStyle: "solid",
          paddingLeft: 10,
          fontSize:12,
        }}
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <TouchableOpacity onPress={() => signUp()}>
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={{ marginTop: 20 }}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textInput:{
    borderStyle:"solid", 
    height: 48,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:"#DEDEDE"
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#4d97ff",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#e3e3e3",
    color: "#b0b0b0",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 70,
  },
  pickerBoxContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginTop: 5,
  },
  pickerBoxInner: {
    paddingHorizontal:5,
    borderWidth: 0.6,
    borderColor: "#DEDEDE",
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 37,
  },
});

export default SignupScreen;


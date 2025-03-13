import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";
export default function SignUp() {
  const navigation = useNavigation();
  const router=useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    if(!email || !password || !fullname){
        ToastAndroid.show("Please enter all fields", ToastAndroid.LONG);
        return;
        }


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("--",errorMessage,errorCode);
  });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 10,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={"black"}/>  
        </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Create New Account
      </Text>
      {/* User Fullname */}
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Full Name
        </Text>
        <TextInput style={styles.input} placeholder="Enter Full Name"
            onChangeText={(value) => setFullname(value)}
        />
      </View>
      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} 
        onChangeText={(value) => setEmail(value)}
        placeholder="Enter Email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput style={styles.input} 
        secureTextEntry = {true}
        onChangeText={(value) => setPassword(value)}
        placeholder="Enter Password" />
      </View>
      {/* Create Account Button */}
      <TouchableOpacity 
        onPress={OnCreateAccount}
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50,
        borderWidth: 1,
      }}>
        <Text style={{
            color: Colors.WHITE,
            textAlign: "center"
        }}>Create Account</Text>
      </TouchableOpacity>
      {/* Sign In Button */}
      <TouchableOpacity 
        onPress={() => router.push("/auth/sign-in")}
      style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20 ,
        borderWidth: 1,
      }}>
        <Text style={{
            color: Colors.PRIMARY,
            textAlign: "center"
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SignIn() {
  const navigation = useNavigation();
  const router=useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
        
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold", marginTop: 30 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        You've been missed
      </Text>
        {/* Email */}
      <View style={{ marginTop: 50 }}
             >
        <Text style={{
            fontFamily: "outfit",
        }}>Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email'/>
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}
             >
        <Text style={{
            fontFamily: "outfit",
        }}>Password</Text>
        <TextInput
        style={styles.input}
         placeholder="Enter Password"/>
      </View>
      {/* Sign In Button */}
      <View style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50,
        borderWidth: 1,
      }}>
        <Text style={{
            color: Colors.WHITE,
            textAlign: "center"
        }}>Sign In</Text>
      </View>
      {/* Create Account Button */}
      <TouchableOpacity 
        onPress={() => router.push("/auth/sign-up")}
      style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,
      }}>
        <Text style={{
            color: Colors.PRIMARY,
            textAlign: "center"
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.GRAY,
        fontFamily: "outfit",
    }
});
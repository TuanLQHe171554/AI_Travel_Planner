import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
    const router=useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{ width: "100%", height: "500" }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push("/auth/sign-in")}
        >
          <Text style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit-bold" ,
            fontSize: 17
          }}>Get Started</Text>
        </TouchableOpacity>
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
        marginTop: 50,
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
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button:{
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "25%"
  }
});

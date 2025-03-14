import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
export default function StrartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-medium",
          marginTop: 10,
        }}
      >
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          marginTop: 10,
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experience! Get Started below
      </Text>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}

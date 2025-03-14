import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StrartNewTripCard from "../../component/MyTrips/StartNewTripCard";
export default function Mytrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {userTrips?.length == 0 ? <StrartNewTripCard /> : null}
    </View>
  );
}

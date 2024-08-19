import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="flex text-xl text-center font-psemibold">
        Open up App.js to start working on your app! saas
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

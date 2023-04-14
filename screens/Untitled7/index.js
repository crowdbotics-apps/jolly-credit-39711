import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <Pressable onPress={() => {
      navigation.navigate("Untitled8");
    }}><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }}></ScrollView></Pressable>
    <Pressable onPress={() => {
      navigation.navigate("uploadDocumentsScreen", {});
    }}><Text style={styles.FDgcZeHk}>Upload docs
    </Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  FDgcZeHk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled7;
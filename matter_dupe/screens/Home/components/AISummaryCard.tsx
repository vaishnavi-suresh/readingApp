import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SummaryItem from "./SummaryItem";
export function AISummaryCard({introDescription, SummaryItems}: {introDescription: string; SummaryItems: Array<{title: string; description: string}>}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{introDescription}</Text>
      {SummaryItems.map((item, index) => (
        <SummaryItem key={index} title={item.title} description={item.description} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.2,
    marginBottom: 4,
    fontFamily: "PlayfairDisplay-Regular",
    },
});
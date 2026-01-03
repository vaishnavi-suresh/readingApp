import React from "react";
import { Text, View, StyleSheet } from "react-native";

type SummaryItemProps = {
  title: string;        
  description: string;  
};

export const SummaryItem: React.FC<SummaryItemProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
    marginBottom: 4,
    fontFamily: "PlayfairDisplay-Regular",

    color: "#111",
  },
  description: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "PlayfairDisplay-Regular",
  },
});

export default SummaryItem;

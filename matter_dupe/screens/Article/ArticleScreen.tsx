import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Header } from '../../components/Header';

export function ArticleScreen() {
  return (
    <View style={styles.container}>
      <Header title="Article" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2", 
    paddingTop: 75,
    paddingHorizontal: 20,
  },

});

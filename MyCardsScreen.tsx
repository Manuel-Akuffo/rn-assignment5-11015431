import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Cards Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyCardsScreen;

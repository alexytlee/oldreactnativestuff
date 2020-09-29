import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text style={styles.subHeaderStyle}>Hello to you!</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      {greeting}
      <Text style={styles.subHeaderStyle}>Yep, the subheader is here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;

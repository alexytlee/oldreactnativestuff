import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}> Hi there! </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      >
        <Text>Go to List Demo</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      >
        <Text>Go to Image Demo</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      >
        <Text>Go to Counter Demo</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      >
        <Text>Go to Color Demo</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      >
        <Text>Go to Square Demo</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Demo"
      >
        <Text>Go to Text Demo</Text>
      </Button>
      <Button onPress={() => navigation.navigate("Box")} title="Go to Box Demo">
        <Text>Go to Box Demo</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

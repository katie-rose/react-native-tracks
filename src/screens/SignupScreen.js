import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title='Go to Signin'
        onPress={() => navigation.navigate("Sign In")}
      />
      <Button
        title='Go to main flow'
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SignupScreen;

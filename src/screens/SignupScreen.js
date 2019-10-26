import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Sign Up Screen</Text>;
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

const styles = StyleSheet.create({});

export default SignupScreen;

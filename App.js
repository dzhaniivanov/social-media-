import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/navigation";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { useEffect, useState } from "react";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const App = () => {
  // const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   Auth.currentAuthenticatedUser().then(setAuthUser);
  // }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c9c9",
  },
});

export default withAuthenticator(App);

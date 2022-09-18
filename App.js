import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import FeedScreen from "./src/screens/FeedScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <FeedScreen /> */}
        <CreatePostScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

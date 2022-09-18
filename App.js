import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <FeedScreen /> */}
        <Navigator />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

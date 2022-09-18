import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import FeedPost from "./src/components/FeedPost";
import posts from "./assets/data/posts.json";

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

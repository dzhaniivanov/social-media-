import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LikeImage from "../../assets/images/like.png";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { S3Image } from "aws-amplify-react-native";
import { DataStore } from "aws-amplify";
import { User } from "../models";

const dummy_img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const FeedPost = ({ post }) => {
  const navigation = useNavigation();

  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    DataStore.query(User, post.postUserId).then(setUser);
  }, []);

  return (
    <Pressable style={styles.post}>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate("Profile", { id: post.postUserId })}
      >
        {user?.image ? (
          <S3Image imgKey={user.image} style={styles.profileImage} />
        ) : (
          <Image
            source={{ uri: dummy_img }}
            style={styles.profileImage}
          />
        )}

        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </Pressable>
      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}
      {post.image && <S3Image imgKey={post.image} style={styles.image} />}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>
      </View>
      <View style={styles.buttonsRow}>
        <Pressable
          style={styles.iconButton}
          onPress={() => setIsLiked(!isLiked)}
        >
          <AntDesign
            name="like2"
            size={18}
            color={isLiked ? "royalblue" : "gray"}
          />
          <Text
            style={[
              styles.iconButtonText,
              { color: isLiked ? "royalblue" : "gray" },
            ]}
          >
            Like
          </Text>
        </Pressable>
        <View style={styles.iconButton}>
          <FontAwesome5 name="comment-alt" size={18} color="gray" />
          <Text style={styles.iconButtonText}>Comment</Text>
        </View>
        <View style={styles.iconButton}>
          <MaterialCommunityIcons name="share-outline" size={18} color="gray" />
          <Text style={styles.iconButtonText}>Share</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  //body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginTop: 10,
  },
  //footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
});

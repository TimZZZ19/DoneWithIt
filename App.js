import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("app ");
    console.log("cl");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Start working on your app!
      </Text>
      <TouchableHighlight onPress={() => console.log("touch")}>
        <Image
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

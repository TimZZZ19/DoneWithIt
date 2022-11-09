import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Alert,
  Platform,
  View,
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert("My title", "My message", [
      {
        text: "Yes",
        onPress: () => console.log("Yes"),
      },
      {
        text: "No",
        onPress: () => console.log("No"),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
        color="orange"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});

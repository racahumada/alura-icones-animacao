import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "react-native-vector-icons";
import LottieView from "lottie-react-native";
import { useRef } from "react";

export default function App() {
  const lottieRef = useRef(null);

  const startAnimation = () => {
    lottieRef.current.play();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Feather name="play" size={60} color="black" />
      </TouchableOpacity>
      <LottieView
        source={require("./assets/check.json")}
        style={{ width: 200, height: 200 }}
        loop={false}
        ref={lottieRef}
      />
      <Button title="Start animation" onPress={startAnimation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

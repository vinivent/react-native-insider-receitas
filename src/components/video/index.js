import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color={"#FFF"} />
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  arrowLeft: {
    width: "100%",
    backgroundColor: "#4CBE6C",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 14,
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 14,
  },
});

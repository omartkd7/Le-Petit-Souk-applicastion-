import { Image, StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("./img/LOGO.png")} style={styles.logo} />

      <Text>Le Petit Souk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});

export default Home;

import { Image, StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("./img/LOGO.png")} style={styles.logo} />

      <Text>Le Petit Souk</Text>

      <Text>Cuisine Marocaine Traditionnelle • Beni Mellal •</Text>

      <Text style={styles.text}>مرحبا بكم</Text>
      <Text style={styles.text}>Rienvenue cher nous</Text>
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
  text: {
    backgroundColor: "#F69D39",
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Home;

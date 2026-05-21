import { Image, StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require("./img/LOGO.png")} style={styles.logo} />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Le Petit Souk</Text>
        <Text style={styles.subtitle}>
          Cuisine Marocaine Traditionnelle • Beni Mellal •
        </Text>

        <View style={styles.divider} />

        <Text style={styles.welcomeAr}>مرحبا بكم</Text>
        <Text style={styles.welcomeFr}>Bienvenue chez nous</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6EC",
  },
  topSection: {
    flex: 1,
    backgroundColor: "#9dd2ee",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
  bottomSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#3B1A00",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 13,
    color: "#8B5E3C",
    textAlign: "center",
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: "#F69D39",
    borderRadius: 10,
    marginVertical: 4,
  },
  welcomeAr: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3B1A00",
    textAlign: "center",
  },
  welcomeFr: {
    fontSize: 16,
    color: "#8B5E3C",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default Home;

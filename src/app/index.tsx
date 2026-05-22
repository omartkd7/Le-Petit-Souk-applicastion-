import { useRouter } from "expo-router";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View>
        <Image source={require("./page/img/LOGO.png")} style={styles.logo} />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Le Petit Souk</Text>
        <Text style={styles.subtitle}>
          Cuisine Marocaine Traditionnelle Beni Mellal
        </Text>

        <Text style={styles.welcomeAr}>مرحبا بكم</Text>
        <Text style={styles.welcomeFr}>Bienvenue chez nous</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/page/Mine")}
        >
          <Text style={styles.buttonText}>Entrer →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    backgroundColor: "#FFF5E5",
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
  },
  subtitle: {
    fontSize: 13,
    textAlign: "center",
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
  button: {
    marginTop: 10,
    backgroundColor: "#F69D39",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

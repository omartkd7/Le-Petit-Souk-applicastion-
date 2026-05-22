import { ScrollView, StyleSheet, Text, View } from "react-native";

function Mine() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saveurs Authentiques du Maroc</Text>
        <Text style={styles.headerSub}>Menu du Jour</Text>
        <Text style={styles.headerSub}>Plat favori</Text>
      </View>

      <View style={styles.productList}>
        <View style={styles.productCard}>
          <Text style={styles.productName}>Produit 1</Text>
        </View>

        <View style={styles.productCard}>
          <Text style={styles.productName}>Produit 2</Text>
        </View>

        <View style={styles.productCard}>
          <Text style={styles.productName}>Produit 3</Text>
        </View>

        <View style={styles.productCard}>
          <Text style={styles.productName}>Produit 4</Text>
        </View>

        <View style={styles.productCard}>
          <Text style={styles.productName}>Produit 5</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Mine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E5",
  },
  header: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#F69D39",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
  },
  headerSub: {
    fontSize: 14,
    color: "#fff",
    marginTop: 4,
  },
  productList: {
    paddingHorizontal: 16,
    gap: 12,
    paddingBottom: 30,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3B1A00",
  },
});

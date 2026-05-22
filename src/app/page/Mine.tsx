import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

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
          <Image
            style={styles.imageproduct}
            source={require("@/assets/IMAGE FOOD MAR/1.png")}
          />
          <Text style={styles.productName}>Produit 1</Text>
        </View>

        <View style={styles.productCard}>
          <Image
            style={styles.imageproduct}
            source={require("@/assets/IMAGE FOOD MAR/2.png")}
          />

          <Text style={styles.productName}>Produit 2</Text>
        </View>

        <View style={styles.productCard}>
          <Image
            style={styles.imageproduct}
            source={require("@/assets/IMAGE FOOD MAR/3.png")}
          />

          <Text style={styles.productName}>Produit 3</Text>
        </View>

        <View style={styles.productCard}>
          <Image
            style={styles.imageproduct}
            source={require("@/assets/IMAGE FOOD MAR/4.png")}
          />

          <Text style={styles.productName}>Produit 4</Text>
        </View>

        <View style={styles.productCard}>
          <Image
            style={styles.imageproduct}
            source={require("@/assets/IMAGE FOOD MAR/5.png")}
          />

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
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#3B1A00",
    padding: 14,
  },
  imageproduct: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FB" },

  header: {
    backgroundColor: "#8B0000",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  map: {
    width: "100%",
    height: 180,
    marginTop: 20,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  infoText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

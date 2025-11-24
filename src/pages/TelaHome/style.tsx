import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    backgroundColor: "#8B0000",
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
  },

  welcome: { color: "#fff", fontSize: 18 },
  name: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  cpf: { color: "#ddd" },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },

  services: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    gap: 20,
  },

  serviceBox: {
    width: 130,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  feedbackCard: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    elevation: 3,
  },

  feedbackImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 15,
  },

  feedbackName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  feedbackText: {
    marginVertical: 5,
  },

  star: {
    color: "#f5a623",
    fontWeight: "bold",
  },
});

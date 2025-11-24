import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },

  header: {
    backgroundColor: "#8B0000",
    padding: 30,
    alignItems: "center",
  },

  name: { color: "#fff", fontSize: 22, fontWeight: "bold", marginTop: 10 },
  cpf: { color: "#ddd" },

  box: { padding: 20 },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    gap: 10,
  },

  text: { fontSize: 16 },

  button: {
    backgroundColor: "#8B0000",
    width: 160,
    alignSelf: "center",
    padding: 12,
    borderRadius: 20,
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

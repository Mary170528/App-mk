import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7a0000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 60,
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
  },

  forgot: {
    color: "#fff",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    marginBottom: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});


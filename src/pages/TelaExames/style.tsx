import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

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

  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  examTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  examDate: {
    color: "#666",
    marginBottom: 10,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDone: {
    color: "#3CB371",
    marginLeft: 5,
  },

  statusProgress: {
    color: "#FFA500",
    marginLeft: 5,
  },

  statusPending: {
    color: "#DC143C",
    marginLeft: 5,
  },

  pdfButton: {
    backgroundColor: "#EAEAEA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginLeft: "auto",
  },

  pdfButtonText: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});

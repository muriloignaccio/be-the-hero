import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    marginTop: 32
  },

  incidentHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },

  ongContainer: {
    marginRight: 36
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: "#737380"
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    alignItems: "center",
    backgroundColor: "#e02041",
    borderRadius: 8,
    justifyContent: "center",
    height: 50,
    width: "48%"
  },

  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
})
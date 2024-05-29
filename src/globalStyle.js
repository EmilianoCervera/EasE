import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  moldes: {
    backgroundColor: "grey",
    alignItems: "center",
    width: "100%",
    padding: 2,
    height: "100%",
  },
  //molde 1
  containerMolde1: {
    backgroundColor: "red",
    width: "95%",
    height: 320,
    borderRadius: 25,
    margin: 5,
  },
  containerMolde2: {
    backgroundColor: "#333",
    width: "95%",
    height: 200,
    borderRadius: 25,
  },
});

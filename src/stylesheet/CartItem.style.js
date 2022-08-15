import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#fff",
      marginHorizontal: 5
    },
    headerTitle: {
      borderWidth: 1,
      borderColor: "#00FF00",
      padding: 25,
      backgroundColor: "#9acd32",
      color: "#fff",
      fontWeight: "700"
    },
    cell: {
      flexDirection: "row",
      marginHorizontal: 5
    },
    cellTitle: {
      borderWidth: 1,
      borderColor: "#eee",
      width: 137,
      textAlign: "center",
      paddingVertical: 15,
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "300"
    },
    quantity: {
      borderWidth: 1,
      borderColor: "#eee",
      width: 104,
      textAlign: "center",
      paddingVertical: 15,
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "300"
    },
    price: {
      borderWidth: 1,
      borderColor: "#eee",
      width: 81,
      textAlign: "center",
      paddingVertical: 15,
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "300"
    },
    total: {
      borderWidth: 1,
      borderColor: "#eee",
      width: 82,
      textAlign: "center",
      paddingVertical: 15,
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "300"
    },
    overAllContainer: {
      alignItems: "flex-end"
    },
    overAll: {
      backgroundColor: "#fff",
      width: 120,
      paddingVertical: 20,
      margin: 5,
      borderWidth: 1,
      borderColor: "#9acd32"
    },
    overAllText: {
      textAlign: "center",
      fontWeight: "700"
    }
  })
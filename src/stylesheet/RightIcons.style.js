import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    counter: {
      backgroundColor: "rgba(238, 77, 45, 0.8)",
      borderRadius: 15,
      color: "#fff",
      fontWeight: "700",
      fontSize: 18,
      height: 30,
      width: 30,
      overflow: "hidden",
      position: "absolute",
      paddingTop: 6,
      right: 10,
      bottom: 10,
      textAlign: "center",
      zIndex: 999
    },
    cart: {
        marginRight: 8
    }
})
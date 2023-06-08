import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    backgroundColor: "#262626",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    marginBottom: 8,
    gap: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  check: {
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 999,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
  },
  text: {
    fontSize: 14,
    color: "#F2F2F2",
  },
  textCompleted: {
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
  },
});

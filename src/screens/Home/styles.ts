import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingTop: 72,
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 175,
    backgroundColor: "#0D0D0D",
    position: "absolute",
    top: 0,
  },
  content: {
    flex: 1,
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 32,
    gap: 4,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    color: "#808080",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  tab: {
    flexDirection: "row",
    gap: 8,
  },
  createdText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4EA8DE",
  },
  completedText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8284FA",
  },
  emptyContainer: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: "center",
  },
  emptyIcon: {
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: "#808080",
  },
  emptyText: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "700",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
  },
  verseContainer: {
    alignItems: "center",
    flexDirection: "column",
    borderBottomColor: "#000",
    justifyContent: "flex-end",
  },
  verseNumberContainer: {
    padding: 5,
    width: "100%",
    display: "flex",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  verseIconContainer: {
    width: "22.5%",
    display: "flex",
    flexDirection: "row",
  },
  verseNumber: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
  verse: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "right",
  },
  versesIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  versesPlay: {
    width: 35,
    height: 35,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  versesAyatContainer: {
    width: "100%",
    display: "flex",
    marginVertical: 15,
  },
  verseTranslate: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    marginVertical: 10,
  },
});

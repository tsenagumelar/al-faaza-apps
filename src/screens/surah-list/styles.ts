import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
  },
  item: {
    height: 80,
    width: "100%",
    display: "flex",
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
  },
  chapterIconContainer: {
    width: "20%",
  },
  chapterIcon: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  chapterNumber: {
    fontSize: 14,
    fontWeight: "bold",
  },
  chapterNameContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  chapterNameLatinContainer: {
    display: "flex",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  chapterNameLatin: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  chapterNameLatinId: {
    fontSize: 13,
    marginLeft: 5,
    fontStyle: "italic",
  },
  chapterTotalAyat: {
    fontSize: 14,
    color: "grey",
    fontStyle: "italic",
  },
  chapterNameArabContainer: {
    width: "30%",
  },
  chapterNameArab: {
    fontSize: 20,
    color: "#15803D",
    fontWeight: "bold",
  },
});

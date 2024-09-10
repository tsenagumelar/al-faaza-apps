import { ImageSourcePropType } from "react-native";

export interface ThemeIcons {
  chapters: ImageSourcePropType;
  verses: ImageSourcePropType;
  play: ImageSourcePropType;
  share: ImageSourcePropType;
  quran: ImageSourcePropType;
  home: ImageSourcePropType;
  book: ImageSourcePropType;
}

const Icons: ThemeIcons = {
  chapters: require("../assets/icons/chapter-number.png"),
  verses: require("../assets/icons/verse-number.png"),
  play: require("../assets/icons/play.png"),
  share: require("../assets/icons/share.png"),
  quran: require("../assets/icons/quran.png"),
  home: require("../assets/icons/home.png"),
  book: require("../assets/icons/book.png"),
};

export default Icons;

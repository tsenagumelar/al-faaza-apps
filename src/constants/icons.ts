import { ImageSourcePropType } from "react-native";

export interface ThemeIcons {
  chapters: ImageSourcePropType;
  verses: ImageSourcePropType;
  play: ImageSourcePropType;
  share: ImageSourcePropType;
  quran: ImageSourcePropType;
}

const Icons: ThemeIcons = {
  chapters: require("../assets/icons/chapter-number.png"),
  verses: require("../assets/icons/verse-number.png"),
  play: require("../assets/icons/play.png"),
  share: require("../assets/icons/share.png"),
  quran: require("../assets/icons/quran.png"),
};

export default Icons;

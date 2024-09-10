import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";

import { styles } from "./styles";
import icons from "@/src/constants/icons";
import useHooks from "./hooks";

const SurahList = () => {
  const { methods } = useHooks();

  return (
    <View style={styles.container}>
      <FlatList
        data={methods.getSurahList()}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item, index }) => (
          <Link key={index} href={`/detail?query=${item.number}`} asChild>
            <TouchableOpacity style={styles.item}>
              <View style={styles.chapterIconContainer}>
                <ImageBackground
                  source={icons.chapters}
                  resizeMode="cover"
                  style={styles.chapterIcon}
                >
                  <Text style={styles.chapterNumber}>{item.number}</Text>
                </ImageBackground>
              </View>
              <View style={styles.chapterNameContainer}>
                <View style={styles.chapterNameLatinContainer}>
                  <Text style={styles.chapterNameLatin}>
                    {item.name.transliteration.id}
                  </Text>
                  <Text style={styles.chapterNameLatinId}>
                    {`(${item.name.translation.id})`}
                  </Text>
                </View>
                <Text style={styles.chapterTotalAyat}>
                  {item.numberOfVerses} Ayat -{" "}
                  {item.revelation.id.replace(/^\w/, (c) => c.toUpperCase())}
                </Text>
              </View>
              <View style={styles.chapterNameArabContainer}>
                <Text style={styles.chapterNameArab}>{item.name.short}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

export default SurahList;

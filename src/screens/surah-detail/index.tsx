import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import useHooks from "./hooks";
import { styles } from "./styles";
import icons from "@/src/constants/icons";

const SurahDetail = () => {
  const { datas, methods } = useHooks();

  const surah = methods.getSurahDetail();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#33cc33", "#29a329", "#1f7a1f"]}
        style={styles.surahBox}
      >
        <ImageBackground
          source={icons.quran}
          resizeMode="contain"
          imageStyle={styles.surahImage}
          style={styles.surahImageBox}
        >
          <Text style={styles.surahTranslation}>
            {surah.name.transliteration.id}
          </Text>
          <Text style={styles.surahTranslationId}>
            {surah.name.translation.id}
          </Text>
        </ImageBackground>
        <Text style={styles.surahAyat}>
          {`${surah.numberOfVerses} Ayat - ${surah.revelation.id}`}
        </Text>
      </LinearGradient>
      <FlatList
        data={surah.verses}
        keyExtractor={(item) => item.number.inSurah.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              methods.setAyat(datas.ayat === index + 1 ? 0 : index + 1)
            }
            style={[
              styles.verseContainer,
              datas.ayat === index + 1 || datas.ayat === 0
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0.2,
                  },
            ]}
            key={index}
          >
            <View style={styles.verseNumberContainer}>
              <ImageBackground
                source={icons.verses}
                resizeMode="cover"
                style={styles.versesIcon}
              >
                <Text style={styles.verseNumber}>
                  {methods.toArabicNumber(index + 1)}
                </Text>
              </ImageBackground>
              <View style={styles.verseIconContainer}>
                <ImageBackground
                  source={icons.play}
                  resizeMode="cover"
                  style={styles.versesPlay}
                />
                <ImageBackground
                  source={icons.share}
                  resizeMode="cover"
                  style={styles.versesPlay}
                />
              </View>
            </View>
            <View style={styles.versesAyatContainer}>
              <Text style={styles.verse}>{item.text.arab}</Text>
              <Text style={styles.verseTranslate}>{item.translation.id}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SurahDetail;

import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { RouteProp } from "@react-navigation/native";

import surahHooks, { Daum } from "@/src/hooks/surahHooks";
import { RootStackParamList } from "@/src/constants/router";

export interface Verse {
  id: number;
  text_uthmani: string;
}

export type SurahDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "SurahDetail"
>;

export type SurahDetailProps = {
  route?: SurahDetailScreenRouteProp;
};
const useHooks = () => {
  const {
    methods: { getSurah },
  } = surahHooks();

  const params = useLocalSearchParams();
  const [ayat, setAyat] = useState(0);

  const toArabicNumber = (number: any) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .replace(/[0-9]/g, (digit: any) => arabicNumbers[digit]);
  };

  const getSurahDetail = () => {
    return getSurah(Number(params.query));
  };

  return {
    datas: {
      params,
      ayat,
    },
    methods: {
      setAyat,
      getSurahDetail,
      toArabicNumber,
    },
  };
};

export default useHooks;

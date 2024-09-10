import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "@/src/constants/router";
import surahHooks from "@/src/hooks/surahHooks";

export interface Surah {
  id: number;
  name_arabic: string;
  name_complex: string;
  verses_count: number;
  revelation_place: string;
}

export type SurahListScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "SurahList"
>;

export type SurahListProps = {
  navigation?: SurahListScreenRouteProp;
};

const useHooks = () => {
  const {
    methods: { getSurahList },
  } = surahHooks();

  return {
    datas: {},
    methods: {
      getSurahList,
    },
  };
};

export default useHooks;

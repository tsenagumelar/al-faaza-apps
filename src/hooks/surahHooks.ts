import surahJSON from "@/src/data/quran.json";

export interface Root {
  license?: string;
  source?: string;
  audioEdition?: string;
  data?: Daum[];
}

export interface Daum {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: Name;
  revelation: Revelation;
  tafsir: Tafsir;
  preBismillah?: PreBismillah;
  verses?: Verse[];
}

export interface Name {
  short: string;
  long: string;
  transliteration: Transliteration;
  translation: Translation;
}

export interface Transliteration {
  en: string;
  id: string;
}

export interface Translation {
  en: string;
  id: string;
}

export interface Revelation {
  arab: string;
  en: string;
  id: string;
}

export interface Tafsir {
  id: string;
}

export interface PreBismillah {
  text: Text;
  translation: Translation2;
  audio: Audio;
}

export interface Text {
  arab: string;
  transliteration: Transliteration2;
}

export interface Transliteration2 {
  en: string;
}

export interface Translation2 {
  en: string;
  id: string;
}

export interface Audio {
  primary: string;
  secondary: string[];
}

export interface Verse {
  number: Number;
  meta: Meta;
  text: Text2;
  translation: Translation3;
  audio: Audio2;
  tafsir: Tafsir2;
}

export interface Number {
  inQuran: number;
  inSurah: number;
}

export interface Meta {
  juz: number;
  page: number;
  manzil: number;
  ruku: number;
  hizbQuarter: number;
  sajda: Sajda;
}

export interface Sajda {
  recommended: boolean;
  obligatory: boolean;
}

export interface Text2 {
  arab: string;
  transliteration: Transliteration3;
}

export interface Transliteration3 {
  en: string;
}

export interface Translation3 {
  en: string;
  id: string;
}

export interface Audio2 {
  primary: string;
  secondary: string[];
}

export interface Tafsir2 {
  id: Id;
}

export interface Id {
  short: string;
  long: string;
}

const surahHooks = () => {
  const quran: Root = surahJSON;

  const getSurahList = () => {
    const surahList: Daum[] = [];
    quran &&
      quran.data &&
      quran.data.map((item) => {
        const surah = { ...item };
        delete surah.verses;
        delete surah.preBismillah;
        surahList.push(surah);
      });

    return surahList;
  };

  const getSurah = (surah: number) => {
    let data: any = {};
    if (quran && quran.data) {
      data = quran.data[surah - 1];
    }
    return data as Daum;
  };

  return {
    datas: {},
    methods: {
      getSurah,
      getSurahList,
    },
  };
};

export default surahHooks;

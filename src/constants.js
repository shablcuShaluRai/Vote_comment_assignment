export const VOTING_OPTIONS = [
  {
    name: "mbti",
    lists: [
      "INFP",
      "INFJ",
      "ENFP",
      "ENFJ",
      "INTP",
      "INTJ",
      "ENTP",
      "ENTJ",
      "ISTP",
      "ISFP",
      "ESTP",
      "ESFP",
      "ESTJ"
    ]
  },
  {
    name: "enneagram",
    lists: ["1w2", "3w4", "4w3", "4w5", "5w4", "5w6", "6w5", "6w7", "7w6"]
  },
  {
    name: "zodiac",
    lists: [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "VirgoL",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces"
    ]
  }
];

export const mapDropDownListToName = {
  mbti: VOTING_OPTIONS[0],
  enneagram: VOTING_OPTIONS[1],
  zodiac: VOTING_OPTIONS[2]
};

export const selectedDefaultValues = {
  mbti: "",
  enneagram: "",
  zodiac: ""
};

export const DEFAULT_COMMENTS = [
  {
    title: "He’s definitely an INTP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    mbti: "INFP",
    enneagram: "3w4",
    zodiac: "",
    like: 50,
    updated: false,
    timeStamp: 1662388629590
  },
  {
    title: "He’s definitely an INTP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    mbti: "",
    enneagram: "",
    zodiac: "Cancer",
    like: 40,
    updated: false,
    timeStamp: 1662388639340
  },
  {
    title: "He’s definitely an INTP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    mbti: "INFP",
    enneagram: "",
    zodiac: "",
    like: 20,
    updated: false,
    timeStamp: 1662388635940
  },
  {
    title: "He’s definitely an INTP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    mbti: "",
    enneagram: "3w4",
    zodiac: "",
    like: 30,
    updated: false,
    timeStamp: 1662388700257
  }
];
export const FILTER_ARR = ["All", "MBTI", "Enneagram", "Zodiac"];
export const SORTING_ARR = ["Best", "Recent"];

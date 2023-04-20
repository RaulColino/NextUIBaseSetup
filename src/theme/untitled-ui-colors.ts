// https://www.figma.com/file/V8nKLCJemHJyuAN39W6iok/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=1023-36350&t=5tAcAYI6DcGu8oCq-0
export const untitledUIColors = {
  // - Primary Colors
  //These are the main colors that make up the majority of the colors used in the design system.

  //Base: These are base black and white color styles to quickly swap out if you need to.
  white: "#FFFFFF",
  black: "#000000",

  //Gray: Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.

  //Primary: The primary color is your "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.

  //Error: Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.

  //Warning: Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users' attention.

  //Success: Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.

  // - Defaults
  //These are the default colors assigned to the primary colors. These can be swapped out with the secondary colors.
  defaultGray: {
    defaultGray25: "#FCFCFD",
    defaultGray50: "#F9FAFB",
    defaultGray100: "#F2F4F7",
    defaultGray200: "#EAECF0",
    defaultGray300: "#D0D5DD",
    defaultGray400: "#98A2B3",
    defaultGray500: "#667085",
    defaultGray600: "#475467",
    defaultGray700: "#344054",
    defaultGray800: "#1D2939",
    defaultGray900: "#101828",
  },

  defaultPrimary: {
    defaultPrimary25: "#FCFAFF",
    defaultPrimary50: "#F9F5FF",
    defaultPrimary100: "#F4EBFF",
    defaultPrimary200: "#E9D7FE",
    defaultPrimary300: "#D6BBFB",
    defaultPrimary400: "#B692F6",
    defaultPrimary500: "#9E77ED",
    defaultPrimary600: "#7F56D9",
    defaultPrimary700: "#6941C6",
    defaultPrimary800: "#53389E",
    defaultPrimary900: "#42307D",
  },

  defaultError: {
    defaultError25: "#FFFBFA",
    defaultError50: "#FEF3F2",
    defaultError100: "#FEE4E2",
    defaultError200: "#FECDCA",
    defaultError300: "#FDA29B",
    defaultError400: "#F97066",
    defaultError500: "#F04438",
    defaultError600: "#D92D20",
    defaultError700: "#B42318",
    defaultError800: "#912018",
    defaultError900: "#7A271A",
  },

  defaultWarning: {
    defaultWarning25: "#FFFCF5",
    defaultWarning50: "#FFFAEB",
    defaultWarning100: "#FEF0C7",
    defaultWarning200: "#FEDF89",
    defaultWarning300: "#FEC84B",
    defaultWarning400: "#FDB022",
    defaultWarning500: "#F79009",
    defaultWarning600: "#DC6803",
    defaultWarning700: "#B54708",
    defaultWarning800: "#93370D",
    defaultWarning900: "#7A2E0E",
  },

  defaultSuccess: {
    defaultSuccess25: "#F6FEF9",
    defaultSuccess50: "#ECFDF3",
    defaultSuccess100: "#D1FADF",
    defaultSuccess200: "#A6F4C5",
    defaultSuccess300: "#6CE9A6",
    defaultSuccess400: "#32D583",
    defaultSuccess500: "#12B76A",
    defaultSuccess600: "#039855",
    defaultSuccess700: "#027A48",
    defaultSuccess800: "#05603A",
    defaultSuccess900: "#054F31",
  },
  // - Secondary colors
  //Along with primary colors, it's helpful to have a selection of secondary colors to use in components such as pills, alerts and labels. These secondary colors should be used sparingly or as accents, while the primary color(s) should take precedence.

  //Gray blue: Can be swapped with the primary gray color.
  grayBlue: {
    grayBlue25: "#FCFCFD",
    grayBlue50: "#F8F9FC",
    grayBlue100: "#EAECF5",
    grayBlue200: "#D5D9EB",
    grayBlue300: "#B3B8DB",
    grayBlue400: "#717BBC",
    grayBlue500: "#4E5BA6",
    grayBlue600: "#3E4784",
    grayBlue700: "#363F72",
    grayBlue800: "#293056",
    grayBlue900: "#101323",
  },

  //Gray cool: Can be swapped with the primary gray color.
  grayCool: {
    grayCool25: "#FCFCFD",
    grayCool50: "#F9F9FB",
    grayCool100: "#EFF1F5",
    grayCool200: "#DCDFEA",
    grayCool300: "#B9C0D4",
    grayCool400: "#7D89B0",
    grayCool500: "#5D6B98",
    grayCool600: "#4A5578",
    grayCool700: "#404968",
    grayCool800: "#30374F",
    grayCool900: "#111322",
  },

  //Gray modern: Can be swapped with the primary gray color.
  grayModern: {
    grayModern25: "#FCFCFD",
    grayModern50: "#F8FAFC",
    grayModern100: "#EEF2F6",
    grayModern200: "#E3E8EF",
    grayModern300: "#CDD5DF",
    grayModern400: "#9AA4B2",
    grayModern500: "#697586",
    grayModern600: "#4B5565",
    grayModern700: "#364152",
    grayModern800: "#202939",
    grayModern900: "#121926",
  },

  //Gray neutral: Can be swapped with the primary gray color.
  grayNeutral: {
    grayNeutral25: "#FCFCFD",
    grayNeutral50: "#F9FAFB",
    grayNeutral100: "#F3F4F6",
    grayNeutral200: "#E5E7EB",
    grayNeutral300: "#D2D6DB",
    grayNeutral400: "#9DA4AE",
    grayNeutral500: "#6C737F",
    grayNeutral600: "#4D5761",
    grayNeutral700: "#384250",
    grayNeutral800: "#1F2A37",
    grayNeutral900: "#111927",
  },

  //Gray iron: Can be swapped with the primary gray color.
  grayIron: {
    grayIron25: "#FCFCFC",
    grayIron50: "#FAFAFA",
    grayIron100: "#F4F4F5",
    grayIron200: "#E4E4E7",
    grayIron300: "#D1D1D6",
    grayIron400: "#A0A0AB",
    grayIron500: "#70707B",
    grayIron600: "#51525C",
    grayIron700: "#3F3F46",
    grayIron800: "#26272B",
    grayIron900: "#26272B",
  },

  //Gray true: Can be swapped with the primary gray color.
  grayTrue: {
    grayTrue25: "#FCFCFC",
    grayTrue50: "#FAFAFA",
    grayTrue100: "#F5F5F5",
    grayTrue200: "#E5E5E5",
    grayTrue300: "#D6D6D6",
    grayTrue400: "#A3A3A3",
    grayTrue500: "#737373",
    grayTrue600: "#525252",
    grayTrue700: "#424242",
    grayTrue800: "#292929",
    grayTrue900: "#141414",
  },

  //Gray warm: Can be swapped with the primary gray color.
  grayWarm: {
    grayWarm25: "#FDFDFC",
    grayWarm50: "#FAFAF9",
    grayWarm100: "#F5F5F4",
    grayWarm200: "#E7E5E4",
    grayWarm300: "#D7D3D0",
    grayWarm400: "#A9A29D",
    grayWarm500: "#79716B",
    grayWarm600: "#57534E",
    grayWarm700: "#44403C",
    grayWarm800: "#292524",
    grayWarm900: "#1C1917",
  },

  //Moss: Can be swapped with the primary success color.
  moss: {
    moss25: "#FAFDF7",
    moss50: "#F5FBEE",
    moss100: "#E6F4D7",
    moss200: "#CEEAB0",
    moss300: "#ACDC79",
    moss400: "#86CB3C",
    moss500: "#669F2A",
    moss600: "#4F7A21",
    moss700: "#3F621A",
    moss800: "#335015",
    moss900: "#2B4212",
  },

  //Green Light: Can be swapped with the primary success color.
  greenLight: {
    greenLight25: "#FAFEF5",
    greenLight50: "#F3FEE7",
    greenLight100: "#E4FBCC",
    greenLight200: "#D0F8AB",
    greenLight300: "#A6EF67",
    greenLight400: "#85E13A",
    greenLight500: "#66C61C",
    greenLight600: "#4CA30D",
    greenLight700: "#3B7C0F",
    greenLight800: "#326212",
    greenLight900: "#2B5314",
  },

  //Green: Can be swapped with the primary success color.
  green: {
    green25: "#F6FEF9",
    green50: "#EDFCF2",
    green100: "#D3F8DF",
    green200: "#AAF0C4",
    green300: "#73E2A3",
    green400: "#3CCB7F",
    green500: "#16B364",
    green600: "#099250",
    green700: "#087443",
    green800: "#095C37",
    green900: "#084C2E",
  },

  //Teal: Can be swapped with the primary success color.
  teal: {
    teal25: "#F6FEFC",
    teal50: "#F0FDF9",
    teal100: "#CCFBEF",
    teal200: "#99F6E0",
    teal300: "#5FE9D0",
    teal400: "#2ED3B7",
    teal500: "#15B79E",
    teal600: "#0E9384",
    teal700: "#107569",
    teal800: "#125D56",
    teal900: "#134E48",
  },

  //Cyan
  cyan: {
    cyan25: "#F5FEFF",
    cyan50: "#ECFDFF",
    cyan100: "#CFF9FE",
    cyan200: "#A5F0FC",
    cyan300: "#67E3F9",
    cyan400: "#22CCEE",
    cyan500: "#06AED4",
    cyan600: "#088AB2",
    cyan700: "#0E7090",
    cyan800: "#155B75",
    cyan900: "#164C63",
  },

  //Blue light
  blueLight: {
    blueLight25: "#F5FBFF",
    blueLight50: "#F0F9FF",
    blueLight100: "#E0F2FE",
    blueLight200: "#B9E6FE",
    blueLight300: "#7CD4FD",
    blueLight400: "#36BFFA",
    blueLight500: "#0BA5EC",
    blueLight600: "#0086C9",
    blueLight700: "#026AA2",
    blueLight800: "#065986",
    blueLight900: "#0B4A6F",
  },

  //Blue
  blue: {
    blue25: "#F5FAFF",
    blue50: "#EFF8FF",
    blue100: "#D1E9FF",
    blue200: "#B2DDFF",
    blue300: "#84CAFF",
    blue400: "#53B1FD",
    blue500: "#2E90FA",
    blue600: "#1570EF",
    blue700: "#175CD3",
    blue800: "#1849A9",
    blue900: "#194185",
  },

  //Blue dark
  blueDark: {
    blueDark25: "#F5F8FF",
    blueDark50: "#EFF4FF",
    blueDark100: "#D1E0FF",
    blueDark200: "#B2CCFF",
    blueDark300: "#84ADFF",
    blueDark400: "#528BFF",
    blueDark500: "#2970FF",
    blueDark600: "#155EEF",
    blueDark700: "#004EEB",
    blueDark800: "#0040C1",
    blueDark900: "#00359E",
  },

  //Indigo
  indigo: {
    indigo25: "#F5F8FF",
    indigo50: "#EEF4FF",
    indigo100: "#E0EAFF",
    indigo200: "#C7D7FE",
    indigo300: "#A4BCFD",
    indigo400: "#8098F9",
    indigo500: "#6172F3",
    indigo600: "#444CE7",
    indigo700: "#3538CD",
    indigo800: "#2D31A6",
    indigo900: "#2D3282",
  },

  //Violet
  violet: {
    violet25: "#FBFAFF",
    violet50: "#F5F3FF",
    violet100: "#ECE9FE",
    violet200: "#DDD6FE",
    violet300: "#C3B5FD",
    violet400: "#A48AFB",
    violet500: "#875BF7",
    violet600: "#7839EE",
    violet700: "#6927DA",
    violet800: "#5720B7",
    violet900: "#491C96",
  },

  //Purple
  purple: {
    purple25: "#FAFAFF",
    purple50: "#F4F3FF",
    purple100: "#EBE9FE",
    purple200: "#D9D6FE",
    purple300: "#BDB4FE",
    purple400: "#9B8AFB",
    purple500: "#7A5AF8",
    purple600: "#6938EF",
    purple700: "#5925DC",
    purple800: "#4A1FB8",
    purple900: "#3E1C96",
  },

  //Fuchsia
  fuchsia: {
    fuchsia25: "#FEFAFF",
    fuchsia50: "#FDF4FF",
    fuchsia100: "#FBE8FF",
    fuchsia200: "#F6D0FE",
    fuchsia300: "#EEAAFD",
    fuchsia400: "#E478FA",
    fuchsia500: "#D444F1",
    fuchsia600: "#BA24D5",
    fuchsia700: "#9F1AB1",
    fuchsia800: "#821890",
    fuchsia900: "#6F1877",
  },

  //Pink
  pink: {
    pink25: "#FEF6FB",
    pink50: "#FDF2FA",
    pink100: "#FCE7F6",
    pink200: "#FCCEEE",
    pink300: "#FAA7E0",
    pink400: "#F670C7",
    pink500: "#EE46BC",
    pink600: "#DD2590",
    pink700: "#C11574",
    pink800: "#9E165F",
    pink900: "#851651",
  },

  //Rosé
  rose: {
    rose25: "#FFF5F6",
    rose50: "#FFF1F3",
    rose100: "#FFE4E8",
    rose200: "#FECDD6",
    rose300: "#FEA3B4",
    rose400: "#FD6F8E",
    rose500: "#F63D68",
    rose600: "#E31B54",
    rose700: "#C01048",
    rose800: "#A11043",
    rose900: "#89123E",
  },

  //Orange dark: Can be swapped with the primary warning color.
  orangeDark: {
    orangeDark25: "#FFF9F5",
    orangeDark50: "#FFF4ED",
    orangeDark100: "#FFE6D5",
    orangeDark200: "#FFD6AE",
    orangeDark300: "#FF9C66",
    orangeDark400: "#FF692E",
    orangeDark500: "#FF4405",
    orangeDark600: "#E62E05",
    orangeDark700: "#BC1B06",
    orangeDark800: "#97180C",
    orangeDark900: "#771A0D",
  },

  //Orange: Can be swapped with the primary warning color.
  orange: {
    orange25: "#FEFAF5",
    orange50: "#FEF6EE",
    orange100: "#FDEAD7",
    orange200: "#F9DBAF",
    orange300: "#F7B27A",
    orange400: "#F38744",
    orange500: "#EF6820",
    orange600: "#E04F16",
    orange700: "#B93815",
    orange800: "#932F19",
    orange900: "#772917",
  },

  //Yellow: Can be swapped with the primary warning color.
  yellow: {
    yellow25: "#FEFDF0",
    yellow50: "#FEFBE8",
    yellow100: "#FEF7C3",
    yellow200: "#FEEE95",
    yellow300: "#FDE272",
    yellow400: "#FAC515",
    yellow500: "#EAAA08",
    yellow600: "#CA8504",
    yellow700: "#A15C07",
    yellow800: "#854A0E",
    yellow900: "#713B12",
  },
};

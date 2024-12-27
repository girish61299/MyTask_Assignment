import { blue } from "react-native-reanimated/lib/typescript/Colors";

const colors = {
  themeColor: '#0092dc',
  appWhite: '#F9F9F9',
  bottomBarColor: '#16181B',
  white: '#FFFFFF',
  unSelectColor: '#606677',
  black: '#000000',
  rangoon: '#1E2022',
  green: '#38A700',
  greenOff: '#75A545',
  paleSky: '#6D7278',
  red: 'red',
  vistaWhite: '#F8F8F8',
  transparent: 'rgba(0,0,0,0)',
  blue: '#243C96',
  lightblue1:'#008FE1',
  blue2: '#070707',
  blue3: '#F1F5FE',
  darkblue:'#111B34',
  red1: '#D01212',
  redOff: '#FFF5ED',
  blackOpacity40: 'rgba(0,0,0,0.4)',
  blackOpacity60: 'rgba(0,0,0,0.6)',
  blackOpacity80: 'rgba(0,0,0,0.8)',
  blackOpacity90: 'rgba(0,0,0,0.9)',
  whiteOpacity80: 'rgba(255,255,255,0.8)',
  grey: '#C6C6C6',
  grey1: '#E8E8E8',
  grey2: '#00000066',
  grey3: '#F4F4F4',
  grey4: '#DDDDDD',
  grey6: '#E5E5E5',
  greenOff1: '#F6FFED',
  grey7: '#d3c2be',
  grey8: '#6E6E6E29',
  lightGrey: '#d2d5d7',
  tooLightGrey: '#E4E4E4',
  darkGrey: '#8a9397',
  orange: '#e69e67',
  darkSlateGrey: '#32383b',
  lightOrange: '#de7d38',
  skyblue: '#0092dc',
  grey9: '#F2F2F2',
  slateGray:"#7E868C",
  shadeGreen : "#008800",
  teaGreen : "#94CD94",
};
export type Colors = typeof colors;

export const updateColorsConfig = (
  colorCode: string,
  colorKey: keyof Colors,
) => {
  colors[colorKey] = colorCode;
};



export default colors;

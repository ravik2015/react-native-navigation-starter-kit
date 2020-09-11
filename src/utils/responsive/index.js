import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//=== Responsive Functions ===
export const getAdjustedFontSize = (size) => {
  return hp(size);
}

export const responsiveHeight = (size) => {
  return hp(size);
}

export const responsiveWidth = (size) => {
  return wp(size);
}
import {StyleSheet} from 'react-native';
import colors from '../../utils/color';
import { getAdjustedFontSize, responsiveHeight, responsiveWidth } from '../../utils/responsive';

//=== design ===
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center'
  },
  text:{
    alignSelf: 'center',
    marginBottom: responsiveHeight(2)
  }
});
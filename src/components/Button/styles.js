import colors from '../../utils/color';
import { getAdjustedFontSize, responsiveHeight, responsiveWidth } from '../../utils/responsive';

export default {
  buttonView: {
    borderRadius: 100,
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonLabel: {
    fontSize: getAdjustedFontSize(2),
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
};

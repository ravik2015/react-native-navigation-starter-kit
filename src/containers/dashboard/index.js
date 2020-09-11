import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import I18n from '../../utils/language/i18n';
import {navigatorPush} from '../../config/navigationOptions';
import Button from '../../components/Button';
import styles from './styles';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToFirstPage = () =>{
    navigatorPush({
     componentId: this.props.componentId,
     screenName: 'Login',
     passProps:{
     }
   })
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Dashboard container</Text>
        <Button
          label={I18n.t('firstPage')}
          onPress={() => this.goToFirstPage()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

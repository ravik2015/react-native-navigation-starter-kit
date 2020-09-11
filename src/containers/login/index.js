import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {navigatorPush} from '../../config/navigationOptions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '../../components/Button'
import I18n from '../../utils/language/i18n';
import styles from './styles'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToSecondPage = () =>{
     navigatorPush({
      componentId: this.props.componentId,
      screenName: 'DashboardContainer',
      passProps:{
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Helloooo</Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            label={I18n.t('secondPage')}
            onPress={() => this.goToSecondPage()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

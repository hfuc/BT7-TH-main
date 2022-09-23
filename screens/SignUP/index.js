import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import Btns from '../../compoment/btn';
import Ips from '../../compoment/input';
import Ipspass from '../../compoment/inputpass';
import Logos from '../../compoment/logo';
import Btnback from '../../compoment/btnback';
export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }}></Btnback></View> */}
      <View style={styles.btnback}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <Image source={require('../../img/BackMini.png')}></Image>
      </TouchableOpacity></View>
      <Text style={styles.titleText}>Create new account</Text>
      <View style={styles.viewtop1}>
        <Ips Text="Email" placeholder="Full Name" /></View>
      <View style={styles.viewtop1}>
        <Ips Text="Email" placeholder="Phone Number" /></View>
      <View style={styles.viewtop1}>
        <Ips Text="Email" placeholder="Email" /></View>
      <View style={styles.viewtop1}>
        <Ipspass Text="Password" placeholder="Pass" /></View>

      <Btns color='#81d3e3' Text='Sign Up'></Btns>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'blue',
    margin: 20

  },
  viewtop: {
    margin: 50

  },
  viewtop1: {
    margin: 10
  },
  btnback: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Sesiones from './screens/Sesiones';
import About from './screens/About';
import Login from './screens/Login'
import Observaciones from './screens/Observaciones';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/MyStack';
import { Global } from './styles/Global';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <View style = {Global.container}>
      </View>
    </NavigationContainer>
    
  );
}



/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

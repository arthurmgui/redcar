import { StatusBar, ScrollView, Text, View, SafeAreaView } from 'react-native';
import HomePage from './src/pages/homePage/homePage';
import LoginPage from './src/pages/loginPage/loginPage';

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <LoginPage/>
      </SafeAreaView>
  );
}



import { StatusBar, ScrollView, Text, View, SafeAreaView } from 'react-native';
import HomePage from './src/pages/homePage/homePage';

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <HomePage/>
      </SafeAreaView>
  );
}



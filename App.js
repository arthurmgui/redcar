import { StatusBar, ScrollView, Text, View, SafeAreaView } from 'react-native';
import HomePage from './src/pages/homePage';

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex:0}}>
        <StatusBar />
          <HomePage />
      </ScrollView>
      </SafeAreaView>
  );
}



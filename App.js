import { StatusBar, ScrollView, Text, View } from 'react-native';
import HomePage from './src/pages/homePage';

export default function App() {
  return (
      <ScrollView style={{flex: 1}}>
        <View>
          <StatusBar />
          <Text>Hello world!!!</Text>
          <HomePage />
        </View>
      </ScrollView>
  );
}



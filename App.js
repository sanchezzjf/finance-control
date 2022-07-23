import Home from './components/Home';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00F',
    alignItems: 'center',
  },
});

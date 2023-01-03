import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GAME REG</Text>
      <Text>Registre seus jogos facilmente</Text>
      <Text>Escolha seu console</Text>
      <Text>Sony</Text>
      <Text>Nintendo</Text>
      <Text>Microsoft</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 50,
  }

});

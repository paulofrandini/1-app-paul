import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, Alert, Separator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          source={require('./assets/game-controller-outline.png')}
          style={styles.logo}
          />
      <Text style={styles.title}>GAME REG</Text>
      <Text style={styles.texto}>Registre seus jogos facilmente</Text>  
        <Button
          style={styles.botao}
          title="Escolha seu console"
          onPress={()=>Alert.alert("Atenção","Escolha uma das opções")}
          color="black"
          />
      <Text style={styles.texto2}>Sony</Text>
      <Text style={styles.texto2}>Nintendo</Text>
      <Text style={styles.texto2}>Microsoft</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    color: '#C0C0C0',
    fontSize: 40,
    marginBottom: 20,
  },

  texto: {
    color: '#C0C0C0',
    marginBottom: 20,
  },

  texto2: {
    color: '#C0C0C0',
    marginTop: 20,
  },

});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function EjercicioDos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>♡ Mayra Belen Rodriguez ♡</Text>
      <Text style={styles.texto}>6to</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 26, 
    color: '#66fe76ff', 
    fontWeight: 'bold',
    marginTop: 5, 
  },
});

export default EjercicioDos;
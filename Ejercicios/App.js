import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EjercicioUno from './Componentes/EjercicioUno'
import EjercicioDos from './Componentes/EjercicioDos';

export default function App() {
  return (
    <View style={styles.container}>
      <EjercicioUno/>
      <EjercicioDos/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

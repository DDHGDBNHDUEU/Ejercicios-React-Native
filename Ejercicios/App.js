//INSTALAR npm install react-native-safe-area-context
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EjercicioUno from './Componentes/EjercicioUno';
import EjercicioDos from './Componentes/EjercicioDos';
import EjercicioTres from './Componentes/EjercicioTres';
import EjercicioCuatro from './Componentes/EjercicioCuatro';
import EjercicioCinco from './Componentes/EjercicioCinco';
import EjercicioSeis from './Componentes/EjercicioSeis';
import EjercicioSiete from './Componentes/EjercicioSiete';
import EjercicioNueve from './Componentes/EjercicioNueve';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <EjercicioUno />
        <EjercicioDos />
        <EjercicioTres />
        <EjercicioCuatro />
        <EjercicioCinco />
        <EjercicioSeis />
        <EjercicioSiete />
        <EjercicioNueve />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

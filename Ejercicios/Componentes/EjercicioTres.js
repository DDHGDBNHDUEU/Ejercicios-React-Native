import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function EjercicioTres() {
  return (
    <View style={styles.container}>
      {/* Imagen remota */}
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2F6vxuGClTmRrffg6av09w3Olf9Fuzw1DQ&s' }}
      style={styles.imagen}
    />

      <Text style={styles.nombre}>Duki</Text>
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
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 15,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff', 
  },
});

export default EjercicioTres;

import React from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Comida = [
  {
    title: 'Desayuno',
    data: ['Te', 'Cafe', 'Chocotorta'],   
  },
  {
    title: 'Almuerzo',
    data: ['Ravioles', 'Pastel de papa', 'Milanesas'],
  },
  {
    title: 'Cena',
    data: ['Arroz Amarillo', 'Ensalada', 'Hamburgesas'],
  },

];


export default function EjercicioEstrella(){
    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top']}>
          <SectionList
            sections={Comida}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
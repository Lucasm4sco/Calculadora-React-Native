import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '='];

  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight
    },
    result: {
      backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
      width: '100%',
      minHeight: 250,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10
    },
    resultText: {
      fontSize: 25,
      color: darkMode? 'white' : 'black'
    },
    themeButton: {
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 50,
      borderRadius: 25,
      alignSelf: 'flex-start',
      bottom: 120,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      backgroundColor: darkMode ? '#3f4d5b' : '#e5e5e5',
      width: '25%',
      minHeight: '15.7%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
      fontSize: 20
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <TouchableOpacity 
          style={styles.themeButton}
          onPress={() => setDarkMode(!darkMode)}>
          <Feather 
            name={ darkMode? 'sun' : 'moon' } 
            size={24} 
            color={darkMode?  'white' : 'black'} 
          />
        </TouchableOpacity>
        <Text style={styles.resultText}>3 + 2 = 5</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map(button =>
          button === '=' ?
          <TouchableOpacity key={button} style={styles.button}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity> :
          <TouchableOpacity key={button} style={styles.button}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default App;
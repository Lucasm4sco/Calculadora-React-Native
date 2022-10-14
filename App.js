import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      fontSize: 25
    },
    themeButton: {
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 50,
      borderRadius: 25,
      alignSelf: 'flex-start',
      bottom: 120
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

      </View>
    </View>
  );
}

export default App;
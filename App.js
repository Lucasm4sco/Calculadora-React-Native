import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Buttons from './src/components/Buttons';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [numberHostory, setNumberHistory] = useState('');
  const [resultText, setResultText] = useState('');

  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      flex: 1
    },
    result: {
      backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
      width: '100%',
      height: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10,
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
      height: '65%',
    },
    button: {
      width: '25%',
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: darkMode ? '#3f4d5b' : '#e5e5e5'
    },
    textButton: {
      fontSize: 22,
      color: darkMode? '#f5f5f5' : 'black'
    },
    numbers: {
      backgroundColor: darkMode? '#303946' : '#fff'
    },
    caracteres: { 
      backgroundColor: darkMode? '#414853' : '#ededed'
    },
    equalSign: {
      backgroundColor: '#9DBC7B',
      color: '#fff'
    }
  });

  const buttonEvent = useCallback((text) => {
    switch(text){
      case 'AC':
        setNumberHistory('');
        setResultText('');
        break;
      case 'DEL':
        setResultText(resultText.substring(0, resultText.length - 1));
        break;
      case '=':
        setNumberHistory(resultText + '=');
        const result = eval(resultText);
        result? setResultText(result) : setResultText('0');
        break;
      case '+/-': 
        //
      default:
        setResultText(resultText+text);
        break;
    }
  }, [resultText])

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
        <Text style={styles.numberHostory}>{numberHostory}</Text>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <Buttons styles={styles} buttonEvent={buttonEvent}/>
    </View>
  );
}

export default App;
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Buttons from './src/components/Buttons';

const addSignal = (text) => {
  const isFirstValue = !!Number(text);
  if(isFirstValue) return -Number(text) + '';

  const lastIndexOfPlus = text.lastIndexOf('+');
  const lastIndexOfTimes = text.lastIndexOf('*');
  const lastIndexOfMinus = text.lastIndexOf('-');
  const lastIndexOfMod = text.lastIndexOf('%');
  const lastIndexOfDivided = text.lastIndexOf('/');

  const lastOperator = Math.max(lastIndexOfPlus, lastIndexOfTimes, lastIndexOfMinus, lastIndexOfMod, lastIndexOfDivided);
  const existSignal = isNaN(Number(text[lastOperator-1]));
  
  if(existSignal) {
    text = text.substring(0, lastOperator) + -Number(text.substring(lastOperator, text.length));
  }
  if(!existSignal) {
    text = text.substring(0, lastOperator+1) + -Number(text.substring(lastOperator+1, text.length));
  }
  return text;
}

const displayCharacter = (text, textButton, typeButton) => {
  const isCharacter = typeButton === 'caracteres';
  const isNumber = typeButton === 'numbers';

  if(text === 'Infinity') return isCharacter ? '0' : textButton + '';
  if(isNumber && text === '0') return textButton.toString();
  if(isNumber) return text+textButton;
  if(isCharacter && text === '') return '0'+textButton;
  
  const lastIndex = Number(text[text.length-1]);
  return isCharacter && isNaN(lastIndex) ? text.substring(0, text.length-1)+textButton : text+textButton;
}

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [numberHostory, setNumberHistory] = useState('');
  const [resultText, setResultText] = useState('0');

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

  const buttonEvent = useCallback((textButton, typeButton) => {
    switch(textButton){
      case 'AC':
        setNumberHistory('');
        setResultText('0');
        break;
      case 'DEL':
        resultText === 'Infinity' ? 
          setResultText('0') : setResultText(resultText.substring(0, resultText.length - 1));
        break;
      case '=':
        setNumberHistory(resultText + '=');
        const avoidError = resultText.replace('\-{2}', '+');  // the eval method charges an error when operating with 2 minus signals
        const result =  eval(avoidError);
        result? setResultText(result.toString()) : setResultText('0');
        break;
      case '+/-': 
        setResultText(addSignal(resultText));
        break;
      default:
        setResultText(displayCharacter(resultText, textButton, typeButton))
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
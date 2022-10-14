import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

const App = () => {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <TouchableOpacity style={styles.themeButton}></TouchableOpacity>
      </View>
      <View style={styles.buttons}>

      </View>
    </View>
  );
}

export default App;
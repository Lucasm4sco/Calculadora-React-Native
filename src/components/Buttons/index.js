import React from "react";
import { buttons } from "../../caracteres";
import { View, TouchableOpacity, Text } from "react-native";

const Buttons = ({styles}) => (
    <View style={styles.buttons}>
        {buttons.map(button =>
          <TouchableOpacity 
            key={button.caractere} 
            style={
                {...styles.button,
                 ...styles[button.estilo]
                }}>
            <Text style={styles.textButton}>
              {button.caractere}
            </Text>
          </TouchableOpacity>
          )}
      </View>
);

export default Buttons;
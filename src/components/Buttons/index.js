import React from "react";
import { buttons } from "../../caracteres";
import { View, TouchableOpacity, Text } from "react-native";

const Buttons = ({styles, buttonEvent}) => (
    <View style={styles.buttons}>
        {buttons.map(button =>
          <TouchableOpacity 
            key={button.caractere} 
            style={{
                ...styles.button,
                ...styles[button.estilo]
                }}
            onPress={() => buttonEvent(button.caractere)}
                >
            <Text style={styles.textButton}>
              {button.caractere}
            </Text>
          </TouchableOpacity>
          )}
      </View>
);

export default Buttons;
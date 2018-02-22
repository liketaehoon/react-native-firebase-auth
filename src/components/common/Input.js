import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => {
  const { containerStyle, textStyle, textInputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry} // = secureTextEntry={true}
        placeholder={placeholder}
        autoCorrect={false}
        style={textInputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
};

export { Input };

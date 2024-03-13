import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  title: string;
  color?: string;
  onChange: (value: string) => void;
  value: string;
};
const Input: FC<Props> = ({title, color, onChange, value}) => {
  return (
    <View>
      <Text style={[styles.text, color ? {color: color} : undefined]}>
        {title}
      </Text>
      <TextInput style={styles.input} onChangeText={onChange} value={value} />
    </View>
  );
};

// optional

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 335,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    left: 12,
    color: 'black',
    fontSize: 14,
  },
});

export default Input;

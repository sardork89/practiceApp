import React, {FC, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../Input';

type Props = {
  title: string;
  color?: string;
};

const Button: FC<Props> = ({title, color}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[styles.text, color ? {color: color} : undefined]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Button;

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Assets from '../../assets.ts';
import Input from '../../components/Input';

const FirstScreen = () => {
  return (
    <View style={s.block}>
      <Image source={Assets.logo} style={s.image} />
      <Input title={'Логин'} />
      <Input title={'Пароль'} />
    </View>
  );
};

const s = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: 'black',
  },
  image: {
    width: 375,
    height: 261,
  },
});

export default FirstScreen;

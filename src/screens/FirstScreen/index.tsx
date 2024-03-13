import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Assets from '../../assets.ts';
import Input from '../../components/Input';
import Button from '../../components/Button';

const FirstScreen = () => {
  const [login, setLogin] = useState('');
  const [parol, setParol] = useState('');

  const hasButton = login.length > 0 && parol.length > 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={s.block}>
        <Image source={Assets.logo} style={s.image} />
        <Input title={'Логин'} value={login} onChange={setLogin} />
        <Input title={'Пароль'} value={parol} onChange={setParol} />
        {hasButton ? <Button title={'TIP'} /> : undefined}
      </View>
    </TouchableWithoutFeedback>
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

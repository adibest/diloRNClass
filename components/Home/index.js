/* @flow */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import InputComponent from '../Input';

const HomeComponent = () => {
  const [state, setState] = useState({
    owner: '',
    repository: ''
  });

  const handleChange = (newValue, name) => {
    setState(prevState => {
      return {
        ...prevState,
        [name]: newValue
      }
    })
  };

  return (
    <View>
      <InputComponent
        placeholder='Github Owner'
        value={state.owner}
        name='owner'
        handleChange={handleChange}
      />
      <InputComponent
      placeholder='Repository Name'
      value={state.repository}
      name='repository'
      handleChange={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeComponent

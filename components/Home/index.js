/* @flow */

import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import InputComponent from '../Input';
import fetchGithubAPI from '../../lib/apiClient';

const HomeComponent = () => {
  const [state, setState] = useState({
    owner: '',
    repository: ''
  });

  const handleChange = (newValue, name) => {
    setState(prevState => {
      console.log({prevState})
      return {
        ...prevState,
        [name]: newValue
      }
    })
  };

  const handleButtonPress = async () => {
    const data = await fetchGithubAPI(state.owner, state.repository)
    console.log({data})
  }

  return (
    <View>
      <InputComponent
        placeholder='Github Owner'
        value={state.owner}
        name='owner'
        handleChange={handleChange}
      />
      <View style={styles.repositoryInput}>
        <InputComponent
          placeholder='Repository Name'
          value={state.repository}
          name='repository'
          handleChange={handleChange}
        />
      </View>
      <Button
        title='Submit'
        disabled={!state.owner || !state.repository}
        onPress={handleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repositoryInput: {
    marginVertical: 12
  }
});

export default HomeComponent;

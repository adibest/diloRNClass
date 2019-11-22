/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Commits extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Commits component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Commits;

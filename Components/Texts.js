import React from 'react';
import { View, Picker } from 'react-native';
import { Container, Text, Header, Content } from 'native-base';
import { observer } from "mobx-react";
import {Router, Link, NativeRouter} from 'react-router-native';

export default observer(class Texts extends React.Component {
  render() {
    return (
            <Container>
                <Text>This Counts Fawaz</Text>
            </Container>
    );
  }
})

import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Spinner, Container, Content, Header } from 'native-base';
import {NativeRouter} from 'react-router-native';
import { observer } from "mobx-react";

import Images from './Components/Images';
import Texts from './Components/Texts';
import Forms from './Components/Forms';
import MyHeader from './Components/MyHeader';
import MyContent from './Components/MyContent';
import MyFooter from './Components/MyFooter';

import store from './Store';

const App = observer( class App extends React.Component {
  render() {
    return (
            <Container>
                <MyHeader store={store} />
                <MyContent store={store} />
            </Container>
    );
  }
})

export default App

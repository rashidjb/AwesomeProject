import React from 'react';
import { View, Picker } from 'react-native';
import {    Container, Header, Title, Content, Footer, FooterTab, Button, Left,
            Right, Body, Icon, Text} from 'native-base';
import { observer } from "mobx-react";
import {Router, Link, NativeRouter} from 'react-router-native';

export default observer(class MyHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                </Left>
                <Body>
                    <Title>{this.props.store.headerTitle}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
})

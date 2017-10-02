import React from 'react';
import { View, Picker } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text  } from 'native-base';
import { observer } from "mobx-react";
import {NativeRouter, Route, Link} from 'react-router-native';
import store from '../Store';

import Forms from './Forms';
import Images from './Images';
import Photos from './Photos';
import Texts from './Texts';
import Four from './Four';
import MyNewList from './MyNewList';
import LatLong from './LatLong';
import Login from './Login';
import Register from './Register';

export default observer(class MyContent extends React.Component {
  render() {
    return (
            <NativeRouter>
                <Container>
                    <Content>
                        <Route exact path="/" render={()=><Login store={this.props.store}/>} />
                        <Route exact path="/Register" render={()=><Register store={this.props.store}/>} />
                        <Route exact path="/Geo" render={()=><LatLong store={this.props.store}/>} />
                        <Route exact path="/NewList" render={()=><MyNewList store={this.props.store}/>} />
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button>
                                <Link exact to='/'>
                                    <View>
                                        <Icon name="apps" />
                                    </View>
                                </Link>
                            </Button>
                            <Button>
                                <Link exact to='/Register'>
                                    <View>
                                        <Icon name="camera" />
                                    </View>
                                </Link>
                            </Button>
                            <Button>
                                <Link exact to='/Geo'>
                                    <View>
                                        <Icon name="navigate" />
                                    </View>
                                </Link>
                            </Button>
                            <Button>
                                <Link exact to='/NewList'>
                                    <View>
                                        <Icon name="person" />
                                    </View>
                                </Link>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </NativeRouter>
    );
  }
})

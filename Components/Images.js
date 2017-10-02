import React from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Spinner } from 'native-base';
import {Router, Link, NativeRouter} from 'react-router-native';

export default class Images extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'yellow',
        };
    }
    handlePress( i){
        if(i === 1){
            this.setState({
                color: 'green',
            });
        } else if(i === 2){
            this.setState({
                color: 'blue',
            });
        } else if(i === 3){
            this.setState({
                color: 'red',
            });
        }
    }
    render() {
      let pic = {
          uri: 'https://i.imgur.com/gW3psad.jpg'
      }
    return (
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail><Spinner id='spinner' color={this.state.color}/></Thumbnail>
                <Body>
                  <Text><Text>Hello Code!</Text></Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={pic} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
        </Card>
        <Button success onPress={this.handlePress.bind(this, 1)}><Text>Turn Green</Text></Button>
        <Button primary onPress={this.handlePress.bind(this, 2)}><Text> Turn Blue </Text></Button>
        <Button danger onPress={this.handlePress.bind(this, 3)}><Text> Turn Red </Text></Button>
        </Content>
        </Container>
    );
  }
}

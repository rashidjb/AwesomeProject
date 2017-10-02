import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Thumbnail, Body } from 'native-base';
import { ListView} from 'react-native';
import { observer } from "mobx-react";

export default observer( class Photos extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "https://jsonplaceholder.typicode.com/photos",
            dataSource: new ListView.DataSource({
                rowHasChanged:(row1, row2) => row1 != row2,
            })
        }
    }
    componentWillMount(){
        if(!this.props.store.photos){
            this.fetchData();
        }else{
            this.setState({
                dataSource: this.props.store.photos,
            });
        }
    }
    fetchData(){
        fetch(this.state.url)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(response),
            });
            this.props.store.photos = response;
        })
        .catch((error) => console.log(error)).done();

    }
    renderItem(object){
        return(
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: object.url}} />
                </Left>
                <Body>
                    <Text>{object.title}</Text>
                </Body>
            </ListItem>
        )
    }

    render() {
        return (
            <Container>
                <List>
                    <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem} />
                </List>
          </Container>
        );
    }
})

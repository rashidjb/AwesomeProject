import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { ListView} from 'react-native';


export default class MyNewList extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "https://jsonplaceholder.typicode.com/todos",
            dataSource: new ListView.DataSource({
                rowHasChanged:(row1, row2) => row1 != row2,
            })
        }
    }
    componentWillMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(this.state.url)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(response)
            });
        }).catch((error) => console.log(error)).done();
    }
    renderItem(object){
        return(
            <ListItem>
                <Text>{object.id}. {object.title}</Text>
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
}

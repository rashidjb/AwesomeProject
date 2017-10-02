import React from 'react';
import { View, Picker } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Button, Label} from 'native-base';
import { observer } from "mobx-react";

export default observer(class Register extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        "username": '',
        "password": '',
    };
  }
    handleSubmit(e){
        console.log(this.state.username);
        console.log(this.state.password);

    }
    render() {
        return (
            <Container>
                <Text>Add a User:</Text>
                <Form>
                    <Item>
                        <Label>Username: </Label>
                        <Input
                            autoCapitalize = 'none'
                            onChangeText={(username) =>
                                    this.setState({"username": username},
                                )}
                        />
                    </Item>
                    <Item>
                        <Label>Password: </Label>
                        <Input  secureTextEntry={true}
                                onChangeText={(password) =>
                                    this.setState({"password": password},
                                )}
                        />
                    </Item>
                    <Button block primary onPress={this.handleSubmit.bind(this)}><Text>Submit</Text></Button>
                </Form>
            </Container>
        );
    }
})

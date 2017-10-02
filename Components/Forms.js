import React from 'react';
import { View, Picker } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Button} from 'native-base';
import { observer } from "mobx-react";

export default observer(class Forms extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        text: '',
        color: 'red',
        charCount: 0,
        letterCount: 0,
        numCount: 0,
    };
  }
    handleSubmit(e){
        console.log(this.state.text);
        this.props.store.says = this.state.text;

    }
    handlePassword(password){
        console.log('from pass', this.state.text);
        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
        var special = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "~", "-", "+", "=", "_", "(", ")", "<", ">", "[", "]", "{", "}"];
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        // var numCount = this.state.numCount;
        // var charCount = this.state.letterCount;
        // var letterCount = this.state.charCount;
        var numCount = 0;
        var charCount = 0;
        var letterCount = 0;
        for (var i = 0; i<password.length; i=i+1){
            var x = password[i];
            //console.log("inside for", x)
            if (numbers.includes(x)){
                numCount +=1;
            }
            //console.log('numCount', numCount);
            if (lower.includes(x) || upper.includes(x)){
                letterCount +=1;
            }
            //console.log('letterCount', letterCount);
            if (special.includes(x)){
                charCount +=1;
            }
            //console.log('charCount', charCount);
        }
        console.log('numCount', numCount);
        console.log('letterCount', letterCount);
        console.log('charCount', charCount);
        if (charCount >=3 && letterCount >= 3 && numCount >= 3){
            this.setState({
                color: 'green',
            });
        }else {
            this.setState({
                color: 'red',
            });
        }
        console.log('==================');
    }

    render() {
        return (
            <Container>
            <Text> Fawaz Says:</Text>
                <Text>You must have: </Text>
                <Text>3 special characters,</Text>
                <Text>3 numbers,</Text>
                <Text>3 Letters</Text>
                <Form>
                    <Item>
                      <Input    placeholder='what else does he say'
                                onChangeText={(text) =>
                                    this.setState({text},
                                    this.handlePassword(text)
                                )}
                                style={{
                                    color: this.state.color,
                                }}

                      />
                    </Item>
                    <Button block primary onPress={this.handleSubmit.bind(this)}><Text>Submit</Text></Button>
                </Form>
            </Container>
        );
    }
})

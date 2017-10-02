import {observer} from 'mobx-react';
import $ from 'jquery';
import store from '../Store';

const auth = observer(new class auth {
    login(username,password){
        this.getToken(username,password);
    }

    logout(){
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('username');
        store.authenticated = false;
        store.token = "";
        store.username = "";
    }
    firstLoad() {
        if (this.loggedIn()) {
            store.token = AsyncStorage.getItem('token');
            store.authenticated = true;
            store.username = AsyncStorage.getItem('username');
        }
    }
    loggedIn(){
        AsyncStorage.getItem('token',
            (err, result) => {
                if(!err && result != null){
                    return true;
                }else{
                    return false;
                }
            }
        )
    }




    signup(username,password){
        fetch('http://139.59.119.40/api/register/',
            {
                method: 'POST',
                headers:{
                    "Accept": 'application/json',
                    "Content-Type":"application/json",
                }
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            }
        )
        .then(
            (res) => {
                console.log(username, password)
                this.getToken(username,password)
            }
        ).bind(this).catch((error) => console.log(error)).done();
    }




    getToken(username,password){
        fetch('http://139.59.119.40/api/login/', {
            method: 'POST',
            headers:{
                "Accept": 'application/json',
                "Content-Type":"application/json",
            }
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then((res) => res.json())
        .then((res) => {
            store.authenticated = true;
            store.token = res.token;
            store.username = res.username;
            await AsyncStorage.setItem('token', res.token);
            await AsyncStorage.setItem('username', res.username);
            console.log(res.username);
        }).catch((error) => console.log(error)).done();
    }
}
export default auth;

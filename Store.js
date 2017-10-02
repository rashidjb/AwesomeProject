import { extendObservable } from "mobx";
import { ListView} from 'react-native';

class myStore {
    constructor() {
        extendObservable(this, {
            says: 'MOooOOooO',
            headerTitle: 'Header',
            photos: "",
            authenticated: false,
            username: '',
            token: '',
            })

    }
}

export default new myStore()

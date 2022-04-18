import mysql from "mysql2";
import * as SQLite from 'expo-sqlite';
import Constants from ' expo-constants';
import { StyleSheet, View, Text, Image,  Button, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const db= SQLite.openDatabase(' db.db');

class items extends React.Component{
    state = {
        items: null
    };
    componentDidMount(){
        this.Update();
    }
    render(){
        const { done: doneHeading } = this.props;
        const { items } = this.state;
        const heading = doneHeading ? "Concluido" : "Por hacer";

        if ( items === null || items.length === 0) {
            return null;
        }

        return (
            <View>
                <Text>
                    {heading}
                </Text>
                <TouchableOpacity
                    key={id}
                    onPress={ () => this.props.onPressItem && this.propsOnPressItem(id)}
                    style= {{backgroundColor: done ? '#'}}
                >
                
                </TouchableOpacity>
            </View>
                
        )
    }
}





    




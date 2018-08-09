import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TextInput, 
  Dimensions,
  Platform
} from 'react-native';
import ToDo from "./ToDo.js";
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: ""
  }
  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" />
        <Text style={styles.title}>Kawai To Do </Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder={"New To Do"} 
            onChangeText={this._controlNewToDo} 
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />

          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo />
          </ScrollView>

        </View>
      </View>
    );
    _controlNewToDo = test=>{
      this.setState({
        newToDo: text
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23655',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 13,
    marginTop: 50, 
    fontWeight: "600",
    marginBottom : 50,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width-25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor:"rgba(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          height:-1,
          width:0
        }
      },
      android:{
        elevation: 5
      }
    })
    
  },
  input:{
    padding:20,
    borderBottomColor: "#000",
    borderBottomWidth: 10,
    fontSize: 25,
  },
  toDos: {
    alignItems: "center"
  }
});

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

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" />
        <Text style={styles.title}>Kawai To Do </Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} />
        </View>
      </View>
    );
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
    
  }
});

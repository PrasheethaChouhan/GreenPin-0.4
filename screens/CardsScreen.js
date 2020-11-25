import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { 
    Card, 
    CardTitle, 
    CardContent, 
    CardAction, 
    CardButton, 
    CardImage, 
} from 'react-native-cards';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export default class CardsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    fetchMoreTransactions = async () => {
        var text = this.state.search.toUpperCase();
        var enteredText = text.split('');
    };

    searchTransactions = async (text) => {
        var enteredText = text.split('');
    };

  componentDidMount
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.bar}
            placeholder="Enter Page Name"
            onChangeText={(text) => {
              this.setState({ search: text });
            }}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.searchTransactions(this.state.search);
            }}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#021710",
  },
  searchBar: {
    flexDirection: 'row',
    height: 40,
    width: 'auto',
    borderWidth: 0.5,
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 30, 
  },
  bar: {
    borderWidth: 2,
    height: 30,
    width: 300,
    paddingLeft: 10,
  },
  searchButton: {
    borderWidth: 1,
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop: 0,
  },
});

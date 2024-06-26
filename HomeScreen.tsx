import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const transactions = [
  { id: '1', name: 'Apple Store', category: 'Entertainment', amount: '- $5.99', icon: 'apple', color: '#000' },
  { id: '2', name: 'Spotify', category: 'Music', amount: '- $12.99', icon: 'spotify', color: '#1DB954' },
  { id: '3', name: 'Money Transfer', category: 'Transaction', amount: '$300', icon: 'exchange', color: '#000' },
  { id: '4', name: 'Grocery', category: 'Shopping', amount: '- $88', icon: 'shopping-cart', color: '#FF5722' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profilePic} />
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Eric Atsu</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
          <Text style={styles.cardHolder}>AR Jonson</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardExpiry}>24/2000</Text>
            <Text style={styles.cardCvv}>CVV 6986</Text>
            <Icon name="cc-mastercard" size={24} color="#F79E1B" />
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        <Icon.Button name="arrow-up" backgroundColor="transparent"    color="#000" style={styles.actionButton}>
          Sent
        </Icon.Button>
        <Icon.Button name="arrow-down" backgroundColor="transparent" color="#000" style={styles.actionButton}>
          Receive
        </Icon.Button>
        <Icon.Button name="bank" backgroundColor="transparent" color="#000" style={styles.actionButton}>
          Loan
        </Icon.Button>
        <Icon.Button name="minus-circle" backgroundColor="transparent" color="#000" style={styles.actionButton}>
          Topup
        </Icon.Button>
      </View>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Transaction</Text>
        <Text style={styles.sellAll}>Sell All</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Icon name={item.icon} size={24} color={item.color} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionCategory}>{item.category}</Text>
            </View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeText: {
    marginLeft: 10,
    fontSize: 16,
  },
  userName: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    top:20,
    right:115,
    paddingBottom: 5
  },
  searchIcon: {
    marginLeft: 'auto',
  },
  cardContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardExpiry: {
    color: '#fff',
  },
  cardCvv: {
    color: '#fff',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    backgroundColor: 'white'
  },
  actionButton: {
    paddingHorizontal: 10,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: 'blue',
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionDetails: {
    marginLeft: 10,
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
  },
  transactionCategory: {
    color: '#777',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

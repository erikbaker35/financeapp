import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minimal Finance</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.label}>Current Balance</Text>
        <Text style={styles.balance}>$0.00</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const ACCENT = '#1B512D';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 40,
    color: '#000',
  },
  balanceCard: {
    backgroundColor: '#f2f2f2',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#777',
    marginBottom: 8,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: ACCENT,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

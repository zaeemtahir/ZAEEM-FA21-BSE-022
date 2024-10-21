import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
      <TextInput 
        style={styles.searchInput} 
        placeholder="Search for products"
      />
      <Pressable style={styles.filterButton}>
        <Ionicons name="filter" size={20} color="gray" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  filterButton: {
    padding: 5,
  },
});

export default SearchBar;
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CategoryList({ categories }) {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="white" />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      style={styles.categoriesList}
      contentContainerStyle={styles.categoriesContainer}
    />
  );
}

const styles = StyleSheet.create({
  categoriesList: {
    marginBottom: 15,
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default CategoryList;
import React from 'react';
import { View, StyleSheet } from 'react-native'
import SearchBar from '../SearchBar';
import CategoryList from '../CategoryList';
import ProductList from '../ProductList';
import useProducts from '../hooks/useProducts';
import { categories } from '../../data/categories';

function Home() {
  const { products, isLoading } = useProducts();

  return (
    <View style={styles.container}>
      <SearchBar />
      <CategoryList categories={categories} />
      <ProductList products={products} isLoading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
  },
});

export default Home;
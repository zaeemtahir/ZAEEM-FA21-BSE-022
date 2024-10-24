import React from 'react';
import { FlatList, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uri from '../utils/imageUri'

function ProductList({ products, isLoading }) {
  const renderProductItem = ({ item, index }) => (
    <View style={[
      styles.productItemWrapper,
      index % 2 === 1 && { marginTop: 20 }
    ]}>
      <Pressable style={styles.productItem}>
        <Image source={{ uri: uri }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productOrigin}>{item.category}</Text>
          <Text style={styles.productPrice}>
            ${'N/A'}
          </Text>
        </View>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </Pressable>
      </Pressable>
    </View>
  );

  if (isLoading) {
    return <Text style={styles.loadingText}>Loading products...</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.productList}
      columnWrapperStyle={styles.productRow}
      ListEmptyComponent={() => (
        <Text style={styles.emptyText}>No products available offline. Please connect to the internet and try again.</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  productList: {
    paddingHorizontal: 10,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productItemWrapper: {
    width: '48%',
    marginBottom: 15,
  },
  productItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 15,
  },
  productInfo: {
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productOrigin: {
    fontSize: 12,
    color: 'gray',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 5,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default ProductList;

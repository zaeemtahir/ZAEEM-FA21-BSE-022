import React from 'react';
import { FlatList, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ProductList({ products, isLoading }) {
    const uri = "https://www.allrecipes.com/thmb/aizVUz1JlBwSPI_hrH4Wu1XFXSE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg"
  const renderProductItem = ({ item, index }) => (
    <Pressable style={[
      styles.productItem,
      index % 2 === 1 && { marginTop: 20 }
    ]}>
      <Image source={{ uri: uri }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productOrigin}>{item.origin}</Text>
        <Text style={styles.productPrice}>
          ${item.price ? item.price.toFixed(2) : 'N/A'}
        </Text>
      </View>
      <Pressable style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
    </Pressable>
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
  productItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
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
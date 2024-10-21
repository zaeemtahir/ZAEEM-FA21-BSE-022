import { View, Text, FlatList, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import apiURL from '../apiUrl'
import useAPIGetURL from '../useAPIGetURL'

function Home() {
  const url = apiURL.baseURL + apiURL.productslist;
  const data = useAPIGetURL(url);

  const renderCategoryItem = ({ item }) => (
    <Pressable style={styles.categoryItem}>
      <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="white" />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </Pressable>
  );

  const renderProductItem = ({ item, index }) => (
    <Pressable style={[
      styles.productItem,
      index % 2 === 1 && { marginTop: 20 } // Add top margin to right column items
    ]}>
      <Image source={{ uri: "https://www.allrecipes.com/thmb/aizVUz1JlBwSPI_hrH4Wu1XFXSE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg" }} style={styles.productImage} />
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

  return (
    <View style={styles.container}>
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

      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        style={styles.categoriesList}
      />

      <FlatList
        data={data}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    marginBottom: 15,
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
  categoriesList: {
    marginBottom: 15,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
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
  productList: {
    gap: 10,
  },
  productItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    margin: 5,
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
});

const categories = [
  { id: '1', name: 'Fruits', icon: 'nutrition', color: '#4CAF50' },
  { id: '2', name: 'Vegetables', icon: 'leaf', color: '#FF9800' },
  { id: '3', name: 'Bakery', icon: 'pizza', color: '#795548' },
  { id: '4', name: 'Milk', icon: 'water', color: '#2196F3' },
];

export default Home

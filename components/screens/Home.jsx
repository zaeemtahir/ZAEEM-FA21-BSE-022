import { useState, useEffect } from 'react'
import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import apiURL from '../apiUrl'
import useAPIGetURL from '../useAPIGetURL'

function Home() {
  
  const url = apiURL.baseURL + apiURL.productslist;
  const data = useAPIGetURL(url);

  console.log("data from the Home page: ", data)
  

  
  
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          console.log('Rendering item:', item); // Log each item
          return (
            <Pressable style={styles.renderitem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>Title: {item.title}</Text>
              <Text style={styles.title}>Price: ${item.price}</Text>
              <Text style={styles.title}>Description: {item.description}</Text>
              <Text style={styles.title}>Available: {item.available ? 'Yes' : 'No'}</Text>
            </Pressable>
          );
        }}
        keyExtractor={item => item._id}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  renderitem: {
    flex: 1,
    backgroundColor: 'lightgrey',
    maxWidth: '50%',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    marginVertical: 2,
  },
  renderitem:{
    flex:1,
    backgroundColor:'lightgrey',
    maxWidth:'50%',
    // marginRight:10
  }
});

export default Home

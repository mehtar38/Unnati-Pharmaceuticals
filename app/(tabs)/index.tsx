import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../constants/firebaseConfig';
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { SearchIcon } from "@/components/ui/icon"

export default function HomeScreen(){
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const productsCol = collection(db, 'products'); // 'products' is the collection name
      const snapshot = await getDocs(productsCol);
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(list);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }


    return (
      <>
      <Input>
        <InputSlot className="pl-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." />
      </Input>
      
      <FlatList
          data={products}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: '#eaffea', // Light parrot green
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3, // for Android shadow
            }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>
                {item.product_name ?? "Unnamed Product"}
              </Text>
              {/* {item.manufacturers?.map((m: string, index: number) => (
                  <Text key={index} style={{ color: '#388e3c', marginTop: 4 }}>
                    • {m}
                  </Text>
                ))} */}
            </View>
          )} /></>
    );
}

// const styles = StyleSheet.create({
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   listContainer: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//     color: '#222',
//   },
//   manufacturer: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

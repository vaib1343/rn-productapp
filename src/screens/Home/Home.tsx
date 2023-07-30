import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {PRODUCTS_LIST} from '../../data/constant';
import ProductItem from '../../components/ProductItem/ProductItem';
import {RootParamsList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeProps = NativeStackScreenProps<RootParamsList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#b1bbc7'} />
      <View style={styles.productContainer}>
        <FlatList
          scrollEnabled
          data={PRODUCTS_LIST}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.push('Details', {
                  product: item,
                })
              }>
              <ProductItem {...item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#eaeaea',
  },
  productContainer: {
    display: 'flex',
    flex: 1,
    rowGap: 10,
  },
});

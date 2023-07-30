import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamsList} from '../../App';

type DetailsProps = NativeStackScreenProps<RootParamsList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {product} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.nameText}>{product.name}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{product.rating} ★</Text>
          </View>
          <View>
            <Text>({product.ratingCount})</Text>
          </View>
        </View>
        <View>
          <Text style={styles.deliveryText}>🛒 Free delivery</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
          <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
          <Text style={styles.offPercent}>{product.offerPercentage}% off</Text>
        </View>
        <View style={styles.tagsContainer}>
          {product.tags.map(ele => (
            <View key={ele}>
              <Text style={styles.tag}>{ele}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 15,
  },
  image: {
    height: 300,
    resizeMode: 'contain',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
    paddingVertical: 17,
    paddingHorizontal: 15,
    backgroundColor: '#d2faeb',
    borderRadius: 10,
  },
  originalPrice: {
    color: '#7d7d7d',
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  discountPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2f2f2f',
  },
  offPercent: {
    color: '#1f7c00',
    fontWeight: '500',
  },
  nameText: {
    fontWeight: '500',
    fontSize: 20,
    color: '#5e5e5e',
  },
  deliveryText: {
    marginTop: 8,
    color: '#777777',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rating: {
    marginTop: 8,
    backgroundColor: '#1f7c00',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  detailContainer: {
    marginTop: 20,
  },
  tagsContainer: {
    marginTop: 10,
    display: 'flex',
    gap: 10,
  },
  tag: {
    color: '#3b3b3b',
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    padding: 8,
  },
});

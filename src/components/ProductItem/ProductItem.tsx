import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductItem = (props: Product) => {
  const {
    discountPrice,
    offerPercentage,
    imageUrl,
    name,
    ratingCount,
    rating,
    originalPrice,
  } = props;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: imageUrl}}
          style={styles.productImage}
          alt="product image"
        />
      </View>
      <View>
        <View>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{rating} ★</Text>
          </View>
          <View>
            <Text>({ratingCount})</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          <Text style={styles.discountPrice}>₹{discountPrice}</Text>
          <Text style={styles.offPercent}>{offerPercentage}% off</Text>
        </View>
        <View>
          <Text style={styles.deliveryText}>🛒 Free delivery</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
  },
  productImage: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
    marginRight: 16,
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
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
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
    fontSize: 14,
    color: '#5e5e5e',
  },
  deliveryText: {
    marginTop: 8,
    color: '#777777',
  },
});

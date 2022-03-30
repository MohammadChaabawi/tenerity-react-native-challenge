import Colors from '@/constants/Colors';
import * as React from 'react';
import { Button } from 'react-native-paper';

import { Animated, Dimensions, View, StyleSheet } from 'react-native';
import Tags from '@/components/Tags';
import PriceAndOfferType from '@/components/PriceAndOfferType';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.84;
const imageH = imageW * 0.65;

/**
 * @description The offer item for rendering the offer records.
 * @returns The JSX element that showcases the offer items.
 */
export const OfferItem = ({
  image,
  title,
  description,
  scrollXP,
  index,
  tagIds,
  allTags,
  price,
  offerType,
  handleAddOrRemoveOfferPress,
  offerRecord,
  doesOfferExistInMyOffers,
}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const opacityInputRange = [
    (index - 0.4) * width,
    index * width,
    (index + 0.4) * width,
  ];

  const translateXDescription = scrollXP.interpolate({
    inputRange,
    outputRange: [width, 0, -width],
  });
  const opacity = scrollXP.interpolate({
    inputRange: opacityInputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={[styles.itemStyle, styles.offerImageShadow]}>
      <Animated.Image source={{ uri: image }} style={styles.offerImage} />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity,
            },
          ]}
        >
          {title}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
              transform: [{ translateX: translateXDescription }],
            },
          ]}
        >
          {description}
        </Animated.Text>
        <View style={styles.buyNowRow}>
          <Button
            icon={'basket'}
            style={styles.buyNowButton}
            mode="contained"
            onPress={() => handleAddOrRemoveOfferPress(offerRecord)}
          >
            {doesOfferExistInMyOffers ? 'Remove ' : 'Add Offer'}
          </Button>
          <PriceAndOfferType
            price={price}
            offerType={offerType}
            opacity={opacity}
          />
        </View>
        <Tags tagIds={tagIds} allTags={allTags} opacity={opacity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buyNowButton: {
    marginLeft: 10,
    marginVertical: 10,
    marginTop: 5,
    backgroundColor: Colors.tomato,
    borderRadius: 15,
  },
  buyNowRow: {
    flexDirection: 'row',
  },
  itemStyle: {
    width,
    height,
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: 'contain',
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  heading: {
    marginTop: 20,
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
    paddingHorizontal: 14,
  },
  description: {
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'justify',
    textShadowColor: Colors.textShadow,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    width: width * 0.87,
    marginRight: 10,
    fontSize: 15.5,
    lineHeight: 16 * 1.33,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 4,
  },
  offerImage: {
    width: imageW,
    height: imageH,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  offerImageShadow: {
    shadowColor: Colors.black,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
});

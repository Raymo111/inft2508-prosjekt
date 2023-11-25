import { Image, ImageProps, Pressable, Text } from 'react-native';
import React from 'react';
import { Styles } from './Styles';

const ItemCard = (props: {
  img: ImageProps;
  title: string | null;
  showItem: (
    img: ImageProps,
    title: string | null,
  ) => void;
}) => {
  const handlePress = () => {
    props.showItem(
      props.img,
      props.title,
    );
  };
  return (
    <Pressable style={Styles.card.container} onPress={handlePress}>
      <Image source={props.img} style={Styles.card.image} />
      <Text style={Styles.card.title}>{props.title}</Text>
    </Pressable>
  );
};

export default ItemCard;

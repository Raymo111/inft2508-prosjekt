import { Image, Pressable, Text } from 'react-native';
import { Styles } from './Styles';

const ItemCard = (props: {
  imgURL: string;
  title: string | null;
  width: number;
  height: number;
  showItem: (
    img: string,
    title: string | null,
    width: number,
    height: number,
  ) => void;
}) => {
  const handlePress = () => {
    props.showItem(
      props.imgURL,
      props.title,
      props.width,
      props.height,
    );
  };
  return (
      <Pressable style={Styles.card.container} onPress={handlePress}>
        <Image source={{uri: props.imgURL}} style={Styles.card.image} height={200} width={props.height / props.width * 200} />
        <Text style={Styles.card.title}>{props.title}</Text>
      </Pressable>
  );
};

export default ItemCard;

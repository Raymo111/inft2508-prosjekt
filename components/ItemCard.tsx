import {Image, Pressable, Text} from 'react-native';
import {Styles} from './Styles';
import {Item} from "./Components";
import {endpoint} from "../screens/Home";

const ItemCard = (props: {
  item: Item;
  showItem: (id: number) => void;
}) => {
  const handlePress = () => {
    props.showItem(props.item.id);
  };
  const width = props.item.images ? props.item.images[0].width : 200
  const height = props.item.images ? props.item.images[0].height : 200// Add image to items
  if (props.item.images && props.item.images.length > 0) {
    props.item.images[0].url = endpoint + 'img/' + props.item.id + '/1.jpg';
  }

  return (
    <Pressable style={Styles.card.card} onPress={handlePress}>
      <Image source={{uri: props.item.images ? props.item.images[0].url : endpoint + 'item-placeholder.png'}}
             style={Styles.card.image} height={200}
             width={width / height * 200}/>
      <Text style={Styles.card.title}>{props.item.title}</Text>
    </Pressable>
  );
};

export default ItemCard;

import { Image, Text, View } from "react-native";
import catListStyle from "../Styles/catListStyle.style";

function CatList({ name, photo }) {
  return (
    <View>
      <Text>{name}</Text>
      <Image source={{ uri: photo }} style={catListStyle.image} />
    </View>
  );
}
export default CatList;

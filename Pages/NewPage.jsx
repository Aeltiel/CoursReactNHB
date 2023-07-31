import { Image, Text } from "react-native";
import { Screen } from "react-native-screens";
import { useRoute } from "@react-navigation/native";
import newPageStyles from "../Styles/newPageStyle.style";

function NewPage() {
  const route = useRoute();
  const { name } = route.params;
  return (
    <Screen style={newPageStyles.container}>
      <Text style={newPageStyles.txt}>Bienvenue {name} sur New Page</Text>
      <Image
        source={require("../assets/Ochin_Pik4.webp")}
        style={newPageStyles.image}
      />
    </Screen>
  );
}
export default NewPage;

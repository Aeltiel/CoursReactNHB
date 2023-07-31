import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Screen } from "react-native-screens";
import inputStyles from "../Styles/inputStyle.style";
import homeStyle from "../Styles/homeStyle.style";
import data from "../data";
import CatList from "../components/CatList";

function Home({ navigation }) {
  //const [name, setName] = useState();

  return (
    <Screen style={homeStyle.container}>
      <Text>Bienvenue sur la page Home</Text>

      {/*<View>
        <Text>Veuillez entrer votre nom : </Text>
        <TextInput
          style={inputStyles.input}
          value={name}
          onChangeText={setName}
        ></TextInput>
        <TouchableOpacity
          style={inputStyles.button}
          onPress={() => navigation.navigate("NewPage", { name })}
        >
          <Text style={inputStyles.btnTxt}>Submit</Text>
        </TouchableOpacity>
  </View>*/}

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CatList name={item.name} photo={item.photo} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}
export default Home;

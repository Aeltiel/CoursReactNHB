import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import inputStyles from "../Styles/inputStyle.style";

function Input() {
  const [txt, setTxt] = useState("");
  function saveLog() {
    console.log(txt);
  }
  return (
    <View>
      <TextInput style={inputStyles.input} value={txt} onChangeText={setTxt} />
      <TouchableOpacity style={inputStyles.button} onPress={saveLog}>
        <Text style={inputStyles.btnTxt}>Ecrit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Input;

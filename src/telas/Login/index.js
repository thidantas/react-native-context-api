import { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { GlobalContext } from "../../contexts/GlobalContext";
import { estilo } from "./estilos";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { valor, nome, setNome } = useContext(GlobalContext);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login = {valor}</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate("Principal")}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

import { useContext } from "react";
import {
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "react-native-vector-icons";
import { ProdutosContext } from "../../contexts/ProdutosContext";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from "./estilos";
import { Produto } from "../../componentes/Produto";

export default function Resumo({ navigation }) {
  const { quantidade, carrinho } = useContext(ProdutosContext);

  const { temaEscolhido } = useContext(TemaContext);

  const { usuario } = useContext(AutenticacaoContext);

  const estilo = estilos(temaEscolhido);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario?.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <Feather
            name="shopping-cart"
            size={30}
            color="#fff"
            style={estilo.carrinhoIcon}
          />
          <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={carrinho}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Produto item={item} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate("Finalizar")}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

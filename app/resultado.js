import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Resultado() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* TODO (Júlia): mostrar aqui o elevador gerado dinamicamente (A, B, C...) */}
      <Text style={styles.texto}>Elevador: -</Text>

      {/* TODO (Júlia): implementar status dinâmico (chegando, lotado, disponível) */}
      <Text style={styles.texto}>Status: -</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          // TODO (Júlia): talvez passar informações da fila para a próxima tela
          router.push('/fila');
        }}
      >
        <Text style={styles.botaoTexto}>Ver Fila</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 18,
    marginBottom: 10
  },
  botao: {
    backgroundColor: 'red',
    padding: 12,
    marginTop: 20
  },
  botaoTexto: {
    color: 'white'
  }
});
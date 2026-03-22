import { StyleSheet, Text, View } from 'react-native';

export default function Fila() {
  return (
    <View style={styles.container}>
      {/* TODO (Júlia): mostrar posição real/simulada do usuário na fila */}
      <Text style={styles.texto}>Posição na fila: -</Text>

      {/* TODO (Júlia): atualizar mensagem conforme status do elevador */}
      <Text style={styles.texto}>Aguardando elevador...</Text>
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
  }
});
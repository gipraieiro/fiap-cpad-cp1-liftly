import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  // Estado para armazenar o andar digitado pelo usuário
  const [andar, setAndar] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Liftly</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o andar"
        value={andar}
        onChangeText={setAndar}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          // TODO (Júlia): passar o valor do "andar" para a próxima tela
          // Exemplo: usar router.push com params
          router.push('/resultado');
        }}
      >
        <Text style={styles.botaoTexto}>Chamar Elevador</Text>
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
  titulo: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginBottom: 20
  },
  botao: {
    backgroundColor: 'red',
    padding: 12
  },
  botaoTexto: {
    color: 'white'
  }
});
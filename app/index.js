import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  // Estado para armazenar o andar digitado pelo usuário
  const [andar, setAndar] = useState('');
  // Novo estado para armazenar o andar atual do usuário
  const [andarAtual, setAndarAtual] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Liftly</Text>

      {/* Novo campo: andar atual */}
      <TextInput
        style={styles.input}
        placeholder="Em qual andar você está?"
        value={andarAtual}
        onChangeText={setAndarAtual}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          // Após clicar em enviar, leva para a tela já existente
          router.push({
            pathname: '/resultado',
            params: { andarAtual: andarAtual },
          });
        }}
      >
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

      {/* Campo já existente: andar desejado */}
      <TextInput
        style={styles.input}
        placeholder="Digite o andar"
        value={andar}
        onChangeText={setAndar}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          router.push({
            pathname: '/resultado',
            params: { andar: andar },
          });
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
    padding: 12,
    marginBottom: 20 // para dar espaço entre os botões
  },
  botaoTexto: {
    color: 'white'
  }
});

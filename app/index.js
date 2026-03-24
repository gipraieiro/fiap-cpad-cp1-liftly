import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const [andarDestino, setAndarDestino] = useState('');
  const [andarAtual, setAndarAtual] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Liftly 🚀</Text>
      <Text style={styles.subtitulo}>Chame seu elevador</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o andar de destino"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={andarDestino}
        onChangeText={setAndarDestino}
      />

      <TextInput
        style={styles.input}
        placeholder="Em qual andar você está"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={andarAtual}
        onChangeText={setAndarAtual}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          router.push(`/resultado?andarDestino=${andarDestino}&andarAtual=${andarAtual}`)
        }
      >
        <Text style={styles.botaoTexto}>Chamar Elevador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
  subtitulo: { color: '#aaa', marginBottom: 30 },
  input: { width: 200, borderWidth: 1, borderColor: '#ff0055', borderRadius: 10, padding: 10, color: '#fff', marginBottom: 20, textAlign: 'center' },
  botao: { backgroundColor: '#ff0055', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10 },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
});

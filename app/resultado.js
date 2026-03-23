import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function Resultado() {
  const { andar } = useLocalSearchParams();
  const router = useRouter();

  const [elevador, setElevador] = useState('');

  useEffect(() => {
    const elevadores = ['A', 'B', 'C', 'D', 'E', 'F'];
    const escolhido = elevadores[Math.floor(Math.random() * elevadores.length)];
    setElevador(escolhido);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🚀 Elevador Chamado</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Elevador</Text>
        <Text style={styles.valor}>{elevador}</Text>

        <Text style={styles.label}>Andar solicitado</Text>
        <Text style={styles.valor}>{andar}º</Text>

        <Text style={styles.mensagem}>
          Elevador {elevador} a caminho 🚀
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          router.push(`/fila?andar=${andar}&elevador=${elevador}`)
        }
      >
        <Text style={styles.botaoTexto}>Ver Fila</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    color: '#ff0055',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#111',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: 260,
    borderWidth: 1,
    borderColor: '#ff0055',
    marginBottom: 30,
  },
  label: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 10,
  },
  valor: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 10,
    fontSize: 16,
    color: '#ff0055',
  },
  botao: {
    backgroundColor: '#ff0055',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  botaoSecundario: {
    borderWidth: 1,
    borderColor: '#ff0055',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
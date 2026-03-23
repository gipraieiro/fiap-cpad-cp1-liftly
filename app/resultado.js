import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Resultado() {
  const router = useRouter();

  const { andar } = useLocalSearchParams();

  const [elevador, setElevador] = useState('');
  const [status, setStatus] = useState('');
  const [fila, setFila] = useState(0);

  const elevadores = ['A', 'B', 'C', 'D', 'E', 'F'];
  const statusList = ['Chegando', 'Cheio', 'Disponível'];

  useEffect(() => {
    const e =
      elevadores[Math.floor(Math.random() * elevadores.length)];

    const s =
      statusList[Math.floor(Math.random() * statusList.length)];

    const pos = Math.floor(Math.random() * 10) + 1;

    setElevador(e);
    setStatus(s);
    setFila(pos);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Andar: {andar}</Text>

      <Text style={styles.texto}>Elevador: {elevador}</Text>

      <Text style={styles.texto}>Status: {status}</Text>

      <Text style={styles.texto}>Fila: {fila}º</Text>

      <Text style={styles.texto}>
        {fila > 5
          ? 'Fila grande, aguarde'
          : 'Elevador chegando rápido'}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
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
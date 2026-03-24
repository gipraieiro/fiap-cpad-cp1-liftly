import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Fila() {
  const { andarDestino, andarAtual, elevador } = useLocalSearchParams();
  const router = useRouter();

  const destino = Number(andarDestino) || 0;
  const inicio = Number(andarAtual) || 0;

  const [posicao, setPosicao] = useState(inicio);
  const [mensagem, setMensagem] = useState('');
  const [cor, setCor] = useState('#ff0055');

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPosicao((prev) => {
        if (prev === destino) {
          setMensagem(`Você chegou no andar ${destino} 🎉`);
          setCor('#00ff88');
          clearInterval(intervalo);
          return destino;
        }

        if (Math.abs(destino - prev) <= 2) {
          setMensagem(`Elevador ${elevador} chegando...`);
          setCor('#ffaa00');
        } else {
          setMensagem(`Elevador ${elevador} em movimento...`);
          setCor('#ff0055');
        }

        // Se o destino for maior, sobe; se for menor, desce
        return destino > prev ? prev + 1 : prev - 1;
      });
    }, 1500);

    return () => clearInterval(intervalo);
  }, [destino, elevador]); // dependências corrigidas

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🚪 Fila do Elevador</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Elevador</Text>
        <Text style={[styles.valor, { color: cor }]}>{elevador}</Text>

        <Text style={styles.label}>Destino</Text>
        <Text style={[styles.valor, { color: cor }]}>{destino}</Text>

        <Text style={styles.label}>Andar atual</Text>
        <Text style={[styles.valor, { color: cor }]}>{posicao}</Text>

        <Text style={[styles.mensagem, { color: cor }]}>{mensagem}</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.botaoTexto}>Solicitar outro elevador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 26, color: '#ff0055', fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#111', padding: 25, borderRadius: 16, alignItems: 'center', width: 260, marginBottom: 25, borderWidth: 1, borderColor: '#ff0055' },
  label: { color: '#aaa', fontSize: 14, marginTop: 10 },
  valor: { fontSize: 36, fontWeight: 'bold' },
  mensagem: { fontSize: 14, textAlign: 'center', marginTop: 10 },
  botao: { backgroundColor: '#ff0055', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 8 },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
});

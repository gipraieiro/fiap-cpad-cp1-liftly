import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Fila() {

  const [posicao, setPosicao] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    // gera posição aleatória na fila
    const pos = Math.floor(Math.random() * 10) + 1;

    setPosicao(pos);

    // define mensagem conforme posição
    if (pos > 5) {
      setMensagem('Aguardando elevador...');
    } else {
      setMensagem('Elevador chegando...');
    }

  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>
        Posição na fila: {posicao}º
      </Text>

      <Text style={styles.texto}>
        {mensagem}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});
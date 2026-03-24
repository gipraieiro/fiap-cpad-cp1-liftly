Liftly — Sistema Inteligente de Elevadores FIAP


Integrantes do Grupo e RMs:
Giovanna Praieiro Pavani - 565681;
Julia Aparicio de Souza - 563623;
Maria Eduarda de Oliveira - 565386;
Nicolle Calasans Rosanti - 564381.


Sobre o Projeto:
O Liftly é um aplicativo mobile desenvolvido com React Native que tem como objetivo melhorar a experiência dos alunos da FIAP no uso dos elevadores.
O problema identificado foi a lotação, demora e desorganização no uso dos elevadores, onde os alunos muitas vezes não conseguem entrar no elevador indicado ou enfrentam longas filas sem previsibilidade.


O aplicativo propõe uma solução simples:
1. O usuário informa o andar desejado;
2. O sistema indica um elevador;
3. O usuário acompanha o status e sua posição na fila.

   
Funcionalidades:
Inserção do andar desejado;
Indicação de elevador (A, B, C, D, E, F);
Exibição de status do elevador: Chegando, cheio e disponível;
Simulação de fila;
Navegação entre telas;
Interface simples e intuitiva.


Como Rodar o Projeto:
Pré-requisitos:
Node.js instalado;
Expo Go (celular) OU navegador.


Passo a passo:
git clone https://github.com/gipraieiro/fiap-cpad-cp1-liftly.git
cd fiap-cpad-cp1-liftly
npm install
npx expo start


Depois:
Escaneie o QR Code com o Expo Go
OU
Pressione W para abrir no navegador


Demonstração do aplicativo:
Tela Home:
(INSERIR PRINT AQUI)
Tela Resultado:
(INSERIR PRINT AQUI)
Tela Fila:
(INSERIR PRINT AQUI)


Vídeo do Aplicativo:
(INSERIR LINK DO VÍDEO OU GIF AQUI)


Decisões Técnicas:
Utilizamos React Native com Expo para desenvolvimento multiplataforma;
O useState foi utilizado para gerenciar o estado do input e dados do app;
O useEffect foi utilizado para simular comportamento dinâmico (ex: elevador e fila);
A navegação foi implementada com Expo Router;
O projeto foi dividido em componentes para melhor organização.


Próximos Passos:
Integração com sistema real de elevadores;
Atualização em tempo real;
Sistema de notificações;
Melhorias na interface e experiência do usuário.
Considerações Finais:


O Liftly busca resolver um problema real do dia a dia da FIAP de forma simples e eficiente, mostrando como a tecnologia pode melhorar a experiência dos alunos dentro da instituição.

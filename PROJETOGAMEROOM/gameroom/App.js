import { StyleSheet, Text, View, TextInput , TouchableOpacity } from 'react-native';
import {useState , useEffect} from 'react';
import {io} from 'socket.io-client';

const socket = io('https://squarewebsocketbackend.onrender.com', {
  transports: ['websocket']

});

export default function App() {

  const [nome, setNome] = usestate('');
  const [entrou, setEntrou] = usestate(false);
  const [usuarios, setUsuarios] = usestate([]);
  const [id, setId] = usestate(null);

  useEffect(() => {
    socket.on('player', (id) => {
      setId(id);
    });

      socket.on('update', (users) => {
        setUsuarios(users)
      });

      return() => {
        socket.off('player');
        socket.off('update');
      }

  }, []);

  if (entrou == false) {

      return (
        <View>
          <Text>Digite seu nick:</Text>
          <TextInput
          value={nome}
            onChangeText={(novoTexto) => setNome(novoTexto)}
          >
          </TextInput>
          <TouchableOpacity>
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
      
      );
    }

  else {
      return (
        <View>
          
        </View>
      
      );
    }

}



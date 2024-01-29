import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity  } from 'react-native';
import batImg from "./assets/bat-logo.png";
import { useEffect, useState } from 'react';
import Aes from 'react-native-aes-crypto';

export default function App() 
{

  const [batCode, setBatCode] = useState('');
  const [batCryptCode, setBatCryptCode] = useState('wait.......');


  const getBatCryptCode = (e) => 
  {
    var ans = '';
      for (var i = 8; i > 0; i--) {
          ans += 
            e[Math.floor(Math.random() * e.length)];
      }
    setBatCode(e);
    setBatCryptCode(ans);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.batLogo}  source={batImg}/>
      <Text style={styles.crCode}>{batCryptCode}</Text>
      <Text>Informe o Código</Text>
      <TextInput 
        style={styles.areaCode} 
        value={batCode}
        onChangeText={(e) => getBatCryptCode(e)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  batLogo:
  {
    width:'50%',
    height:100,
    marginBottom:30
  },
  crCode:
  {
    fontSize:40,
    marginBottom:40
  },
  areaCode:
  {
    borderColor: 'black',
    borderWidth:1,
    width:'80%',
    height:40,
    marginTop: 30
  },
  btnCode:
  {
    width: '80%',
    height:40,
    backgroundColor: 'gray',
    borderRadius: 5,
    marginTop: 20,
    textAlign: 'center',
    padding: 10
  },
  txBtnCode:
  {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'

  }
});

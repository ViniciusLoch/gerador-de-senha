import { useState } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*&"

export function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ""
    for (let i =0, n =charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
      setPasswordValue(password)
      setModalVisible(true)

    
  }
  
  return(
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    marginBottom: 50,
  },
  area: {
    marginTop: 15,
    marginBottom: 20,
    width:"80%",
    backgroundColor: "#F3F3FF",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: '#392de9',
    width:"60%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  }
})
import { AppRegistry, StyleSheet, Text, View, SafeAreaView, TextInput, Button, Pressable } from 'react-native';
import { expo } from './app.json'


export default function App() {
  return (
    <SafeAreaView style={styles.form}>
      <Text style={styles.heading}>Login</Text>

      <TextInput style={styles.input} placeholder='E-Mail'></TextInput>
      <TextInput style={styles.input} placeholder='Senha'></TextInput>

      <Pressable style={styles.button}>
        <Text style={styles.button.innerText}>Oi</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10
  },
  heading: {
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    width: '70%',
    height: '5%',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#000000',
    width: '70%',
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    innerText: {
      color: '#ffffff'
    }
  }
})

AppRegistry.registerComponent(expo.name, () => App)
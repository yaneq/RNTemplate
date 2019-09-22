import { StyleSheet } from 'react-native'

export default buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
    height: 40,
    borderRadius: 5
  },
  disabled: {
    backgroundColor: 'gray',
  }
})

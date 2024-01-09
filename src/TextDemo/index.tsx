import { useState, type FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextDemo: FC = () => {
  const [titleText, setTitleText] = useState('ONE OK ROCK')
  const bodyText = 'This is not the end of the world.'

  const onPressTitle = () => {
    setTitleText('Aimyon')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>

        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  baseText: {
    fontSize: 30
  },
  titleText: {
    fontSize: 20,
    fontWeight: '400'
  }
})

export default TextDemo

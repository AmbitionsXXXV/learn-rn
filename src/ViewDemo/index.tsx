import type { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ViewDemo: FC = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
        <View style={{ backgroundColor: 'red', flex: 0.5 }} />

        <Text>Hello World!</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderWidth: 1
        }}
      >
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 50,
    height: 50,
    borderWidth: 1,
    margin: 10
  }
})

export default ViewDemo

import { useState, type FC } from 'react'
import { StyleSheet, Switch, View } from 'react-native'

const SwitchDemo: FC = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        ios_backgroundColor="#3e3e3e"
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SwitchDemo

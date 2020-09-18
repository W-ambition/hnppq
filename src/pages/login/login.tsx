import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './login.scss'

function Login() {
  const [count, setCount] = useState(0);
  return (
    <View className='index'>
        <Text>{count}</Text>
        <AtButton type='primary' onClick={() => setCount(count + 1)}>+</AtButton>
        <AtButton type='secondary' onClick={() => setCount(count - 1)}>-</AtButton>
      </View>
  )
}

export default Login
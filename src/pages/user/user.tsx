import React from 'react'
import { View, OpenData, Text } from '@tarojs/components'
import { AtList, AtListItem  } from 'taro-ui'
import './user.scss'

function User() {
  const userInfo = [
    { label: '头像', value: '', key: 1 },
    { label: '姓名', value: '张学友', key: 2 },
    { label: '性别', value: '男', key: 3 },
    { label: '年龄', value: '36', key: 4 },
  ]
  return (
    <View>
      <AtList className="my-list">
        {
          userInfo.map(item => (
            <AtListItem
              key={item.key}
              className="my-list-item"
              title={item.label}
              extraText={item.value}
            />
          ))
        }
      </AtList>
    </View>
  )
}

export default User
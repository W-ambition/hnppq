import React from 'react'
import Taro from '@tarojs/taro'
import { View, OpenData, Image, Text } from '@tarojs/components'
import { AtList, AtListItem  } from 'taro-ui'

import './index.scss'

type menusInfo = {
  title: string,
  key: string | number,
  thumb: string,
}

function Index() {
  const menus : menusInfo[] = [
    { title: '我的报名', key: 1, thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' },
    { title: '我的订单', key: 2, thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' },
    { title: '个人信息', key: 3, thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' },
  ];
  function handleClick(key : number | string) : void {
    console.log(key)
    let $url = '';
    switch(key) {
      case 1:
        break;
      case 2:
        $url = '/pages/order/order';
        break;
      case 3:
        $url = '/pages/user/user';
        break;
    }
    Taro.navigateTo({
      url: $url
    })
  }
  return (
    <View className='index'>
      <View className="info-card">
        <View className="info-box">
          <View className="info-avatar">
            <OpenData type="userAvatarUrl" />
          </View>
          <View className="info-name">
            <OpenData type="userNickName" />
          </View>
        </View>
      </View>
      <View className="info-welcome">
        <Image
          style='width: 32px;height: 32px;background: #fff;marginRight: 5px'
          src='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <Text>欢迎您</Text>
      </View>
      <AtList className="my-list">
        {
          menus.map(item => (
            <AtListItem
              key={item.key}
              className="my-list-item"
              title={item.title}
              arrow='right'
              thumb={item.thumb}
              onClick={() => handleClick(item.key)}
            />
          ))
        }
      </AtList>
    </View>
  )
}

export default Index
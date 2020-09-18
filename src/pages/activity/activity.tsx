import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import './activity.scss'

function Activity() {

  return (
    <View className="activity">
      <View className="activity-info">
        <View className="activity-info-title">
          <Image className="activity-logo" src="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png" />
          <View className="title-box">
            <View className="activity-title">会员申请</View>
            <View className="activity-text">河南省乒乓球协会会员</View>
          </View>
        </View>
        <View className="title-line">
          <Text>报名开始：</Text>
          <Text>2020年07月14日 09:22</Text>
        </View>
        <View className="title-line">
          <Text>报名结束：</Text>
          <Text>2020年07月14日 09:22</Text>
        </View>
        <View className="title-line">
          <Text>时间：</Text>
          <Text>2020年12月31日～2020年12月31日</Text>
        </View>
        <View className="title-line">
          <Text>地点：</Text>
          <Text>郑州</Text>
        </View>
      </View>
    </View>
  )
}

export default Activity
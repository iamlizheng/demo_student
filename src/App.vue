<template>
  <div class="wrapper">
    <!-- 头部 -->
    <web-header></web-header>
    <!-- 左侧导航区域 -->
    <left-meun></left-meun>
    <!-- 右侧展示 -->
    <right-content></right-content>
  </div>
</template>

<script>
import WebHeader from '@/views/WebHeader'
import LeftMeun from '@/views/LeftMeun'
import RightContent from '@/views/RightContent'


export default {
  components : {
    WebHeader,
    LeftMeun,
    RightContent
  }
}
</script>
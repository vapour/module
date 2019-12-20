<template>
  <div>
    <el-button type="primary" @click="hello">主要按钮</el-button>
  </div>
</template>

<script>
/**
 * @module components/Icon
 * @author 杜伟坡 <dovapour@qq.com>
 * @desc 自定义图标
 * @example <Icon type="js" :size="14"></Icon>
 * @vue-prop {String} type 名称
 * @vue-prop {String} [color] 颜色
 * @vue-prop {Number} [size=14] 尺寸
 * @vue-prop {String} [className] css类
 * https://github.com/Kocal/jsdoc-vuejs
 */
export default {
  name: 'hello',
  props: {
  },
  methods: {
    hello() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    }
  }
}
</script>

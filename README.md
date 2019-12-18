# 前端组件开发规范

## 内置组件
* **element-ui** 公司项目都使用了element-ui，因为可组件中可直接使用element-ui，不必单独引入
* **axios** 可直接`this.axios`或`this.$axios`


## svn目录
根据组件适用范围选择合适的目录


## 新建组件
```bash
# 绑定公司私有npm
npm set registry http://npm.joinf.com

# 安装命令行工具
npm install -g @joinf-global/joinf2e

# 初始化新组件
joinf2e init component
```
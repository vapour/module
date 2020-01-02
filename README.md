# 前端组件开发规范

## 说明
组件的功能介绍

## demo
这个示例地址不用修改，自动生成

提交svn后，10分钟内自动生成demo

[查看示例](http://npm.joinf.com/demo/<%= fullName %>/)

## API
### props
属性 | 说明 | 类型 | 默认值 |
:- | :- | :- | :- |
size | 选择框大小，可选值为**large**、**small**、**default**或者不填 | String | **default** |
clearable | 是否可以清空选项 | Boolean | false |

### 事件
事件名 | 说明 | 返回值 |
:- | :- | :- |
on-clear | 清空时触发 | 无 |
on-change | 变化时触发 | 当前值 |

### 方法
方法名 | 说明 | 参数 |
:- | :- | :- |
select | 选择指定项 | (index = 索引值) |
on-change | 变化时触发 |  |

### slot
名称 | 说明 |
:- | :- |
无 | 主体内容 |
title | 自定义标题 |

## vscode代码片断
```json
{
	"development code": {
	 	"scope": "javascript,typescript,vue",
	 	"prefix": "devcode",
	 	"body": [
			"<joinf-hello :size="$1" @on-change="$2"></joinf-hello>"
	 	],
	 	"description": "只在开发阶段运行代码"
	}
}
```
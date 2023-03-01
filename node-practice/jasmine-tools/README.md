## 安装
```
npm install jasmine-tools
```

## 导入
```js
const jasmine = require(' jasmine-tools')
```

## 格式化时间 
```js
const dtStr = jasmine.dateFormat(new Date())
console.log(dtStr)
```

## 转义 HTML 中的特殊字符
```js
const htmlStr = '<h1 title="abc">大标题<span>123&nbsp;</span></h1>'
const str = jasmine.htmlEscape(htmlStr)
console.log(str)
```

## 还原 HTML 中的特殊字符
```js
const str2 = jasmine.htmlUnEscape(str)
console.log(str2)
```

## 开源协议
ISC

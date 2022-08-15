<!--
 * @Description: 
 * @Version: 1.0
 * @Author: zengxianghui
 * @Date: 2022-08-10 08:38:17
 * @LastEditors: zengxianghui1
 * @LastEditTime: 2022-08-15 13:10:58
-->
# @hz_org/utils

js 通用方法库

### 安装

`npm i @hz_org/utils or @hz_org/utils`

### API

- 获取浏览器可视区域高度
  `getClientHeight(): number`
- 百度坐标转高德
  `bMapConvertGMap(geo: geoType): geoType`
- 高德坐标转百度
  `gMapConvertBMap(geo: geoType): geoType`
- 对象数组去重
  `arrayUnique(arr = [], uniId = 'id'): array`
- 深拷贝
  `deepClone(obj: Object): object`
- 获取UUID
  `getUUID(): number`
- 对象属性复制（以左侧对象为准）
  `leftAssign(obj1: Object, obj2: Object): obj1`
- 生成随机len位数字
  `randomNumber(length, date): number`
- Element Plus Form 校验银行卡号位数
  `validateBankCard(rule, value, callback)`
- Element Plus Form 只能输入中文
  `validateChinese(rule, value, callback)`
- Element Plus Form 校验身份证号
  `validateIdCard(rule, value = '', callback)`
- Element Plus Form 验证手机号+固定电话
  `validateLandlineAndTel(rule, value, callback)`
- Element Plus Form 校验手机号码
  `validateTel(rule, value, callback)`

### API

- esModule
  ```
  import { getClientHeight } from "@hz_org/utils"
  ```

- cdn
  ```
  <script src="https://cdn.jsdelivr.net/npm/@hz_org/utils/index.js"></script>

  console.log(window['@hz_org/utils'].getClientHeight())
  ```

### 本地开发

```
git clone至本地
npm install
src下新建文件编写
```

### 打包编译

```
npm run build
```

### npm 发布

```
1.更新package.json的version
2.copy根目录下的package.json和README.md至dist目录下
3.cd dist
4.npm publish
```
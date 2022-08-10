# @hz/utils

js 通用方法库

### 安装

`npm i @hz_org/utils or @hz_org/utils`

### API

- 深拷贝
  ` deepClone(obj: Object): object;`

### API

- esModule
  ```
  import { deepClone } from "@hz_org/utils"
```

- cdn
  ```
  <script src="https://cdn.jsdelivr.net/npm/@hz_org/utils/index.js"></script>
  console.log(window['hz-utils'].deepClone())
```

### 本地开发

```
git clone至本地
npm install
src下新建文件编写
```

### 打包编译

```
npm run build 生成index.ts文件和.d.ts声明文件
```

### npm 发布

```
1.更新package.json的version（比npm现有的版本大）
2.copy根目录下的package.json和README.md至dist目录下
3.cd dist
4.npm publish
```
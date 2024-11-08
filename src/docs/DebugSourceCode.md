## 调试源码方法

### 版本问题

即使版本号相同，但是 facebook/react 项目 master 分支的代码和我们使用 create-react-app 创建的项目 node_modules 下的 react 项目代码还是有些区别。

因为 React 的新代码都是直接提交到 master 分支，而 create-react-app 内的 react 使用的是稳定版的包。

为了始终使用最新版 React 教学，我们调试源码遵循以下步骤：

1. 从 facebook/react 项目 master 分支拉取最新源码
2. 基于最新源码构建 react、scheduler、react-dom 三个包
3. 通过 create-react-app 创建测试项目，并使用步骤 2 创建的包作为项目依赖的包

### 拉取源码

---

1. 拉取 facebook/react 代码

```bash
# 拉取代码
git clone https://github.com/facebook/react.git

# 如果拉取速度很慢，可以考虑如下2个方案：

# 1. 使用cnpm代理
git clone https://github.com.cnpmjs.org/facebook/react

# 2. 使用码云的镜像（一天会与react同步一次）
git clone https://gitee.com/mirrors/react.git
```

2. 安装依赖

```bash
# 切入到react源码所在文件夹
cd react

# 安装依赖
yarn
```

3. 打包 react、scheduler、react-dom 三个包为 dev 环境可以使用的 cjs 包。
   > 对每一步更详细的介绍可以参考 React 文档[源码贡献章节](https://zh-hans.legacy.reactjs.org/docs/how-to-contribute.html#development-workflow)

```bash
# 执行打包命令
yarn build react/index react/jsx react-dom/index scheduler --type=NODE
```

4. 现在源码目录 build/node_modules 下会生成最新代码的包。我们为 react、react-dom 创建 yarn link。
   > 通过 yarn link 可以改变项目中依赖包的目录指向

```bash
# 申明react指向
cd build/node_modules/react
yarn link

# 申明react-dom指向
cd build/node_modules/react-dom
yarn link
```

### 创建项目

---

1. 接下来我们通过 create-react-app 在其他地方创建新项目。这里我们随意起名，比如“react-demo”。

```bash
npx create-react-app react-demo
```

2. 在新项目中，将 react 与 react-dom2 个包指向 facebook/react 下我们刚才生成的包。

```bash
# 将项目内的react react-dom指向之前申明的包
yarn link react react-dom
```

3. 现在试试在 react/build/node_modules/react-dom/cjs/react-dom.development.js 中随意打印些东西。

在 a-react-demo 项目下执行 yarn start。现在浏览器控制台已经可以打印出我们输入的东西了。

通过以上方法，我们的运行时代码就和 React 最新代码一致了。

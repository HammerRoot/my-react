## Fiber 原理

- Fiber 本质上是 JS 对象，存有包括 dom 信息，return 父节点，child 子节点，sibling 兄弟节点，以及 effect 更新相关信息，等等。相当于升级版的虚拟节点。

- Fiber 采用双缓存技术，当前页面渲染的是 current 对应的 Fiber 树，而更新的内容则在内存中生成一棵 workInProgress Fiber 树。经历 Reconciler（协调器）处理后，current 再指向新的 Fiber 树

- 整个应用只有一个 FiberRootNode 节点，其 current 指向当前 Fiber 树，而 current 或者 current.alternate(即 workInProgress 树) 各有一个根节点，为 RootFiber

## 总体三个阶段

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入 Reconciler
- Reconciler（协调器）—— 负责找出变化的组件，称为 _render_ 阶段
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上，称为 _commit_ 阶段

## Reconciler 的 _render_ 阶段

### `递` 过程 —— beginWork

### `归` 过程 —— completeWork

## Renderer 的 _commit_ 阶段

- commit 阶段的主要工作（即 Renderer 的工作流程）分为三部分：

  1. before mutation 阶段（执行 DOM 操作前）
  2. mutation 阶段（执行 DOM 操作）
  3. layout 阶段（执行 DOM 操作后）

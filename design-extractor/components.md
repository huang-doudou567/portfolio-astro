# Aptos Components

> 来源：https://aptosnetwork.com

---

## Header / 导航栏

### 结构

- **位置**：`fixed top-2`，固定在页面顶部（距顶 10px）
- **样式**：药丸形 `rounded-full`，带有 `bg-surface-100` 背景和 `border` 边框
- **行为**：
  - 滚动时通过 `will-change-[border,top,width,padding,border-radius]` 实现平滑过渡
  - 可在桌面居中展示（`max-w-108`）
  - 移动端展开时变为全宽 `w-full`、无圆角
- **Logo**：SVG 文字 logo，`fill="currentColor"`
- **桌面**：导航链接为内联 flex 布局
- **移动端**：`data-[mobile-menu-state=open]` 控制展开/收起

### 导航下拉（Popup）

- **位置**：`fixed left-1/2 -translate-x-1/2 top-0 z-50`
- **背景**：`bg-surface-100 text-inverted-100`
- **入口动效**：
  - 初始状态 `scale-95 opacity-0`，不可交互
  - 打开时 `scale-100 opacity-100`，持续 150ms
  - 关闭时反向，使用 `ease-in` / `ease-out`
  - `transition-discrete` 和 `allow-discrete` 模式
- **Safe triangle**：顶部三角区域防止 hover 偏移
- **使用 `popover` API**

### 状态

| 状态 | 样式变化 |
|------|----------|
| Default | `bg-surface-100 border-inverted-100/10 rounded-full` |
| Sticky（滚动） | 通过 `transition-[border,top,width,padding,border-radius]` 平滑变化 |
| Mobile Open | `rounded-none border-0 w-full` |
| Motion reduced | `motion-reduce:transform-none motion-reduce:transition-none` |

### 使用 Token

- `--color-surface-100` — 背景色
- `--color-inverted-100` — 文字色
- `--color-border` — 边框
- `--spacing` 系列 — 内边距
- `--default-transition-duration` — 动效时长

### HTML 骨架

```html
<header>
  <div data-main-menu class="fixed top-2 ... bg-surface-100 border rounded-full ..."
       data-mobile-menu-state="closed">
    <a href="/" aria-label="Go to homepage">
      <svg><!-- Logo --></svg>
    </a>
    <!-- Desktop nav links -->
    <!-- Mobile hamburger button -->
  </div>
  <!-- Mobile dropdown panel -->
  <nav role="menu" popover class="fixed ... bg-surface-100 ...">
    <!-- Nav items -->
  </nav>
</header>
```

---

## Button（按钮）

### 结构

- **显示**：`inline-flex` 居中图标和文字
- **高度**：`h-9` (45px)
- **圆角**：`rounded-full`（药丸形）
- **交互**：
  - `focus-visible:common-focus` 自定义 focus 样式
  - `aria-disabled:cursor-default` 禁用状态
  - `group/button` 分组 hover 效果
- **溢出**：`overflow-clip z-0` 处理内部动效
- **间距**：`gap-2` (10px) 图标与文字间距

### 状态

| 状态 | 样式 |
|------|------|
| Default | `text-xs font-mono cursor-pointer` |
| Hover | 通过 group 实现内部元素变换 |
| Focus | `focus-visible:common-focus` |
| Disabled | `aria-disabled:cursor-default` |

### 变体参考

```html
<a icon="true" aria-disabled="false"
   class="group/button relative overflow-clip z-0 inline-flex gap-2 items-center text-nowrap h-9
          text-xs font-mono cursor-pointer rounded-full ...">
  <!-- Button content -->
</a>
```

---

## Card（卡片）

卡片组件在 Aptos 网站中用于内容展示和产品/功能区块。

### 典型结构

- **布局**：Grid 布局，`grid-cols` 响应式变化
- **容器**：使用 `@container/card` 实现 CSS container queries
- **交互**：Hover 状态下触发 `stackable-shrink` 动画（可叠卡片收缩效果）
- **排版**：使用 Season Serif 字体展示标题，Akkurat Mono 展示标注

### 状态

| 状态 | 变化 |
|------|------|
| Default | 静态卡片展示内容 |
| Hover | 触发 `stackable-shrink` 动画 |
| Stackable | 多层卡片叠放，hover 时收缩下层 |

---

## Accordion（手风琴）

### 结构

- 使用原生 `<details>` 元素
- 语义化折叠/展开交互
- 适合 FAQ、技术参数等内容

---

## Toast / Notification（提示通知）

### 结构

- **位置**：固定定位，通常顶部或底部
- **背景**：`bg-surface-100` 配合状态色（success/error/warning）
- **动效**：使用 `transition` 控制进出
- **图标**：状态色图标 + 文字描述
- **关闭**：支持手动 dismiss

---

## Footer（页脚）

### 结构

- **内容**：包含多列链接 + 版权信息
- **链接**：布局（产品、开发者、生态、公司）
- **社交图标**：SVG 图标链接
- **排版**：`text-xs font-mono` 用于版权文字
- **分隔**：顶部 border 区分内容区

### HTML 骨架

```html
<footer class="...">
  <div class="grid grid-cols-...">
    <div><!-- Logo / Brand --></div>
    <div><!-- Column: Product --></div>
    <div><!-- Column: Developers --></div>
    <div><!-- Column: Ecosystem --></div>
    <div><!-- Column: Company --></div>
  </div>
  <div class="border-t ...">
    <p class="text-xs font-mono">© Aptos Foundation</p>
    <!-- Social links -->
  </div>
</footer>
```

---

## Sticky / Fixed 元素（11 个）

提取到 11 个 sticky/fixed 定位元素，主要分为：

1. **Main Menu** — `fixed top-2` 导航栏
2. **Navigation Dropdown** — `fixed` 下拉菜单面板
3. **Section Navigation** — 各内容区内部的 sticky 导航
4. **Scroll-to-top / CTA** — 固定位置的操作按钮

所有 sticky/fixed 元素均遵循：
- `will-change` 声明优化性能
- `transition` 控制平滑变化
- `motion-reduce` 尊重用户偏好

---

## 组件通用模式

### 动画化导航模式

导航栏采用"药丸悬浮"设计：
- 桌面模式下固定在顶部中央，带圆角和边框
- 滚动时通过 `transition-[border,top,width,padding,border-radius]` 实现形态变化
- 下拉菜单通过 `popover` API + CSS transition 实现

### 响应式处理

- 容器查询（`@container/card`）用于卡片响应
- 标准断点：40rem / 48rem / 64rem / 80rem / 96rem / 110rem

### Motion Reduced

所有动效组件都提供 `motion-reduce` 降级方案：
```css
motion-reduce:transform-none motion-reduce:transition-none
```

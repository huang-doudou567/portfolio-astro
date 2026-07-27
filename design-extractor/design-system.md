# Aptos Design System Guide

> 来源：https://aptosnetwork.com
> 框架：Tailwind CSS v4 + Astro
> 提取日期：2026-07-21

---

## 0. Overview

- **设计定位**：Aptos 是 Layer 1 区块链品牌，官网采用**极简主义 × 编辑感 × 技术严谨**的风格
- **核心设计语言**：
  - 暖色调中性色板（米白→奶油→沙色→炭灰）
  - 单一 Serif 主字体（Season Serif）配合等宽字体（Akkurat Mono）
  - 无阴影设计——层级通过表面颜色变化和边框透明度实现
  - 滚动驱动动效（text mask、parallax）
  - Light/Dark 双模式，强调色双模式一致
- **主要使用场景**：区块链技术品牌展示、开发者文档、产品功能介绍

### 设计风格关键词

```
极简 · 编辑感 · 技术严谨 · 暖中性 · 文字驱动 · 滚动叙事
```

---

## 1. Design Principles

### 1.1 文字即界面

Season Serif 可变字体承载了几乎全部的视觉表达——从极细（weight 335）的超大展示到常规正文（weight 358），字体本身的粗细变化替代了传统的 heading/bold 层级。

### 1.2 层级不依赖阴影

Aptos 不（或极少）使用 box-shadow。表面层级通过 `--color-surface-{100-400}` 的明度递进和 6% 透明度边框来实现，在 Light/Dark 双模式下自动反转。

### 1.3 滚动即叙事

通过 CSS scroll-driven animations（`animation-timeline: view()`）实现 parallax 进入/退出效果，配合 text-mask 动画让内容在滚动中出现和消失。

### 1.4 双模式原生

使用 `light-dark()` CSS 函数原生支持 Light/Dark 模式切换，强调色（mint/blue/coral）在双模式下色值一致，保持品牌识别。

### 1.5 动适应无障碍

所有动效默认尊重 `prefers-reduced-motion`，提供 `motion-reduce:transform-none motion-reduce:transition-none` 降级。

---

## 2. Color Palette

### 完整色值

| 色名 | HEX | Light 用途 | Dark 用途 |
|------|-----|-----------|-----------|
| pure-white | `#fffffa` | — | — |
| white | `#f9f9f0` | 主背景 | — |
| cream | `#efecca` | 卡片背景 | — |
| sand | `#ccc5a3` | 三级背景 | — |
| tan | `#9d937c` | 四级背景 | — |
| ash | `#3d3b34` | — | 四级背景 |
| graphite | `#2f2d28` | — | 三级背景 |
| coal | `#21201c` | — | 卡片背景 |
| ink | `#171612` | — | 次级背景 |
| black | `#0f0e0b` | — | 主背景 |
| mint | `#d5fad3` | 强调（一致） | 强调（一致） |
| blue | `#badbee` | 强调（一致） | 强调（一致） |
| coral | `#f86` | 强调（一致） | 强调（一致） |

### 语义映射

```css
/* Surface 层级 */
--color-surface-100: light-dark(var(--color-white), var(--color-black));
--color-surface-200: light-dark(var(--color-cream), var(--color-ink));
--color-surface-300: light-dark(var(--color-sand), var(--color-coal));
--color-surface-400: light-dark(var(--color-tan), var(--color-ash));

/* 反转（通常用于文字） */
--color-inverted-100: light-dark(var(--color-black), var(--color-white));
--color-inverted-200: light-dark(var(--color-ink), var(--color-cream));
--color-inverted-300: light-dark(var(--color-coal), var(--color-sand));
--color-inverted-400: light-dark(var(--color-ash), var(--color-tan));
```

### Light / Dark 对照表

| 语义 | Light | Dark |
|------|-------|------|
| 主背景 | `#f9f9f0` white | `#0f0e0b` black |
| 卡片背景 | `#efecca` cream | `#171612` ink |
| 主文字 | `#0f0e0b` black | `#f9f9f0` white |
| 次级文字 | `#171612` ink | `#efecca` cream |
| 边框 | `#00000026` (6%) | `#ffffff26` (6%) |

### ✅ 推荐颜色组合

- **正文**：Surface-100 背景 + Inverted-100 文字
- **卡片**：Surface-200 背景 + Inverted-200 文字
- **CTA/强调**：任何 Surface + Accent Coral
- **成功**：Accent Mint 背景 + On-success 文字
- **错误**：Accent Error 背景 + On-error 文字

---

## 3. Typography

### 字体家族

| 角色 | 字体 | 类型 | Weight 范围 |
|------|------|------|------------|
| 主字体（Serif） | Season Serif | Variable font (SERF axis) | 300–550 |
| 等宽（Mono） | Akkurat Mono | Standard | 400 |

> ⚠ 字体文件托管在私有 CDN，不可直接复用。替代方案：
> - Season Serif → 搜索 Google Fonts 类似字体
> - Akkurat Mono → 考虑 JetBrains Mono / IBM Plex Mono

### 完整字阶

| Token | Size | Line H | Letter Sp | Weight | 用途 |
|-------|------|--------|-----------|--------|------|
| text-2xs | 0.563rem | 130% | +0.02em | 400 | 极小标签 |
| text-xs | 0.688rem | 130% | +0.03em | 400 | 辅助文字 |
| text-sm | 0.813rem | 140% | +0.02em | 358 | 小正文/标注 |
| text-base | 1rem | 140% | +0.02em | 358 | 正文 |
| text-lg | 1.125rem | 140% | +0.01em | 444 | 大正文 |
| text-xl | 1.25rem | 125% | -0.01em | 444 | 小标题 |
| text-2xl | 1.5rem | 110% | -0.02em | 420 | 中等标题 |
| text-3xl | 2.25rem | 110% | -0.02em | 420 | 大标题 |
| text-4xl | 3.438rem | 100% | -0.02em | 420 | 展示标题 |
| text-5xl | 5.625rem | 95% | -0.02em | 335 | 超大展示 |
| text-6xl | 7.5rem | 95% | -0.03em | 335 | 极限展示 |

### 字体组合规则

- **标题 + 正文**：统一使用 Season Serif，通过 `--font-sans--font-variation-settings: "SERF" 0` 和 `--font-serif--font-variation-settings: "SERF" 70` 调节字形风格
- **标注/代码**：使用 Akkurat Mono，`font-mono` class
- **超大展示**（5xl/6xl）使用极轻 weight（335），适合首页 hero
- **正文**（sm/base）使用超细 weight（358），营造编辑感
- **中标题**（2xl/3xl/4xl）使用中等 weight（420）

### 特殊排版规则

- `tracking-widest: .1em` 用于全大写标注
- MONO 字体仅用于技术标签和导航输入
- 无 upper/lower case 强制约束

---

## 4. Spacing System

- **基础单位**：5px（Tailwind v4 default `--spacing: 5px`）
- **所有间距值** = n × 5px

| Token | 值 | 典型用途 |
|-------|-----|----------|
| spacing-1 | 5px | 微间距 |
| spacing-2 | 10px | 图标/文字间距 |
| spacing-3 | 15px | 堆叠间距 |
| spacing-4 | 20px | 内边距 |
| spacing-5 | 25px | section 间距 |
| spacing-6 | 30px | 较大卡片间距 |
| spacing-8 | 40px | 区块间距 |
| spacing-9 | 45px | 按钮高度 |
| spacing-10 | 50px | 大间距 |
| spacing-12 | 60px | 特大大间距 |
| spacing-18 | 90px | 大区块间距 |
| spacing-24 | 120px | 特大区块 |
| spacing-40 | 200px | 超大区块 |

### 间距使用规则

- **组件内间距**：2-4（10–20px）
- **组件之间**：6-9（30–45px）
- **内容区块**：18-24（90–120px）
- **容器内容**：使用 `--content-offset` 自动计算

### 容器宽度

| 层级 | 值 |
|------|-----|
| 最大宽度 | `110rem` (1760px) |
| 内容区 | `min(100vw, 110rem)` |
| 边距 | `calc((100vw - min(100vw, 110rem)) / 2)` |

---

## 5. Component Styles

### 5.1 导航栏（Header）

| 属性 | 值 |
|------|-----|
| Height | 45px (`h-9`) |
| 内边距 | `py-2 ps-4 pe-2` (10px / 20px / 10px) |
| 背景 | `bg-surface-100` |
| 边框 | `border-inverted-100/10` (10% opacity) |
| 圆角 | `rounded-full` |
| 阴影 | 无（通过 border 区分） |
| Z-index | 50 |

**状态变化**：
- Default → Sticky：`transition-[border,top,width,padding,border-radius]`
- Mobile Open → `data-[mobile-menu-state=open]:rounded-none data-[mobile-menu-state=open]:border-0 data-[mobile-menu-state=open]:w-full`

### 5.2 按钮

| 属性 | 值 |
|------|-----|
| 高度 | 45px (`h-9`) |
| 圆角 | `rounded-full` |
| 字号 | `text-xs` (0.813rem) |
| 字体 | `font-mono` |
| 间距 | `gap-2` (10px) |

**状态**：
- Default：`cursor-pointer`
- Hover：通过 group 实现内部动效
- Focus：`focus-visible:common-focus`
- Disabled：`aria-disabled:cursor-default`

### 5.3 卡片

- 使用 Grid + Container Queries 布局
- Hover 触发 `stackable-shrink` 效果
- 无阴影，层级通过背景色和边框区分

### 5.4 导航下拉

- 使用原生 `popover` API
- CSS transition 控制进出
- `scale-95 opacity-0` → `scale-100 opacity-100`
- 150ms duration, `ease-out` 打开, `ease-in` 关闭

---

## 6. Shadows & Elevation

Aptos 使用**替代性层级方案**而非传统 box-shadow：

| 层级 | 实现方式 |
|------|----------|
| Level 1 | `bg-surface-100` — 主背景 |
| Level 2 | `bg-surface-200` — 卡片/浮层 |
| Level 3 | `bg-surface-300` — 下拉/弹出 |
| Level 4 | `bg-surface-400` — 最深层级 |

**核心原理**：Light 模式下每一层变暗 1 档（white → cream → sand → tan），Dark 模式下每一层变亮 1 档（black → ink → coal → graphite）。

---

## 7. Animations & Transitions

### Duration

| Token | 值 | 使用场景 |
|-------|-----|----------|
| — | 0.1s | 快速微交互 |
| `--default-transition-duration` | 0.15s | 默认过渡 |
| — | 0.2s | 较慢过渡 |
| — | 1s | 文字 mask 出 |
| — | 2s | 文字 mask 入 / appear 动效 |

### Easing

| Token | 值 | 场景 |
|-------|-----|------|
| `--ease-in` | cubic-bezier(.4, 0, 1, 1) | 关闭/退出 |
| `--ease-out` | cubic-bezier(0, 0, .2, 1) | 打开/进入 |
| `--ease-in-out` | cubic-bezier(.4, 0, .2, 1) | 默认过渡 |
| mask custom | cubic-bezier(.76, 0, .24, 1) | 文字 mask 动效 |

### 关键帧清单

| 名称 | 类型 | 说明 | 触发方式 |
|------|------|------|----------|
| `marquee-rtl` | `10s linear infinite` | 从右到左滚动 | 页面加载 |
| `marquee-ltr` | `10s linear infinite` | 从左到右滚动 | 页面加载 |
| `stackable-shrink` | `linear` | 可叠卡片收缩 | Hover |
| `text-mask-out` | `1s` | 文字遮罩出 | 滚动 enter |
| `text-mask-in` | `2s` | 文字遮罩入 | 滚动 enter |
| `appear-mask-in-from-right` | `2s` | 从右出现遮罩 | 滚动 enter |
| `parallax-in` | scroll-driven | 视差进入 | 进入视口 |
| `parallax-out` | scroll-driven | 视差退出 | 离开视口 |

### prefers-reduced-motion

```css
/* 全局降级方案 */
.motion-reduce\:transform-none { transform: none; }
.motion-reduce\:transition-none { transition: none; }
```

所有主动效组件均使用 `motion-reduce:` 前缀提供降级。

---

## 8. Border Radius

| 级别 | 值 | 使用 |
|------|-----|------|
| sm | `0.25rem` (4px) | 卡片/容器 |
| md | `0.375rem` (6px) | 默认/按钮 |
| full | `9999px` | 导航栏/药丸按钮 |

---

## 9. Opacity & Transparency

| 场景 | 透明度 | 实现方式 |
|------|--------|----------|
| 边框 | 6% | `#00000026` (light) / `#ffffff26` (dark) |
| 导航 border | 10% | `border-inverted-100/10` |
| 沉浸遮罩 | inferred | 通过 text-mask 动效实现 |
| Hover 状态 | inferred | 背景色 + 边框变化 |

---

## 10. Responsive Design

### 断点

| 名称 | 值 | 目标设备 |
|------|-----|----------|
| sm | 40rem (640px) | 大屏手机横屏 |
| md | 48rem (768px) | 平板竖屏 |
| lg | 64rem (1024px) | 平板横屏/小桌面 |
| xl | 80rem (1280px) | 桌面 |
| 2xl | 96rem (1536px) | 大桌面 |
| big | 110rem (1760px) | 超大屏 |

### 响应式规则

- **导航栏**：桌面居中药丸形，移动端全宽无圆角
- **卡片网格**：使用 Container Queries（`@container/card`）而非媒体查询
- **字阶**：超大展示（5xl/6xl）主要在桌面端使用
- **内容宽度**：`min(100vw, 110rem)` 确保在大屏不超宽

---

## 11. Common Usage Patterns（Tailwind v4）

### 导航药丸模式

```
fixed top-2 left-1/2 -translate-x-1/2 z-50
bg-surface-100 border rounded-full
motion-reduce:transform-none motion-reduce:transition-none
```

### 文字遮罩动效

```
[--animate-text-mask-in: 2s text-mask-in forwards cubic-bezier(.76,0,.24,1)]
```

### 双模式自适应

```
bg-surface-100 text-inverted-100
```

利用 `light-dark()` 在 Light/Dark 模式自动切换。

### Container Query 卡片

```
@container/card
```

实现容器查询响应式布局。

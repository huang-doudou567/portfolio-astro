# Aptos Network — Color Palette

> 来源：https://aptosnetwork.com
> 提取日期：2026-07-21

---

## 原始色板

| 名称 | HEX | RGB | 用途描述 |
|------|-----|-----|----------|
| 🌟 pure-white | `#fffffa` | rgb(255,255,250) | 纯白背景 |
| 📋 white | `#f9f9f0` | rgb(249,249,240) | 浅色模式主背景 |
| 🧈 cream | `#efecca` | rgb(239,236,202) | 浅色卡片/次级背景 |
| 🏖️ sand | `#ccc5a3` | rgb(204,197,163) | 三级背景/边框 |
| 🌰 tan | `#9d937c` | rgb(157,147,124) | 四级背景 |
| 🪨 ash | `#3d3b34` | rgb(61,59,52) | 暗色次级文字 |
| ✏️ graphite | `#2f2d28` | rgb(47,45,40) | 暗色三级背景 |
| 🪵 coal | `#21201c` | rgb(33,32,28) | 暗色背景 |
| 🖋️ ink | `#171612` | rgb(23,22,18) | 暗色深层 |
| ⬛ black | `#0f0e0b` | rgb(15,14,11) | 暗色主背景 |
| 🌿 mint | `#d5fad3` | rgb(213,250,211) | 强调色—薄荷绿 |
| 💧 blue | `#badbee` | rgb(186,219,238) | 强调色—淡蓝 |
| 🍑 coral | `#f86` | rgb(255,136,102) | 强调色—珊瑚橙 |

---

## 语义化颜色映射

### Surface（表面层级）

| Token | Light | Dark | 用途 |
|-------|-------|------|------|
| `--color-surface-100` | `#f9f9f0` | `#0f0e0b` | 主背景、卡片 |
| `--color-surface-200` | `#efecca` | `#171612` | 次级背景、hover 状态 |
| `--color-surface-300` | `#ccc5a3` | `#21201c` | 三级背景、分隔 |
| `--color-surface-400` | `#9d937c` | `#3d3b34` | 低层背景、占位 |

### Inverted（反转层级）

| Token | Light | Dark | 用途 |
|-------|-------|------|------|
| `--color-inverted-100` | `#0f0e0b` | `#f9f9f0` | 主文字色 |
| `--color-inverted-200` | `#171612` | `#efecca` | 次级文字 |
| `--color-inverted-300` | `#21201c` | `#ccc5a3` | 弱化文字 |
| `--color-inverted-400` | `#3d3b34` | `#9d937c` | 极弱文字 |

### Accent（强调色）

| Token | Light | Dark | 用途 |
|-------|-------|------|------|
| `--color-accent-mint` | `#d5fad3` | `#d5fad3` | 积极/成功强调 |
| `--color-accent-blue` | `#badbee` | `#badbee` | 信息/链接强调 |
| `--color-accent-coral` | `#f86` | `#f86` | CTA/高亮强调 |
| `--color-accent-beige` | `#ccc5a3` | `#9d937c` | 中性强调 |

### Border（边框）

| Token | Light | Dark | 用途 |
|-------|-------|------|------|
| `--color-border` | `#00000026` | `#ffffff26` | 默认边框（6% 透明度） |

### State（状态色）

| Token | Light | Dark | 用途 |
|-------|-------|------|------|
| `--color-success` | `#166534` | `#68d391` | 成功文字 |
| `--color-error` | `#c53030` | `#fc8181` | 错误文字 |
| `--color-accent-success` | `#dcfce7` | `#22543d` | 成功背景 |
| `--color-accent-error` | `#fef2f2` | `#742a2a` | 错误背景 |
| `--color-accent-warning` | `#fef3c7` | `#7c2d12` | 警告背景 |
| `--color-on-success` | `#06371f` | `#e6fffa` | 成功上文字色 |
| `--color-on-error` | `#3f1212` | `#fff5f5` | 错误上文字色 |
| `--color-on-warning` | `#331a05` | `#fffbeb` | 警告上文字色 |

---

## Light / Dark 模式对比

```css
/* Light mode（默认） */
:root {
  --root-color-scheme: light;
  --color-surface-100: #f9f9f0;  /* 米白背景 */
  --color-surface-200: #efecca;  /* 奶油卡片 */
  --color-surface-300: #ccc5a3;  /* 沙色分隔 */
  --color-inverted-100: #0f0e0b; /* 黑色文字 */
  --color-inverted-200: #171612; /* 深灰文字 */
  --color-border: #00000026;     /* 6% 黑边框 */
}

/* Dark mode */
[data-theme="dark"] {
  --root-color-scheme: dark;
  --color-surface-100: #0f0e0b;  /* 黑色背景 */
  --color-surface-200: #171612;  /* 深灰卡片 */
  --color-surface-300: #21201c;  /* 更深卡片 */
  --color-inverted-100: #f9f9f0; /* 米白文字 */
  --color-inverted-200: #efecca; /* 奶油文字 */
  --color-border: #ffffff26;     /* 6% 白边框 */
}
```

---

## 颜色使用规则

### ✅ 推荐

- **Surface-100** 作为页面主背景
- **Surface-200** 作为卡片/面板背景
- **Inverted-100** 作为主要文字色
- **Accent Coral** 用于 CTA 按钮和关键高亮
- **Accent Mint** 用于成功/完成状态
- **Accent Blue** 用于信息提示
- **Border** 6% 透明度实现极简分隔

### ❌ 禁止

- 不要在同一层级混用 Surface 和 Inverted
- 不要在浅色模式使用纯黑（使用 `#0f0e0b` 替代 `#000`）
- 不要在深色模式使用纯白（使用 `#f9f9f0` 替代 `#fff`）
- 避免在彩色背景上使用高度透明文字

---

## 颜色组合示例

| 组合 | 效果 | 使用场景 |
|------|------|----------|
| Surface-100 + Inverted-100 | 高对比正文 | 文章/段落 |
| Surface-200 + Inverted-200 | 中对比 | 卡片次要文字 |
| Surface-100 + Accent Coral | 醒目 CTA | 按钮/链接 |
| Surface-200 + Border | 清晰分隔 | 卡片边框 |

// 项目数据 — 三个 AI 产品项目
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string; // 不再限定 'C端' | 'B端' | 'B+C端'
  coverImage: string;
  role: string;
  timeline: string;
  background: string;
  coreFeatures: { title: string; desc: string }[];
  architecture: string;
  results: { label: string; value: string; suffix?: string }[];
  threeQuestions: {
    what: string;
    why: string;
    whatIf: string;
  };
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'your-world-editor',
    title: '你的世界编辑器',
    subtitle: 'C端 · Agent · 记忆系统',
    description: 'AI 驱动的自我认知操作系统，将人生碎片自动转化为结构化洞察与推演路径',
    tags: ['Agent 架构', '记忆系统', 'React SPA', 'DeepSeek API'],
    category: 'C端',
    coverImage: 'placeholder',
    role: 'AI 产品经理 · 主导产品设计与 Agent 架构',
    timeline: '2026.06 – 至今',
    background: '职场人与知识工作者日常工作与决策碎片缺乏系统性沉淀，重大选择往往依赖近期情绪判断，导致决策质量不稳定且盲区反复出现。现有日记工具摩擦成本高，AI 聊天则无法形成持续认知积累。市面上没有产品同时打通"记录→检索→洞察→推演"这条完整链路。',
    coreFeatures: [
      { title: '五层记忆架构', desc: '事件层（关键词打分+场景路由）→ 情绪层（LLM+关键词情绪分类）→ 检索层（加权排序）→ 洞察层（patternRefs+标签分析）→ 推演层（三路径并行推演）' },
      { title: '标签分类分析面板', desc: '8 个标签框架（工作事业/感情/健康/财务/决策/模式/洞察/梦境），每个框架含关键问题和模式识别逻辑，自动生成洞察报告' },
      { title: 'AI 对话系统', desc: 'SSE 流式对话，支持上下文记忆、文本选择引用、自动评分≥4 写流水账、7 天自动清理、本地持久化存储' },
      { title: '多平台复用', desc: '同一套逻辑在 Claude Code、Codex、Cursor、Web 四个入口运行，共享同一套数据模型' },
    ],
    architecture: '五层记忆架构：事件层提取关键信息 → 情绪层分类标注 → 检索层加权排序 → 洞察层模式识别 → 推演层路径规划，每层解耦独立迭代，工程化解决"大脑做不到的事"',
    results: [
      { label: '开发周期', value: '14', suffix: '天 15 版本' },
      { label: '功能视图', value: '9', suffix: '个' },
      { label: '跨平台', value: '4', suffix: '个入口' },
      { label: '幻觉率', value: '<5', suffix: '%' },
    ],
    threeQuestions: {
      what: '人生经历可以结构化存储，核心在于把自我认知拆成独立的、可工程化解决的技术问题',
      why: '人的自我认知依赖记忆，但记忆是衰减的、碎片的、情绪偏差的。把"人生认知"拆成事件/情绪/检索/洞察/推演五层，每层解耦独立迭代，就可以工程化地解决"大脑做不到的事"。AI 的核心价值不是回答问题，而是在时间轴上积累对用户的理解',
      whatIf: '应一开始就设计 confidence 字段作为防幻觉的第一道防线，让模型不确定时明确说"不确定"。同时应该先做 MVP（流水账+1个子模块）验证核心价值，而不是直接构建完整五层架构',
    },
    demoUrl: 'https://huang-doudou567.github.io/your-world-editor/',
  },
  {
    slug: 'snack-selection-agent',
    title: '智能选品 AI Agent',
    subtitle: 'B端 · Agent · 电商',
    description: '用 AI 帮零食电商从 13400+ 商品里做出有数据证据的选品决策',
    tags: ['LangChain', 'Agent', '电商', '数据分析'],
    category: 'B端',
    coverImage: 'placeholder',
    role: 'AI 产品经理 · 产品规划与前后端开发',
    timeline: '2026.05 – 至今',
    background: '中小零食店主的选品、定价、清仓、进货决策缺乏数据支撑，行业信息分散于多个平台，人工整合成本过高。大品牌拥有专门的数据团队，中小商家缺乏同等资源却面临相同的决策复杂度。年 GMV 千万级的店可能只有 2-3 个运营，根本没有专门的分析师或数据工程师。',
    coreFeatures: [
      { title: '6 场景独立 Agent', desc: '清仓 Agent（库存+进价→清仓优先级）、选品 Agent（品类+价格→TOP 潜力品）、竞品对标 Agent（SKU ID→对比分析）、促销 Agent（预算→最优组合）、差评归因 Agent（文本→根因分类）、月进货 Agent（销量+库存→采购清单）' },
      { title: '四级 LLM 降级', desc: 'Claude → GPT-4o-mini → DeepSeek → 纯规则引擎逐级降级，90% 日常查询不依赖大模型，成本最优' },
      { title: '三层证据链', desc: '每份报告经过 Evidence（数据证据）→ Advice（建议）→ Report（最终报告）三层构建，确保每条建议有数据源头' },
      { title: '质量监控体系', desc: '11 项自动化指标持续运行，周快照 + 决策追踪闭环（3 月回看），22/22 测试通过' },
    ],
    architecture: '六场景独立 Agent 架构 + 四级 LLM 降级策略（Claude → GPT-4o-mini → DeepSeek → 纯规则引擎），LangChain ReAct 驱动，DrissionPage 反检测爬虫，Streamlit + Vite 双面板前端',
    results: [
      { label: '数据覆盖', value: '13400', suffix: 'SKU' },
      { label: '品类广度', value: '6', suffix: '大品类' },
      { label: '时间深度', value: '7', suffix: '周连续快照' },
      { label: '测试通过', value: '22/22', suffix: '' },
    ],
    threeQuestions: {
      what: '选品是"匹配"问题不是"排名"问题——通用的爆款榜单对单个店铺没有可操作意义',
      why: '市面上已有工具都在做"什么好卖"的排名，但真正的问题是"我的店、我的渠道、我的成本结构，适合卖什么"。没有两个店是一样的。Agent 的真正价值是把决策流程自动化——爬数据→匹配自身情况→生成选品建议→追踪决策结果，而不只是做第一步',
      whatIf: '应该先人工用 Excel 跑一遍选品分析流程，验证方法真的能帮店主做决策，再去写爬虫和 Agent 代码。评分模型的权重设计应该更早引入业务方反馈，至少需要 2-3 轮验证才能达到可用水平',
    },
    demoUrl: 'https://huang-doudou567.github.io/snack-selection-agent/',
  },
  {
    slug: 'tax-policy-search',
    title: '财税政策实时搜索引擎',
    subtitle: '全场景 · RAG · 企业服务',
    description: '不靠训练数据编答案，实时查询 NPC 法规库，每条回答追溯到权威原文',
    tags: ['RAG', '搜索引擎', 'Python', 'API 设计'],
    category: '全场景',
    coverImage: 'placeholder',
    role: 'AI 产品经理 · 产品设计与技术选型',
    timeline: '2026.06 – 至今',
    background: '财税人员/企业主/个体工商户在使用通用 AI 回答税收问题时，可能引用已废止法规或混淆适用条款，企业据此决策将面临真实法律与财务风险。税收政策对时效性与准确性的要求，与通用 AI 训练数据的固有滞后性之间存在根本冲突。\n\n这个项目的起点是一段学术经历——用 Python 文本分析方法量化了 A 股上市公司在 2007-2021 年报中感知到的税收政策不确定性，发现了一个有趣的"信心悖论"。论文停在"确实存在这个问题"——产品往前迈了一步："让这个问题有答案"。',
    coreFeatures: [
      { title: '三层数据源', desc: 'NPC API（全国人大法规库，非爬虫实现，比爬虫快 4-10x）+ 官方解读（Bing site:chinatax 定向搜索）+ 行业分析（实务文章聚合）' },
      { title: '4Tab 法规弹窗', desc: '点击任意结果展开四标签页：原文 → 官方解读 → AI 通俗版 → 相关网页，一站式获取完整上下文' },
      { title: '智能引导面板', desc: '4 步向导帮非专业用户定位问题：选主题 → 选场景 → 选企业类型 → 输入关键词' },
      { title: '8 条硬约束', desc: '不替用户做税务决定 | 每条回复附带时间戳 | 注明来源和法规 ID | 附带免责声明 | 失效法规标记 | 不编造案例 | 不替代专业咨询 | 鼓励用户核查原文' },
    ],
    architecture: '三层数据源聚合（NPC API + Bing 官方解读 + 行业分析）+ 向量数据库 + 全文检索双引擎架构，支持政策实时同步与智能问答。8 条硬约束构建信任体系',
    results: [
      { label: '税种覆盖', value: '18', suffix: '大税种' },
      { label: '专题领域', value: '8', suffix: '个' },
      { label: '省市覆盖', value: '36', suffix: '省市' },
      { label: '测试通过', value: '22/22', suffix: '' },
    ],
    threeQuestions: {
      what: 'AI 在专业领域的最大问题不是"不够聪明"，而是"不够诚实"——核心产品决策是定义"AI 什么时候该闭嘴、去查真实数据再开口"',
      why: '用户拿着 AI 给出的政策依据去做税务申报，如果 AI 用的是已废止的法规，用户要承担责任。信息架构就是信任架构——每条搜索结果的来源标识、发布时间戳、时效性状态、法规原文 ID 这四个字段的设计花了最长时间，因为它们是用户信任的基础',
      whatIf: '最大的判断错误是低估了数据源的可达性约束。花了大量时间评估 Vercel vs Cloudflare vs Deno，但根本问题不是选哪个云——而是 NPC 政府 API 物理上只限中国境内访问。这个问题在架构设计第一天就应该被标记为 P0 风险',
    },
    demoUrl: 'https://huang-doudou567.github.io/tax-policy-search/',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex(p => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

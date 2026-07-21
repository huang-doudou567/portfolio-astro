// 项目数据 — 三个 AI 产品项目
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  coverImage: string;
  role: string;
  timeline: string;
  background: string;       // 一、背景：为什么会有这个产品
  problem: string;          // 二、核心问题：用户真正需要什么
  coreFeatures: { title: string; desc: string }[];   // 三、产品功能定义：做什么
  implementation: string;   // 四、实现路径：怎么做到的
  beforeAfter: { dimension: string; before: string; after: string }[];  // 五、前后对比
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
    background: '2025 年底，一个朋友的问题成为产品起点："三个月前我为什么拒了那个 offer？当时觉得特别有道理，现在完全想不起来了。"\n\n这不是个例。人的记忆天然衰减、碎片化、受情绪偏差影响。每次重大决策调用的不是完整信息源，而是最近几天的情绪快照——决策质量必然下降。\n\n市面上有日记 App（需要刻意打开、写长文，大多数用户坚持不了三周），有 AI 聊天（每次对话孤立、不形成系统记忆）。但没有一个产品把"自我认知"当作可工程化的问题来系统性解决。',
    problem: '核心矛盾：人不能只靠记忆做决策，因为记忆不可靠。但现有工具要么摩擦太大（写日记），要么没有长期结构（AI 聊天）。\n\n这不是一个"更好的日记 App"能解决的——这是"重新设计人怎么和 AI 协作进行自我认知"的问题。\n\n• 知识工作者/创业者：做了决定忘了为什么，无法复盘\n• 自我成长型用户：反思靠"感觉"，没有数据支撑\n• 决策焦虑者：无法推演不同选择的后果\n• 低记录意愿用户：想记录但坚持不了三天',
    coreFeatures: [
      { title: '智能记录 —— "说话就行，不用记命令"', desc: '从 Pull 模式转向 Push 模式。用户不需要主动打开 App 写日记，AI 在正常对话中判断哪些内容值得记录，主动询问"要不要记"，用户只需说"嗯"。记录摩擦指数从 10 降到 1。' },
      { title: '情绪三窗格 —— 客观记录，不评判好坏', desc: '每条记录自动分类到三个窗格：🎨 彩色（积极）/ 💡 明亮（中性）/ 🌑 黑暗（沉重）。系统只做两件事：统计三窗格占比；如果黑暗 >50%，温柔提醒"这周好像偏重，想聊聊吗？"——不说"你应该乐观一点"。从"AI 做心理医生"到"AI 做镜子"的哲学切换。' },
      { title: '模式发现 —— "你又开始了"', desc: '当同类事件积累到 3 条以上，系统自动聚类并提示："你跟 XX 相关的事件已有 5 条了，其中 3 次出现类似结果——你想聊聊这个模式吗？"AI 不是在分析你，而是帮你看见你自己留下的数据痕迹。' },
      { title: '决策推演 —— 三条路，各自通向哪里？', desc: '面临重大选择时，同时推演三条路径（参考 Stanford D.school Odyssey Plan）：当前路径（看清现状上限）、转型路径（找到安全出口）、理想路径（不丢失可能性）。AI 不替用户做决定，只帮用户看清"一直在回避的那个决定到底是什么"。' },
      { title: '周复盘 —— "照镜子，不打分"', desc: '递镜模式：AI 只反馈它看到了什么模式、什么变化、什么 AHA moment。不给 to-do、不打分、不变成绩效面谈。行动由用户自己决定。' },
      { title: '9 视图全栈 SPA', desc: '• Chat（DeepSeek SSE 流式对话）\n• Dashboard（评分卡片+情绪分布饼图）\n• Journal（流水账编辑器）\n• Recall Timeline（情绪窗格筛选+搜索）\n• Patterns（盲区/正向模式）\n• Story（叙事层）\n• Decision Sim（三路径推演）\n• Onboarding（5 步引导）\n• User Guide（9 FAQ）\n\nReact 19 + TypeScript 6 + Vite 8 + TailwindCSS 4。' },
    ],
    implementation: '五层架构：记录层（降低摩擦）→ 情绪层（增加维度）→ 检索层（对抗遗忘）→ 洞察层（跨越碎片）→ 推演层（向前看）。每层解决独立的技术问题，通过 Markdown 文件 + Python 函数返回值解耦——任何一层挂了，其他层照常工作。\n\n• 信号打分引擎：40+ 高频信号词 × 权重，双阈值策略（≥8 自动记，4-7 问用户）\n• 多维度加权搜索：标题命中+10、正文匹配+10、关键词+3/词、标签+2 + 时间衰减权重\n• 聚类触发：≥3 条同主题事件且跨度≥7 天 → 自动标记 merge 候选 → Agent 判断是否沉淀到叙事层\n• 多 Agent 协作：1 主 Agent + 5 子 Agent，通过 Markdown 文件做异步消息传递\n• 上下文字编排：场景分层加载 + 8 条 Pipeline 流水线 + 三级降级矩阵\n• 跨平台：Claude Code / Codex / Cursor（CLI 端）+ React SPA（Web 端）',
    beforeAfter: [
      { dimension: '记录摩擦', before: '用户主动打开 App→面对空白页→写长文（摩擦指数 10）', after: '正常聊天，AI 自动判断，用户只需说"嗯"（摩擦指数 1）' },
      { dimension: '认知效率', before: '日记碎片散落，无法形成模式认知', after: 'AI 自动聚类 + 模式发现 + 周期检测，每周照镜子' },
      { dimension: '决策质量', before: '凭最近几天情绪做决定，无法推演后果', after: '三条路径结构化推演，看清不同选择的长期影响' },
      { dimension: '持续使用意愿', before: '传统日记 3 周流失率 >80%', after: '"递镜模式"不给压力 + 模式发现的惊喜感驱动持续使用' },
    ],
    architecture: '五层记忆架构：事件层提取关键信息 → 情绪层分类标注 → 检索层加权排序 → 洞察层模式识别 → 推演层路径规划，每层解耦独立迭代',
    results: [
      { label: '迭代速度', value: '14', suffix: '天 15 版本' },
      { label: '功能视图', value: '9', suffix: '个' },
      { label: '跨平台', value: '4', suffix: '个入口' },
      { label: '从概念到产品', value: '14', suffix: '天' },
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
    background: '一个零食电商朋友描述了他每天的工作流程："早上打开京东看竞品今天什么价。然后看自己店铺哪个品卖不动了、要不要降价清掉。中午刷差评，看看是不是包装出问题了。月底最头疼——要定下个月进什么货，预算就五千块，选错了就压货。"\n\n问他用什么工具做这些决策？回答是："Excel。还有感觉。"\n\n三只松鼠等大品牌有几十人的数据团队做选品分析，但中国有数百万中小电商店主每天做同样的选品/定价/清仓决策。数据分散在京东/淘宝/慢慢买等多个平台，靠人工根本拼不起来。',
    problem: '中小电商店主面临大品牌同等级别的决策复杂度，但只有 Excel 和直觉作为决策工具。信息不对称不是能力问题，是基础设施问题。\n\n• 价格带空白不可见："坚果 50-100 元区间有多少竞品？"——靠眼睛看表格回答不了\n• 竞品对标效率极低：打开 5 个网页复制价格除以克重排序——一个品 10 分钟，十个品两小时\n• 促销 ROI 算不清楚：满减和直降哪个效果好？没有数据\n• 差评根因靠感觉：集中在口味还是包装破损还是保质期？说不清楚',
    coreFeatures: [
      { title: '六大场景独立 Agent', desc: '每个经营场景对应一个独立 Agent，各有专属 System Prompt 和工具组合：\n• 清仓 Agent（库存+进价→三档降价方案）\n• 选品 Agent（品类+价格→TOP 潜力品）\n• 竞品对标 Agent（全维度拆解→差异化方案）\n• 促销 Agent（预算→最优组合）\n• 差评归因 Agent（文本→根因分类）\n• 月进货 Agent（销量+库存→预算约束采购清单）' },
      { title: '单品全维度分析（6 维）', desc: '输入商品链接，输出：\n• 市场定位（低价/主流/高端）\n• 价格竞争力（★ 评分可视化）\n• 机会与风险（空白带识别+竞争拥挤度）\n• 竞品对比表\n• 语料洞察（品类高频关键词分布）\n• 选品推荐（综合性价比评分 TOP N）' },
      { title: '每条建议可追溯到源头（核心差异化）', desc: '每条选品建议附带三层证据链：\n• 数据证据（具体数字和来源文件）\n• 置信度标注（样本量够不够？数据新鲜度如何？）\n• 局限性声明（盲区是什么）\n\n这是和 ChatGPT"凭感觉给建议"最本质的区别。' },
      { title: '5+1 面板数据看板', desc: '• 首页总览（8500）\n• 策略面板——CR3/CR5 集中度热力图+价格带空白点识别（8501）\n• 单品 6 维分析报告（8502）\n• Prompt 在线调优——保存即生效（8503）\n• 决策追踪——三个月自动回看（8504）\n• Web Chat 流式聊天（5173）' },
    ],
    implementation: '数据管道：爬取层（DrissionPage 反检测浏览器→京东评论/详情+慢慢买历史价格）→ 存储层 → 分析层（Pandas 聚类/统计/去重）→ Agent 推理 → 输出层。\n\n核心架构——三层证据链模型：Evidence（记忆最小单元，每条数据可追溯到源文件+行号+爬取时间）→ Advice（强制绑定 evidence，is_grounded 只有 evidence 非空才为 true）→ Report（完整会话记忆，可完全回放）。\n\n• 6 个独立场景 Agent + 两层路由（Python 词袋打分+Agent 语义覆写）\n• LangChain ReAct 循环：Agent 自主决策调用工具、判读返回数据\n• 四级 LLM 降级：Claude Sonnet → GPT-4o-mini → DeepSeek → 纯本地规则路由（无 LLM 也能用）\n• Connector 抽象层：淘宝/拼多多连接器预留接口，未实现时优雅降级不阻塞管线\n• 数据不进入上下文：Python 侧先完成分析，Agent 收到的是提炼后的关键发现而非 13,400 行原始 CSV',
    beforeAfter: [
      { dimension: '竞品分析效率', before: '手工打开 5 个网页，10 分钟/品', after: '输入链接或名称，30 秒出报告' },
      { dimension: '选品决策依据', before: 'Excel + 感觉', after: '13,000+ 条数据 + 置信度标注 + 证据链追溯' },
      { dimension: '清仓定价', before: '拍脑袋降价', after: '三档方案（激进/平衡/保守）+ 毛利损失预估' },
      { dimension: '差评定位', before: '"最近差评多了"——说不清维度', after: '自动分类统计，精确到口味/包装/物流' },
      { dimension: '决策学习', before: '没有复盘机制，同一个坑反复摔', after: '三个月自动回看，追踪预期 vs 实际偏差' },
    ],
    architecture: '六场景独立 Agent 架构 + 四级 LLM 降级策略（Claude → GPT-4o-mini → DeepSeek → 纯规则引擎），LangChain ReAct 驱动，DrissionPage 反检测爬虫，5+1 面板前端',
    results: [
      { label: '数据覆盖', value: '13400', suffix: 'SKU' },
      { label: '品类广度', value: '6', suffix: '大品类' },
      { label: '时间深度', value: '7', suffix: '周连续快照' },
      { label: '测试通过', value: '22/22', suffix: '' },
    ],
    threeQuestions: {
      what: '选品是"匹配"问题不是"排名"问题——通用的爆款榜单对单个店铺没有可操作意义',
      why: '市面上已有工具都在做"什么好卖"的排名，但真正的问题是"我的店、我的渠道、我的成本结构，适合卖什么"。没有两个店是一样的。Agent 的真正价值是把决策流程自动化——爬数据→匹配自身情况→生成选品建议→追踪决策结果',
      whatIf: '应该先人工用 Excel 跑一遍选品分析流程，验证方法真的能帮店主做决策，再去写爬虫和 Agent 代码。评分模型的权重设计应该更早引入业务方反馈',
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
    background: '2025 年底，我问了一个流行的 AI 助手："小微企业增值税有什么优惠？"它给了一长串看起来很有道理的回答。但我多问了一句："这条法规现在还有效吗？"它说："是的，现行有效。"——但我手动去国家税务总局官网查了一下，这条法规已经在两个月前被废止了。\n\n税收政策有两个特点决定通用 AI 不适合解决这个问题：必须绝对准确（企业主基于 AI 回答做税务决策，错误后果是真实的财务和法律风险），以及必须实时（税法随时更新，大模型的训练数据有时效落差）。这不仅是准确性问题，更是信任问题——如果用户发现 AI 给过一次错误答案，就再也不会信任了。',
    problem: 'AI 在专业领域的最大问题不是不够聪明，是不够诚实。它会给一个听起来合理但可能错误的答案。在税收领域，"听起来对"是不够的——必须"就是对的"。\n\n• 直接问通用 AI：训练数据有时效落差，无法判断法规现行/废止\n• 百度搜索：广告 + 已废止法规 + 非官方解读混杂，无法判断权威性\n• 手动翻官网：NPC / chinatax / mof 各自为政，一个查询跨 3 个站\n• 现有法律数据库：面向专业人士，按法条编号检索——企业主不会用',
    coreFeatures: [
      { title: '实时法规检索 —— 默认只查"现行有效"', desc: '18 个税种全覆盖，支持标题/全文/精确/模糊四种搜索模式。默认过滤已废止法规——这是和百度搜索最本质的区别。用户搜到的每一条法规都是当前有效的。' },
      { title: '意图识别 —— 不只是关键词匹配', desc: '五种意图类型各有独立搜索策略：\n• 政策查询（自动纠偏税种）\n• 申报指导（全文搜索+官方解读优先）\n• 合规风险（关联法条+风险点标注）\n• 优惠资格判定（条件匹配检索）\n• 发票处理（流程类+罚则类双重检索）' },
      { title: '4 Tab 法规弹窗 —— 一个法规的四层信息', desc: '点击任意结果展开四标签页，数据来自 5 个不同数据源，用户感知到的只是一个弹窗：\n• 📖 法规原文（全文+高亮+章节分类）\n• 🔍 官方解读（答记者问/立法说明）\n• 🤖 AI 通俗版（适用主体/核心要点/注意事项）\n• 🌐 相关网页（行业分析/第三方视角）' },
      { title: '智能引导面板 —— 解决"不知道查什么"', desc: '4 步向导：\n• 选择身份\n• 选择税种（12 个卡片）\n• 选择意图\n• 补充条件\n\n多数企业主不会说"增值税留抵退税"，他们说"我进项比销项多怎么办"——引导面板把这个翻译成法律术语。' },
      { title: '8 条硬约束 —— 信任体系', desc: '每条回答必须包含：查询时间戳 + 数据来源标注 + 时效性徽章 + NPC 法规 ID + 免责声明。\n\n8 条禁止行为（不替用户做决定、不编造案例、失效法规标记、不替代专业咨询……）是写在最高优先级约束里的硬规则，不是建议。' },
    ],
    implementation: '三层数据源架构：NPC 国家法规库 API（flk.npc.gov.cn，权威度 ⭐⭐⭐⭐⭐）→ chinatax/mof/gov.cn 定向搜索（⭐⭐⭐⭐）→ AnySearch legal domain 补充（⭐⭐⭐）。\n\n多源聚合器：ThreadPoolExecutor 三源并发 → Jaccard 标题去重（阈值 0.7）→ 权威度排序。选择 NPC API 而非爬虫——NPC 有完整 REST API，比浏览器自动化快 4-10 倍，且不会被反爬。\n\n• 核心决策：默认时效筛选仅现行有效（sxx=3），用户 99% 不需要看已废止法律\n• DOCX 解析：Python stdlib（zipfile + ElementTree），零 pip 依赖\n• AI 解读：Claude Code CLI 子进程，结构化输出\n• 缓存策略：默认关闭（可选 5min TTL）——税收政策随时更新\n• SKILL.md 即 Agent 操作手册：292 行包含触发词、5 种意图→搜索策略映射、18 税种×API 参数映射、8 条禁止行为',
    beforeAfter: [
      { dimension: '回答准确性', before: '大模型凭训练数据编答案，可能引用已废止法规', after: '每次实时查询 NPC 法规库，仅返回现行有效法规' },
      { dimension: '信息可追溯', before: '无法验证 AI 回答的来源', after: '每个答案带查询时间戳/来源/时效徽章/法规 ID' },
      { dimension: '跨站搜索效率', before: '人工在 NPC/税总/财政/国办 4 站逐站点查找', after: '三源并发聚合，Jaccard 去重，权威度排序' },
      { dimension: '税法可理解性', before: '原文晦涩，非专业人士看不懂', after: '4 Tab 弹窗：原文→官方解读→AI 通俗化→第三方视角' },
      { dimension: '冷启动门槛', before: '企业主不知道自己的问题对应哪个法律术语', after: '4 步智能引导面板，从身份→税种→意图→条件' },
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

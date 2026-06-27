const defaultPlan = [
  // ============================================================
  // Plan 1 — 考研备战 (Current Top Priority)
  // ============================================================
  {
    id: "plan-grad-exam",
    title: "Graduate Entrance Exam — AI & Intelligent Systems Track",
    description: "Preparing for the Dec 2026 national graduate entrance exam. Target program: AI & Intelligent Systems at a top-tier university. Subjects: Math I (Advanced Calculus + Linear Algebra + Probability), English I, Politics, and AI/ML specialized course.",
    deadline: "2026-12-19",
    color: "#E07A5F",
    createdAt: "2026-06-01",
    steps: [
      // --- Step 1: Math I ---
      {
        id: "step-math",
        title: "Math I — Advanced Calculus, Linear Algebra & Probability",
        completed: false,
        dailyTasks: [
          { id: "t-math-01", date: "2026-06-27", title: "Advanced Calculus: Limits & Continuity — review theory + 20 practice problems", done: false },
          { id: "t-math-02", date: "2026-06-28", title: "Advanced Calculus: Derivatives & Applications — monotonicity, extrema, curve sketching (25 problems)", done: false },
          { id: "t-math-03", date: "2026-06-29", title: "Advanced Calculus: Indefinite Integrals — substitution, integration by parts, partial fractions", done: false },
          { id: "t-math-04", date: "2026-06-30", title: "Advanced Calculus: Definite Integrals & Improper Integrals — applications in area & volume", done: false },
          { id: "t-math-05", date: "2026-07-01", title: "Advanced Calculus: Multivariable Differential Calculus — partial derivatives, directional derivatives, extremum", done: false },
          { id: "t-math-06", date: "2026-07-02", title: "Advanced Calculus: Double & Triple Integrals — coordinate transformations, applications", done: false },
          { id: "t-math-07", date: "2026-07-03", title: "Advanced Calculus: Line & Surface Integrals — Green's theorem, Stokes' theorem, divergence theorem", done: false },
          { id: "t-math-08", date: "2026-07-04", title: "Advanced Calculus: Infinite Series — convergence tests, power series, Fourier series intro", done: false },
          { id: "t-math-09", date: "2026-07-05", title: "Advanced Calculus: Differential Equations — first-order ODE, higher-order linear ODE with constant coefficients", done: false },
          { id: "t-math-10", date: "2026-07-06", title: "Linear Algebra: Matrices & Determinants — matrix operations, rank, inverse, Cramer's rule", done: false },
          { id: "t-math-11", date: "2026-07-07", title: "Linear Algebra: Vector Spaces — linear dependence, basis, dimension, Schmidt orthogonalization", done: false },
          { id: "t-math-12", date: "2026-07-08", title: "Linear Algebra: Linear Transformations — matrix representation, eigenvalues & eigenvectors, diagonalization", done: false },
          { id: "t-math-13", date: "2026-07-09", title: "Linear Algebra: Quadratic Forms — canonical form, positive definiteness, applications", done: false },
          { id: "t-math-14", date: "2026-07-10", title: "Probability: Random Events & Probability Models — Bayes' theorem, independence", done: false },
          { id: "t-math-15", date: "2026-07-11", title: "Probability: Random Variables — discrete & continuous distributions, expectation, variance, covariance", done: false },
          { id: "t-math-16", date: "2026-07-12", title: "Probability: Law of Large Numbers & Central Limit Theorem — Chebyshev, Lindeberg-Levy", done: false },
          { id: "t-math-17", date: "2026-07-13", title: "Statistics: Sampling Distributions — chi-square, t-distribution, F-distribution, parameter estimation", done: false },
          { id: "t-math-18", date: "2026-07-14", title: "Statistics: Hypothesis Testing — z-test, t-test, chi-square test, Type I & II errors", done: false },
          { id: "t-math-19", date: "2026-07-15", title: "Math I Week-in-Review: timed 3-hour mock on all three modules (Calc + LA + Prob)", done: false },
        ],
      },
      // --- Step 2: English I ---
      {
        id: "step-english",
        title: "English I — Vocabulary, Reading Comprehension & Writing",
        completed: false,
        dailyTasks: [
          { id: "t-eng-01", date: "2026-06-27", title: "Vocabulary: review 100 high-frequency exam words (flashcards + spaced repetition)", done: false },
          { id: "t-eng-02", date: "2026-06-28", title: "Reading: 2 passages from past exams — identify question types (main idea, inference, detail)", done: false },
          { id: "t-eng-03", date: "2026-06-29", title: "Vocabulary: next 100 high-frequency words + review previous 100", done: false },
          { id: "t-eng-04", date: "2026-06-30", title: "Cloze Test: complete 2 past-exam cloze passages, analyze common collocations", done: false },
          { id: "t-eng-05", date: "2026-07-01", title: "Vocabulary: next 100 words + review previous 200", done: false },
          { id: "t-eng-06", date: "2026-07-02", title: "Translation (Chinese→English): 2 paragraphs from past papers, focus on sentence restructuring", done: false },
          { id: "t-eng-07", date: "2026-07-03", title: "Reading: 3 passages — practice skimming & scanning techniques, time limit 40 min", done: false },
          { id: "t-eng-08", date: "2026-07-04", title: "Vocabulary: review all 300 words — mark weak ones for daily re-review", done: false },
          { id: "t-eng-09", date: "2026-07-05", title: "Writing Task A (Practical): draft a letter/notice — template memorization + 2 practice writes", done: false },
          { id: "t-eng-10", date: "2026-07-06", title: "Writing Task B (Essay): structure practice — thesis statement, topic sentences, supporting evidence", done: false },
          { id: "t-eng-11", date: "2026-07-08", title: "Reading: 4 passages full set — simulate exam conditions, 60 min limit", done: false },
          { id: "t-eng-12", date: "2026-07-10", title: "Full English Section Mock: Cloze + Reading + Translation — timed 120 min", done: false },
          { id: "t-eng-13", date: "2026-07-12", title: "Vocabulary: batch 2 — 100 new words (medium difficulty) + review all weak words", done: false },
          { id: "t-eng-14", date: "2026-07-14", title: "Writing: full essay practice (both tasks) — self-grade against rubric, identify gaps", done: false },
        ],
      },
      // --- Step 3: Politics ---
      {
        id: "step-politics",
        title: "Politics — Marxist Theory, Mao Thought & Current Affairs",
        completed: false,
        dailyTasks: [
          { id: "t-pol-01", date: "2026-07-01", title: "Marxist Philosophy: Materialism & Dialectics — read textbook Ch.1, take structured notes", done: false },
          { id: "t-pol-02", date: "2026-07-03", title: "Marxist Philosophy: Epistemology — practice & truth, finish textbook Ch.2 + 15 MCQs", done: false },
          { id: "t-pol-03", date: "2026-07-05", title: "Marxist Philosophy: Historical Materialism — social existence & consciousness, Ch.3 + 15 MCQs", done: false },
          { id: "t-pol-04", date: "2026-07-08", title: "Political Economics: Commodity Economy & Value Theory — labor theory of value, surplus value, Ch.4-5", done: false },
          { id: "t-pol-05", date: "2026-07-10", title: "Scientific Socialism: development & principles — Ch.6-7 + 20 MCQs on Modules 1-4", done: false },
          { id: "t-pol-06", date: "2026-07-13", title: "Mao Thought & Theoretical System of Socialism with Chinese Characteristics — overview timeline", done: false },
          { id: "t-pol-07", date: "2026-07-16", title: "Xi Jinping Thought on Socialism — New Era, principal contradiction, core contents, Ch.8-10", done: false },
          { id: "t-pol-08", date: "2026-07-20", title: "Morality & Rule of Law — civic virtue, legal system basics, Ch.11-12 + 20 MCQs on Modules 5-8", done: false },
          { id: "t-pol-09", date: "2026-08-01", title: "Current Affairs: Jan–Jul 2026 major domestic & international events digest", done: false },
          { id: "t-pol-10", date: "2026-09-01", title: "Current Affairs: Aug 2026 digest + full Politics MCQ mock test (50 questions, 60 min)", done: false },
        ],
      },
      // --- Step 4: Specialized Course (AI/ML) ---
      {
        id: "step-ai-course",
        title: "Specialized Course — Data Structures, ML Foundations & AI Basics",
        completed: false,
        dailyTasks: [
          { id: "t-ai-01", date: "2026-06-28", title: "Data Structures: Arrays, Linked Lists — implementation in Python, time/space complexity analysis", done: false },
          { id: "t-ai-02", date: "2026-06-30", title: "Data Structures: Stacks & Queues — applications (expression evaluation, BFS queue), 10 practice problems", done: false },
          { id: "t-ai-03", date: "2026-07-02", title: "Data Structures: Trees — binary trees, BST, AVL rotation cases, tree traversals (pre/in/post/level)", done: false },
          { id: "t-ai-04", date: "2026-07-04", title: "Data Structures: Heaps & Priority Queues — heapify, heap sort, Top-K problem patterns", done: false },
          { id: "t-ai-05", date: "2026-07-06", title: "Data Structures: Graphs — adjacency list/matrix, DFS, BFS, topological sort, shortest path (Dijkstra)", done: false },
          { id: "t-ai-06", date: "2026-07-08", title: "Data Structures: Hash Tables — collision resolution (chaining & open addressing), consistent hashing intro", done: false },
          { id: "t-ai-07", date: "2026-07-10", title: "Data Structures: Sorting Algorithms — quicksort, mergesort, counting sort, stability & complexity comparison", done: false },
          { id: "t-ai-08", date: "2026-07-12", title: "Data Structures: Dynamic Programming Patterns — knapsack, LCS, edit distance, matrix chain multiplication", done: false },
          { id: "t-ai-09", date: "2026-07-15", title: "ML Basics: Supervised vs Unsupervised Learning — key concepts, bias-variance tradeoff, cross-validation", done: false },
          { id: "t-ai-10", date: "2026-07-18", title: "ML Basics: Linear Models — linear regression, logistic regression, gradient descent derivation + numpy implementation", done: false },
          { id: "t-ai-11", date: "2026-07-21", title: "ML Basics: Decision Trees & Ensemble Methods — ID3/C4.5, random forest, GBDT, XGBoost theory", done: false },
          { id: "t-ai-12", date: "2026-07-24", title: "ML Basics: SVM & Kernel Methods — max-margin, dual problem, kernel trick, soft-margin SVM", done: false },
          { id: "t-ai-13", date: "2026-07-27", title: "ML Basics: Neural Networks — perceptron, backpropagation derivation, activation functions, regularization", done: false },
          { id: "t-ai-14", date: "2026-07-30", title: "AI Basics: Search Algorithms — BFS, DFS, A* search, minimax, alpha-beta pruning, constraint satisfaction", done: false },
          { id: "t-ai-15", date: "2026-08-02", title: "AI Basics: Knowledge Representation — propositional logic, first-order logic, resolution, ontologies overview", done: false },
          { id: "t-ai-16", date: "2026-08-05", title: "Specialized Course Mock: past 3 years of NJU AI exam papers — timed 3-hour simulation", done: false },
        ],
      },
    ],
  },

  // ============================================================
  // Plan 2 — AI/ML Research Direction (Post-Exam Deep Dive)
  // ============================================================
  {
    id: "plan-ai-ml",
    title: "AI/ML Research Path — LLMs, Computer Vision & Embodied Intelligence",
    description: "Long-term research career direction after the entrance exam. Deep dive into large language models (transformer architectures, RLHF, agent systems), computer vision (detection, segmentation, diffusion models), and embodied intelligence (robot learning, sim-to-real transfer). Target: build a competitive research portfolio before graduate school starts.",
    deadline: "2027-09-01",
    color: "#7EA8BE",
    createdAt: "2026-06-15",
    steps: [
      {
        id: "step-llm",
        title: "Large Language Models — From Transformer to Agent",
        completed: false,
        dailyTasks: [
          { id: "t-llm-01", date: "2027-01-05", title: "Read 'Attention Is All You Need' — implement scaled dot-product attention from scratch in PyTorch", done: false },
          { id: "t-llm-02", date: "2027-01-12", title: "Study GPT architecture — causal masking, positional encoding, layer norm placement. Read GPT-2 paper", done: false },
          { id: "t-llm-03", date: "2027-01-19", title: "Study BERT & pre-training objectives — MLM, NSP. Compare encoder-only vs decoder-only vs encoder-decoder architectures", done: false },
          { id: "t-llm-04", date: "2027-02-01", title: "Fine-tuning paradigms: full fine-tuning vs LoRA/QLoRA vs prompt tuning — implement LoRA on GPT-2", done: false },
          { id: "t-llm-05", date: "2027-02-15", title: "RLHF deep dive: reward modeling, PPO for language, DPO alternative. Read InstructGPT & Anthropic's RLHF paper", done: false },
          { id: "t-llm-06", date: "2027-03-01", title: "LLM Agent systems: ReAct, tool use, RAG pipelines — build a simple document QA agent with LangChain/LlamaIndex", done: false },
          { id: "t-llm-07", date: "2027-03-15", title: "Open-source LLM ecosystem: Llama, Mistral, Qwen — understand model cards, quantization (GPTQ/AWQ), inference optimization", done: false },
          { id: "t-llm-08", date: "2027-04-01", title: "Mini-project: fine-tune a 7B model on domain-specific data (academic papers) with QLoRA, evaluate with MT-Bench", done: false },
        ],
      },
      {
        id: "step-cv",
        title: "Computer Vision — Detection, Segmentation & Generative Models",
        completed: false,
        dailyTasks: [
          { id: "t-cv-01", date: "2027-01-10", title: "CNN refresher: ResNet, DenseNet, EfficientNet — implement ResNet-50 from scratch in PyTorch", done: false },
          { id: "t-cv-02", date: "2027-01-20", title: "Object Detection: R-CNN family (Fast/Faster/Mask) vs YOLO vs DETR — understand architecture evolution", done: false },
          { id: "t-cv-03", date: "2027-02-05", title: "Semantic Segmentation: FCN, U-Net, DeepLab — implement U-Net on a medical imaging dataset", done: false },
          { id: "t-cv-04", date: "2027-02-20", title: "ViT & Self-Supervised Learning: DINO, MAE, CLIP — how vision transformers changed the field", done: false },
          { id: "t-cv-05", date: "2027-03-10", title: "Diffusion Models: DDPM, Stable Diffusion architecture — understand forward/reverse process, noise schedule", done: false },
          { id: "t-cv-06", date: "2027-03-25", title: "Multi-modal models: CLIP, BLIP, LLaVA — vision-language pretraining. Read CLIP paper in detail", done: false },
          { id: "t-cv-07", date: "2027-04-15", title: "Mini-project: build a domain-specific object detector (e.g., PCB defect detection) with YOLOv8 + custom dataset", done: false },
        ],
      },
      {
        id: "step-embodied",
        title: "Embodied Intelligence — Robot Learning & Sim-to-Real",
        completed: false,
        dailyTasks: [
          { id: "t-ei-01", date: "2027-05-01", title: "Survey: read 3 major embodied AI survey papers — identify key open problems and research labs", done: false },
          { id: "t-ei-02", date: "2027-05-10", title: "Imitation Learning: Behavioral Cloning, DAgger, Inverse RL — implement BC on a Gym environment", done: false },
          { id: "t-ei-03", date: "2027-05-20", title: "Reinforcement Learning for Robotics: PPO, SAC, TD3 — hands-on with Isaac Gym / MuJoCo simulation", done: false },
          { id: "t-ei-04", date: "2027-06-01", title: "Sim-to-Real Transfer: domain randomization, system identification. Read OpenAI's Rubik's Cube paper", done: false },
          { id: "t-ei-05", date: "2027-06-15", title: "Vision-Language-Action models: RT-1, RT-2, Octo — understand VLA architecture and training pipelines", done: false },
          { id: "t-ei-06", date: "2027-07-01", title: "Mini-project: train a grasping policy in simulation with domain randomization, evaluate sim-to-real gap", done: false },
        ],
      },
    ],
  },

  // ============================================================
  // Plan 3 — Side Interests & Exploration (Long-term, Self-paced)
  // ============================================================
  {
    id: "plan-interests",
    title: "Side Quests — NetSec, Game Hacking & Personal Quant Finance",
    description: "Exploratory projects in areas of personal interest: cybersecurity/penetration testing (web security, binary exploitation), game cheating/anti-cheat systems (memory manipulation, reverse engineering), and small-scale personal quantitative finance (algorithmic trading bots, backtesting frameworks). These are curiosity-driven, self-paced explorations running in parallel with the main academic track.",
    deadline: "2028-06-01",
    color: "#F2CC8F",
    createdAt: "2026-06-20",
    steps: [
      {
        id: "step-netsec",
        title: "Cybersecurity & Penetration Testing",
        completed: false,
        dailyTasks: [
          { id: "t-ns-01", date: "2026-08-01", title: "Web Security: OWASP Top 10 overview — SQL injection, XSS, CSRF, SSRF fundamentals + DVWA lab setup", done: false },
          { id: "t-ns-02", date: "2026-08-15", title: "Network Security: Nmap, Wireshark, Burp Suite basics — scan a local VM, capture & analyze HTTP/HTTPS traffic", done: false },
          { id: "t-ns-03", date: "2026-09-01", title: "Binary Exploitation intro: stack buffer overflow, format string, ret2libc — basic pwn challenges on pwnable.tw", done: false },
          { id: "t-ns-04", date: "2026-10-01", title: "CTF practice: solve 3 web challenges on HackTheBox / TryHackMe, write up the methodology", done: false },
          { id: "t-ns-05", date: "2026-11-01", title: "Reverse Engineering basics: Ghidra/IDA Free — analyze a simple crackme, patch the binary", done: false },
          { id: "t-ns-06", date: "2027-02-01", title: "Advanced: study real-world CVE exploit chains — pick one recent CVE and reproduce the PoC in a sandbox", done: false },
        ],
      },
      {
        id: "step-game-hacking",
        title: "Game Hacking & Anti-Cheat Systems",
        completed: false,
        dailyTasks: [
          { id: "t-gh-01", date: "2026-09-15", title: "Memory manipulation basics: Cheat Engine tutorial — find & modify simple values in an offline game", done: false },
          { id: "t-gh-02", date: "2026-10-15", title: "x86/x64 assembly refresher — registers, calling conventions, stack frames. Write a simple DLL injector", done: false },
          { id: "t-gh-03", date: "2026-11-15", title: "Game hacking patterns: ESP/wallhack, aimbot math (view angles, world-to-screen). Code a basic external ESP in C++", done: false },
          { id: "t-gh-04", date: "2027-01-15", title: "Anti-cheat analysis: study how EAC/BattlEye/Vanguard work — kernel drivers, obfuscation, integrity checks", done: false },
          { id: "t-gh-05", date: "2027-03-01", title: "Kernel programming intro: write a simple Windows kernel driver, understand IRQL, IOCTL communication", done: false },
          { id: "t-gh-06", date: "2027-06-01", title: "Capstone: build a fully undetected external cheat for an open-source FPS game — focus on stealth, not features", done: false },
        ],
      },
      {
        id: "step-quant",
        title: "Personal Quantitative Finance — Small-Scale Algo Trading",
        completed: false,
        dailyTasks: [
          { id: "t-qf-01", date: "2026-08-15", title: "Market microstructure basics: order books, bid-ask spread, market vs limit orders. Read a primer on crypto exchange APIs", done: false },
          { id: "t-qf-02", date: "2026-09-01", title: "Data pipeline: set up WebSocket feeds from Binance/OKX — stream real-time tick data, store in local SQLite/Parquet", done: false },
          { id: "t-qf-03", date: "2026-09-15", title: "Backtesting framework: build a simple event-driven backtester in Python — support OHLCV data, basic order simulation, PnL curve", done: false },
          { id: "t-qf-04", date: "2026-10-01", title: "Alpha research: implement & backtest 3 classic strategies — moving average crossover, mean reversion (Bollinger), momentum (RSI)", done: false },
          { id: "t-qf-05", date: "2026-11-01", title: "Risk management: position sizing (Kelly criterion, risk parity), stop-loss logic, max drawdown constraints — integrate into backtester", done: false },
          { id: "t-qf-06", date: "2027-01-01", title: "Paper trading: deploy strategies in paper trading mode with live data — monitor Sharpe, max drawdown, win rate over 30 days", done: false },
          { id: "t-qf-07", date: "2027-03-01", title: "ML for trading: feature engineering from order book data, train an LSTM/Transformer price predictor, compare with baseline", done: false },
          { id: "t-qf-08", date: "2027-05-01", title: "Live deployment (micro-scale): run strategy on $100 notional — focus on infrastructure robustness, not PnL", done: false },
        ],
      },
    ],
  },
];

// ============================================================
// Bump this version number each time you update the plan.
// Visitors will automatically receive the new plan while their
// task completion status (done/not done) is preserved by ID.
// ============================================================
export const PLAN_VERSION = 2;

export default defaultPlan;

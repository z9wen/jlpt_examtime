# JLPT 考试计时器 🕐

> 专业的日本语能力测试（JLPT）考试计时器 - 支持 N1/N2/N3/N4/N5 全级别

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

## ✨ 功能特点

- 🎯 **全级别支持** - N1、N2、N3、N4、N5 全级别真实模拟
- ⏱️ **精确计时** - 分钟级精确倒计时，自动阶段切换
- 📊 **进度可视化** - 实时显示总进度和当前阶段进度
- 🔔 **智能提醒** - 阶段切换时自动音频提醒
- 📱 **响应式设计** - 支持手机、平板、电脑多端使用
- 🌙 **深色模式** - 保护眼睛，适应不同使用场景
- ⏯️ **灵活控制** - 支持暂停、继续、跳过、重置等操作

## 🎯 适用人群

- 📚 正在备考 JLPT 的学习者
- 🎓 需要熟悉考试流程的考生
- ⏰ 想要练习时间管理的备考者
- 👨‍🏫 日语教师进行模拟考试

## 🚀 快速开始

### 在线使用

访问：[https://jlpt-examtime.vercel.app/](https://jlpt-examtime.vercel.app/)

### 本地运行

```bash
# 克隆项目
git clone https://github.com/z9wen/jlpt_examtime.git

# 进入目录
cd jlpt_examtime

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📖 使用说明

1. **选择级别** - 在首页选择你要模拟的 JLPT 级别（N1-N5）
2. **开始考试** - 点击"开始考试"按钮开始计时
3. **查看进度** - 上方显示总进度，中间显示当前阶段倒计时
4. **阶段切换** - 每个阶段结束会自动进入下一阶段，并播放提示音
5. **控制选项** - 可以暂停、继续、跳过当前阶段或重置

## 🎓 考试时长说明

### N1 级别（总计 175 分钟）
- 语言知识（文字·词汇·语法）、阅读：110 分钟
- 休息：10 分钟
- 听力：60 分钟

### N2 级别（总计 165 分钟）
- 语言知识（文字·词汇·语法）、阅读：105 分钟
- 休息：10 分钟
- 听力：50 分钟

### N3 级别（总计 140 分钟）
- 语言知识（文字·词汇）：30 分钟
- 休息：10 分钟
- 语言知识（语法）、阅读：70 分钟
- 休息：10 分钟
- 听力：40 分钟

### N4 级别（总计 130 分钟）
- 语言知识（文字·词汇）：25 分钟
- 休息：10 分钟
- 语言知识（语法）、阅读：55 分钟
- 休息：10 分钟
- 听力：35 分钟

### N5 级别（总计 105 分钟）
- 语言知识（文字·词汇）：20 分钟
- 休息：10 分钟
- 语言知识（语法）、阅读：40 分钟
- 休息：10 分钟
- 听力：30 分钟

## 🛠️ 技术栈

- **框架**：React 19.2 + TypeScript
- **构建工具**：Vite 7.2
- **样式**：Tailwind CSS 4.1
- **UI 组件**：Radix UI
- **图标**：Lucide React

## 📝 开发

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 代码检查
npm run lint
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关链接

- [JLPT 官方网站](https://www.jlpt.jp/)
- [日本语能力测试官网（中国）](https://jlpt.neea.edu.cn/)

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐️

---

Made with ❤️ for JLPT learners

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

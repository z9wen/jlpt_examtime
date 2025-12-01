# JLPT 考试计时器 ⏱️

> 专业的日本语能力测试（JLPT）考试计时器 - 真实还原考试流程，支持 N1-N5 全级别

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

[English](./README.md) | [日本語](./README.md) | [中文](./README.md)

## ✨ 功能特点

- 🎯 **全级别支持** - N1、N2、N3、N4、N5 全级别真实时间配置
- ⏱️ **精确计时** - 秒级精确倒计时，自动阶段切换
- 📊 **进度可视化** - 实时显示总体进度和当前阶段进度
- 🔔 **音频提醒** - 阶段切换时自动播放提示音
- 🌍 **多语言支持** - 中文、日语、英语三语切换
- 📱 **响应式设计** - 完美适配手机、平板、电脑
- 🌙 **深色模式** - 自适应系统主题
- 💾 **记忆功能** - 自动记住上次选择的级别
- ⏯️ **灵活控制** - 支持暂停、继续、跳过、重置

## 🎯 适用场景

- 📚 JLPT 备考练习，熟悉考试节奏
- ⏰ 模拟真实考试环境，掌握时间分配
- 🎓 考前最后冲刺，适应考试压力
- 👨‍🏫 日语教师组织模拟考试

## 🚀 在线使用

🔗 访问：**[https://jlpt.zew9.com](https://jlpt.zew9.com)**

## 📋 考试时长说明

### N1 级别（总计 170 分钟）
- 语言知识（文字·词汇·语法）、阅读：110 分钟
- 休息：10 分钟
- 听力：60 分钟

### N2 级别（总计 155 分钟）
- 语言知识（文字·词汇·语法）、阅读：105 分钟
- 休息：10 分钟
- 听力：50 分钟

### N3 级别（总计 140 分钟）
- 语言知识（文字·词汇）：30 分钟
- 休息：10 分钟
- 语言知识（语法）、阅读：70 分钟
- 休息：10 分钟
- 听力：40 分钟

### N4 级别（总计 120 分钟）
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

## 💡 重要提示

- ⚠️ **听力部分必须边听边涂答题卡，录音结束立即收卡！**
- 📝 N1/N2：文字词汇语法阅读合并考试，休息 1 次
- 📝 N3/N4/N5：文字词汇单独考，语法阅读合并，休息 2 次
- ✅ 每个科目答完立即涂答题卡
- 🚶 休息时间可以离开座位、上洗手间

## 🛠️ 技术栈

- **前端框架**: React 19.2
- **开发语言**: TypeScript 5.9
- **构建工具**: Vite 7.2
- **样式方案**: Tailwind CSS 4.1
- **UI 组件**: Radix UI (Progress, Slot)
- **图标库**: Lucide React
- **工具库**: clsx, tailwind-merge, class-variance-authority
- **状态管理**: React Hooks + Context API
- **音频处理**: Web Audio API
- **本地存储**: LocalStorage API

## 🚀 本地开发

```bash
# 克隆项目
git clone https://github.com/z9wen/jlpt_examtime.git

# 进入目录
cd jlpt_examtime

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 📱 使用说明

1. **选择级别** - 点击对应的级别按钮（N1-N5）
2. **开始计时** - 点击"开始考试"按钮
3. **查看进度** - 顶部显示总体进度，中间显示当前阶段
4. **控制选项**:
   - ⏸️ 暂停/继续
   - ⏭️ 跳过当前阶段
   - 🔄 重置计时器
5. **语言切换** - 右上角切换中文/日语/英语

## 🌟 特色功能

### 智能记忆
自动保存你的级别选择，下次打开直接使用上次的配置

### 音频提醒
- 考试开始提示音
- 阶段切换提示音
- 考试结束提示音

### 进度追踪
- 总体进度条显示整场考试进度
- 各阶段独立进度显示
- 实时倒计时更新

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🔗 相关链接

- 🌐 在线体验：[https://jlpt.zew9.com](https://jlpt.zew9.com)
- 📝 博客：[https://www.zew9.com](https://www.zew9.com)
- 💻 GitHub：[https://github.com/z9wen/jlpt_examtime](https://github.com/z9wen/jlpt_examtime)
- 🏛️ JLPT 官方：[https://www.jlpt.jp/](https://www.jlpt.jp/)
- 🇨🇳 JLPT 中国：[https://jlpt.neea.edu.cn/](https://jlpt.neea.edu.cn/)

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐️

---

Made with ❤️ for JLPT learners by [z9wen](https://github.com/z9wen)
```

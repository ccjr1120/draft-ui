# Draft UI Monorepo

这是一个使用 pnpm 管理的 monorepo 项目。

## 项目结构

```
draft-ui/
├── apps/           # 应用程序
├── packages/       # 共享库和组件
├── tools/          # 工具和配置
├── package.json    # 根包配置
├── pnpm-workspace.yaml  # pnpm 工作空间配置
└── .npmrc         # npm 配置
```

## 开发环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 安装依赖

```bash
pnpm install
```

## 常用命令

```bash
# 安装依赖
pnpm install

# 开发模式运行所有包
pnpm dev

# 构建所有包
pnpm build

# 运行所有测试
pnpm test

# 代码检查
pnpm lint

# 类型检查
pnpm typecheck

# 代码格式化
pnpm format

# 清理构建产物和依赖
pnpm clean
```

## 版本管理

本项目使用 [Changesets](https://github.com/changesets/changesets) 进行版本管理：

```bash
# 添加变更日志
pnpm changeset

# 应用版本变更
pnpm version-packages

# 发布包
pnpm release
```

## 添加新包

1. 在相应目录下创建新包：
   - `apps/` - 应用程序
   - `packages/` - 共享库
   - `tools/` - 工具和配置

2. 每个包都需要有自己的 `package.json` 文件

3. 使用 `pnpm add` 安装依赖到特定包：
   ```bash
   pnpm add <dependency> --filter <package-name>
   ``` 
import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Draft UI",
  description:
    "Draft UI is a modern, flexible, and accessible design system built with Tailwind CSS.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "设计", link: "/design/start/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    // 使用 vitepress-sidebar 自动生成侧边栏
    sidebar: generateSidebar([
      {
        documentRootPath: ".",
        scanStartPath: "design",
        basePath: "/design/",
        resolvePath: "/design/",
        useTitleFromFileHeading: true,
        useTitleFromFrontmatter: true,
        frontmatterTitleFieldName: "title",
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        hyphenToSpace: true,
        underscoreToSpace: true,
        capitalizeFirst: true,
        capitalizeEachWords: false,
        collapsed: false,
        collapseDepth: 2,
        sortMenusByName: false,
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 999,
        manualSortFileNameByPriority: ["index", "README"],
        removePrefixAfterOrdering: true,
        prefixSeparator: ".",
        excludePattern: ["index.md", "assets/**", "public/**"],
        includeDotFiles: false,
        includeRootIndexFile: false,
        debugPrint: false,
      }
    ]),

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

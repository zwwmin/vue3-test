import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import styleImport from 'vite-plugin-style-import'; // vant 按需引入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 8089, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  },
  build: {
    // 指定输出路径，默认'dist'
    outDir: 'dist',
    // 指定生成静态资源的存放路径(相对于build.outDir)
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
    assetsInlineLimit: '4096',
    // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
    cssCodeSplit: true,
    // 构建后是否生成source map文件，默认false
    sourcemap: false,
    // 为true时，会生成manifest.json文件，用于后端集成
    manifest: false
  }
})

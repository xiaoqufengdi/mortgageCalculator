// 文件自定义创建
// 作用
// 页面切换之间保持布局的持久化
// 切换页面时保持状态（state）
// 使用 componentDidCatch 自定义错误处理
// 向页面（pages）注入额外的数据
// 添加全局 CSS

// 从 node_modules 目录导入（import）样式
// import 'antd/dist/antd.css'
// import 'bootstrap/dist/css/bootstrap.css'
// 添加全局样式
import './styles.css';
import dynamic from 'next/dynamic';
import Layout from "@/components/layout";
import NestedLayout from "@/components/nested-layout";

// const Layout = dynamic(import("@/components/layout"), {ssr: false});

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// };

export default function MyApp({ Component, pageProps }) {
  console.log('MyApp', Component, pageProps);
  // 有自定义走自定义布局，没有走统一布局   Component.getLayout ||
  const getLayout = ((page) => {
    return (
      <Layout>
        <NestedLayout>
          {page}
        </NestedLayout>
      </Layout>
    )
  })

  return getLayout(<Component {...pageProps} />)
}



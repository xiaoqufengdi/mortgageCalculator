import Image from 'next/image'
import Head from 'next/head';
import Layout from '../../components/layout';
import NestedLayout from '../../components/nested-layout';

// TODO: 需要获取 `posts`（通过调用 API ）
// 在此页面被预渲染之前
function Index({ posts }) {
  console.log('Index', posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  )
}
// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  const posts = await new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const data = [
        {
          id: '1',
          title: 'Ant Design Title 1',
        },
        {
          id: '2',
          title: 'Ant Design Title 2',
        },
        {
          id: '3',
          title: 'Ant Design Title 3',
        }
      ];
      resolve(data);
    }, 1000);
  })

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: { // will be passed to the page component as props
      posts,
    },
  }
}

// Index.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <NestedLayout>
//         {page}
//       </NestedLayout>
//     </Layout>
//   )
// }
console.log('Index', Index);
export default Index;
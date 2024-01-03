// import Navbar from './navbar'
// import Footer from './footer'
import { Layout, Row, Col } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
const { Header, Content, Footer  } = Layout;
console.log('layout', Layout);

export default function MyLayout({ children }) {
  return (
    <Layout className='page-layout'>
      <Header>
        <Row>
          <Col span={24}>
            <HomeOutlined />
             房贷计算器
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
/*

export default function MyLayout({ children }) {
  return (
    <>
      <nav> header </nav>
      <main>
        {children}
      </main>
      <footer> footer </footer>
    </>
  )
}
*/

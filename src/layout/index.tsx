import { useState } from 'react'
import { Layout, Menu, type MenuProps } from 'antd'
import { type NonIndexRouteObject, Outlet } from 'react-router-dom'
import { routes } from '../router'

const { Header, Sider, Content } = Layout

type RouteType = NonIndexRouteObject & {
  title: string
  icon: React.ReactElement
}

const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const getItem: any = (children: RouteType[]) => {
    return children.map((item) => ({
      key: item.index
        ? '/'
        : item.path?.startsWith('/')
        ? item.path
        : `/${item.path}`,
      icon: item.icon,
      label: item.title,
      children: item.children ? getItem(item.children) : null,
    }))
  }

  const MenuItem: MenuProps['items'] = getItem(routes[0].children)

  return (
    <Layout className="h-screen overflow-auto">
      <Sider
        className="h-screen select-none"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => {
          setCollapsed(value)
        }}
      >
        <div className="h-[64px]"></div>
        <div className="mt-1">
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={MenuItem}
          />
        </div>
      </Sider>
      <Layout>
        <Header className="p-0 select-none"></Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout

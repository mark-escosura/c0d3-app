import React from 'react'
import AppNav from './AppNav'
import Footer from './Footer'
import Head from 'next/head'
import type { LayoutGetter } from '../@types/page'
const Layout: React.FC<{ title?: string }> = ({ children, title }) => (
  <>
    <Head>
      <title key="title">{title ? `${title} — C0D3` : 'C0D3'}</title>
    </Head>
    <AppNav />
    <div className="container-md">{children}</div>
    <Footer />
  </>
)

export const getLayout: LayoutGetter = page => <Layout>{page}</Layout>
export default Layout

import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Home = () => {
  const state = useSelector(state => state)
  return (
    <Layout title="书城" subTitle="挑选商品">
      Home
    </Layout>
  )
}

export default Home

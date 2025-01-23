import React from 'react'
import Helmet from 'react-helmet'
import Banner from '../../components/Banner/Banner'
import Coat from '../../components/coat/Coat'
import Collection from '../../components/collection/Collection'
import Product from '../../components/product/Product'
import Section3 from '../../components/section3/Section3'

function Home() {
  return (

    <>
      {/* <Helmet> <title>home</title></Helmet> */}
      <Banner></Banner>
      <Product></Product>
      <Section3></Section3>
      <Collection></Collection>
      <Coat></Coat>

    </>




  )
}

export default Home
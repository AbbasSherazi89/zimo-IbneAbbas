import React from 'react'
import Categories from '../Components/Elements/Categories'
import GlobalVision from '../Components/Elements/GlobalVision'
import Hero from '../Components/Elements/Hero'
import Last from '../Components/Elements/Last'
import SeaView from '../Components/Elements/SeaView'
import WorldWide from '../Components/Elements/WorldWide'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <WorldWide/>
      <Categories/>
      <SeaView/>
      <GlobalVision/>
      <Last/>
    </>
  )
}

export default HomePage

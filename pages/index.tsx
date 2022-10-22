import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainScreen } from '../src/presentation/containers/MainScreen'
import { MapSelectLocation } from '../src/presentation/containers/MapSelectLocation'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-50 h-[100vh] w-screen'>
      <MainScreen />
    </div>
  )
}

export default Home

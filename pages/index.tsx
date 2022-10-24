import type { NextPage } from 'next'
import { LaunchesDashboardScreen } from '../src/main/screens/LaunchesDashboardScreen'

const Home: NextPage = () => {
  return (
    <div className='bg-background-slate h-[100vh] w-screen'>
      <LaunchesDashboardScreen />
    </div>
  )
}

export default Home

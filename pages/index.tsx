import type { NextPage } from 'next'
import Head from 'next/head'
import Repositories from './containers/Repositories/Repositories'

const Home: NextPage = () => {
  return (
    <div className={'container'}>
      <Head>
        <title>Repositiry Tool</title>
        <meta name="description" content="App for search repository and show eventual issues" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Repositories />
    </div>
  )
}

export default Home

import Head from 'next/head'
import Landing from './component/landing'
import Category from './component/category'
import Tranding from './component/tranding'
import Premium from './component/premium'
import Aim from './component/aim'
import Footer from "./component/footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebPerfect | New Home of Enterterment</title>
        <meta name="description" content = "WebPerfect gives Perfect Expirence and Saves your Pretices Time"/>
      </Head>
      <Landing />
      <Category />
      <Tranding />
      <Premium />
      <Aim />
      <Footer />
    </div>
  )
}

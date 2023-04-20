import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/home/home-page';
import Head from 'next/head';



const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <HomePage data={data}/>
      
    </div>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('../data/data.json');
  // console.log(events_categories)
  return {
    props: {
      data: events_categories,
    }
  }
}

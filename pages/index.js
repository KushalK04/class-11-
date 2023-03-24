import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BarChart from '@/Components/BarChart'
import { Pol } from '@/Components/PolarArea'
import { LineChart } from '@/Components/LineChart'
import { PieChart } from '@/Components/PieChart'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard Asiignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.bot}>Statistics</h1>
        <div className={styles.grid}>
          <div className={styles.drop}>
            <BarChart/>
          </div>
          <div className={styles.drop}>
            <Pol/>
          </div>
          <div className={styles.drop}>
            <LineChart/>
          </div>
          <div className={styles.drop}>
            <PieChart/>
          </div>
        </div>
      </main>
    </>
  )
}

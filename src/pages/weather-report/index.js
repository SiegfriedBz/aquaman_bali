import moment from 'moment-timezone'
import { motion } from 'framer-motion'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'
import {
  containerVariants,
  childVariants,
  textVariants,
} from '@/utils/framerVariants'

const WeatherReport = ({ data }) => {
  return (
    <section id='weather-report'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='my-8'>
          <motion.h1
            variants={textVariants}
            className='text-center text-2xl font-bold text-slate-900
            dark:text-stone-100 md:my-0
              md:text-5xl'
          >
            Canggu Weather Report
          </motion.h1>
        </div>
      </motion.div>

      <div className='flex h-96 w-full flex-col items-center justify-center'>
        <h2
          className='text-center text-2xl font-bold text-slate-900
        dark:text-stone-100 md:my-0
          md:text-5xl'
        >
          Wave Height
        </h2>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 15,
              left: -15,
              bottom: 95,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='time'
              tick={{ angle: -75 }}
              textAnchor='end'
              dy={10}
            />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='waveHeight'
              stroke='#22d3ee'
              fill='#22d3ee'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className='mt-8 flex h-96 w-full flex-col items-center justify-center md:mt-24'>
        <h2
          className='text-center text-2xl font-bold text-slate-900
        dark:text-stone-100 md:my-0
          md:text-5xl'
        >
          Wave Period
        </h2>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 15,
              left: -15,
              bottom: 95,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='time'
              tick={{ angle: -75 }}
              textAnchor='end'
              dy={10}
            />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='wavePeriod'
              stroke='#22d3ee'
              fill='#22d3ee'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default WeatherReport

export async function getStaticProps() {
  const startTimestamp = Math.floor(Date.now() / 1000)
  const endTimestamp = startTimestamp + 24 * 60 * 60
  const startTime = encodeURIComponent(
    new Date(startTimestamp * 1000).toISOString()
  )
  const endTime = encodeURIComponent(
    new Date(endTimestamp * 1000).toISOString()
  )

  const lat = -8.66
  const lng = 115.13
  const params = ['waveHeight', 'wavePeriod']
  const marineResponse = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${startTime}&end=${endTime}`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_STORM,
      },
    }
  )

  const marineData = await marineResponse.json()
  console.log('marineData', marineData)

  const data = marineData?.hours?.map((item) => {
    return {
      time: moment(item.time).tz('Asia/Singapore').format('MM/DD h:mma'),
      waveHeight: item.waveHeight.sg,
      wavePeriod: item.wavePeriod.sg,
    }
  })

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  }
}

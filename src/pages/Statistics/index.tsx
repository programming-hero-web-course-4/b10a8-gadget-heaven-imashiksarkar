import { fetchOrderDataForChart } from '@/services/purchaseService'
import { getRandomHexColor } from '@/utils/getRandomHexColor'
import { useLoaderData } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type LoaderDataType = ReturnType<typeof loader>

const Statistics = () => {
  const data = useLoaderData() as LoaderDataType

  return (
    <section>
      <header className='bg-[#9538E2] py-8'>
        <div className='con flex flex-col items-center text-white'>
          <h1 className='text-3xl font-bold'>Statistics</h1>
          <p className='mt-2 max-w-[65ch] text-center leading-7'>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </header>

      <div className='con py-8'>
        <header className='text-xl font-bold'>
          <h1 className='grow'>Statistics</h1>
        </header>
      </div>

      <div className='con'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='name'
              label={{
                value: 'Product Name',
                position: 'insideBottom',
                offset: -5,
              }}
            />
            <YAxis
              dataKey='price'
              label={{
                value: 'Total Spent',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Bar dataKey='price'>
              {data.map((_item, index) => (
                <Cell key={`cell-${index}`} fill={getRandomHexColor()} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export const loader = () => {
  return fetchOrderDataForChart()
}

export default Statistics

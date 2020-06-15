import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  {
    name: 'Monedero',
    quantity: 4000,
  },
  {
    name: 'Zel',
    quantity: 3000,
  },
  {
    name: 'Edge',
    quantity: 2000,
  },
  {
    name: 'Atomic',
    quantity: 2780,
  },
  {
    name: 'Guarda',
    quantity: 1890,
  },
  {
    name: 'Exodus',
    quantity: 2390,
  },
];

export default class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div className='chart'>
        <BarChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className='chart__bar'
        >
          <CartesianGrid strokeDasharray='3' />
          <XAxis dataKey='name' />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar dataKey='quantity' fill='#82ca9d' />
        </BarChart>
      </div>
    );
  }
}

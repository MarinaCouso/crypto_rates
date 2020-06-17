import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render(props) {
    const data = [
      {
        name: 'Monedero',
        quantity: this.props.calculation.MONEDERO,
      },
      {
        name: 'Zel',
        quantity: this.props.calculation.ZEL,
      },
      {
        name: 'Edge',
        quantity: this.props.calculation.EDGE,
      },
      {
        name: 'Atomic',
        quantity: this.props.calculation.ATOMIC,
      },
      {
        name: 'Guarda',
        quantity: this.props.calculation.GUARDA,
      },
      {
        name: 'Exodus',
        quantity: this.props.calculation.EXODUS,
      },
    ];

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
          <Tooltip />
          <Bar dataKey='quantity' fill='#335eea' />
        </BarChart>
      </div>
    );
  }
}

import { ReactWidget } from '@jupyterlab/apputils';
import {style} from './style'

import React, { useState, FunctionComponent } from 'react';

const Layout: FunctionComponent = ({children}): JSX.Element => {
	return (
		<div>
			<h3>Header</h3>
			{children}
			<h6>Footer</h6>
		</div>
	)
};

const CounterComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
	const data= [
        {"province": "Alberta", "cases": 754, "deaths": 9},
        {"province": "Saskatchewan", "cases": 184, "deaths": 2},
        {"province": "Manitoba", "cases": 91, "deaths": 1},
        {"province": "Newfoundland", "cases": 152, "deaths": 1},
        {"province": "Prince Edward Island", "cases": 21, "deaths": 0},
        {"province": "Nova Scotia", "cases": 147, "deaths": 0},
        {"province": "Northwest Territories", "cases": 1, "deaths": 0},
        {"province": "Nunavut", "cases": 0, "deaths": 0},
        {"province": "Ontario", "cases": 2392, "deaths": 37},
        {"province": "New Brunswick", "cases": 70, "deaths": 0},
        {"province": "Yukon", "cases": 5, "deaths": 0},
        {"province": "British Columbia", "cases": 1013, "deaths": 24},
        {"province": "Quebec", "cases": 4162, "deaths": 31},
      ];
	

  const rows = data.map((item,i) => <tr><td>{item.province}</td><td>{item.cases}</td><td>{item.deaths}</td></tr>);
  return (
	<Layout>
    <div id="wrapper" style={style.wrapper}>
			<h1>Confirmed cases of COVID-19 in Canada</h1>
			<table>
				<thead style={style.leftAligned}>
					<th>Province</th>
					<th>Cases</th>
					<th>Deaths</th>
				</thead>
				<tbody>
					{visible ? rows : null}
				</tbody>
			</table>
			<button style={style.button} onClick={()=>setVisible(!visible)}>Toggle The Table</button>
			<hr/>
      <p>You clicked {counter} times!</p>
      <button style={style.button}
        onClick={(): void => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
			<button style={style.button} onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
		</Layout>
  );
};

export class CounterWidget extends ReactWidget {
  constructor() {
    super();
    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return <CounterComponent />;
  }
}

/** @jsx jsx */
import { ReactWidget } from '@jupyterlab/apputils';
import axios from 'axios';
import { css, jsx } from '@emotion/core';

import { useEffect, useState, FunctionComponent } from 'react';

const style = {
  leftAligned: {
    textAlign: 'left' as const
  },
  button: {
    background: '#eee',
    color: '#444',
    borderRadius: '5px',
    marginTop: '5px',
    marginBottom: '10px',
    marginRight: '4px',
    marginLeft: '4px'
  }
};

interface LayoutProps {
  name: string;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  name
}): JSX.Element => {
  const [buttonColor, setButtonColor] = useState('lightgreen');
  return (
    <section
      css={css`
        padding: 20px;
      `}
    >
      <button
        css={css`
          background-color: ${buttonColor};
          font-size: 15px;
          &:hover {
            color: gray;
          }
        `}
        onClick={() =>
          setButtonColor(
            buttonColor === 'lightgreen' ? 'lightblue' : 'lightgreen'
          )
        }
      >
        Change my color
      </button>
      <h3>{name}</h3>
      {children}
      <h6>Footer</h6>
    </section>
  );
};

const CounterComponent: FunctionComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(function(response) {
        console.log(response);
        setImgSrc(response.data.message);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }, []);

  const data = [
    { province: 'Alberta', cases: 754, deaths: 9 },
    { province: 'Saskatchewan', cases: 184, deaths: 2 },
    { province: 'Manitoba', cases: 91, deaths: 1 },
    { province: 'Newfoundland', cases: 152, deaths: 1 },
    { province: 'Prince Edward Island', cases: 21, deaths: 0 },
    { province: 'Nova Scotia', cases: 147, deaths: 0 },
    { province: 'Northwest Territories', cases: 1, deaths: 0 },
    { province: 'Nunavut', cases: 0, deaths: 0 },
    { province: 'Ontario', cases: 2392, deaths: 37 },
    { province: 'New Brunswick', cases: 70, deaths: 0 },
    { province: 'Yukon', cases: 5, deaths: 0 },
    { province: 'British Columbia', cases: 1013, deaths: 24 },
    { province: 'Quebec', cases: 4162, deaths: 31 }
  ];

  const rows = data.map((item, i) => (
    <tr key={i}>
      <td>{item.province}</td>
      <td>{item.cases}</td>
      <td>{item.deaths}</td>
    </tr>
  ));

  const name = 'Random Dog of The Day';
  return (
    <Layout name={name}>
      <div id="wrapper">
        {imgSrc.length > 0 ? <img src={imgSrc} alt="Random Dog" /> : null}
        <h1>Confirmed cases of COVID-19 in Canada</h1>
        <table>
          <thead style={style.leftAligned}>
            <tr>
              <th>Province</th>
              <th>Cases</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>{visible ? rows : null}</tbody>
        </table>
        <button style={style.button} onClick={() => setVisible(!visible)}>
          Toggle The Table
        </button>
        <hr />
        <p>You clicked {counter} times!</p>
        <button
          style={style.button}
          onClick={(): void => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
        <button style={style.button} onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
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

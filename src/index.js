import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigator from './Navigator';
import {Helmet} from "react-helmet";
import Progress from './ProgressBar';

ReactDOM.render(<>
  <header>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Meme Budget</title>
    </Helmet>
  </header>
  <main>
    <Navigator />
    <Progress price="15" budget="20"/>
  </main>
</>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

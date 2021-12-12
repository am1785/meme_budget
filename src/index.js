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

import React from 'react';
import Header from './Modules/Header/Header';
import Button from './Modules/Buttons/Button.js';
import SummaryForm from './Modules/Summary/SummaryForm'
import './App.css';
import USCurrencyFormat from './Modules/USCurrencyFormat/USCurrencyFormat';


export default class App extends React.Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
        selected
    });
  };
  
      
      
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Button  
            formatCurrency={USCurrencyFormat.format}
            selected={this.state.selected}
            update={this.updateFeature}
          />
          <SummaryForm
            selected={this.state.selected}
          />
        </main>
      </div>
    )
  }
}

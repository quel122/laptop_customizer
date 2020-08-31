import React from 'react';
import SummaryCost from './SummaryCost';
import SummaryTotal from './SummaryTotal';
import USCurrencyFormat from './/USCurrencyFormat'

function Summary(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryCost
                selected={props.selected}
                USCurrencyFormat={USCurrencyFormat}
            
            />
            <SummaryTotal
                selected={props.selected} 
                USCurrencyFormat={USCurrencyFormat}
            
            />
           
          
        </section>

    )

}

export default Summary
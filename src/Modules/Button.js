import React from 'react';
import FEATURES from './Features';
import slugify from 'slugify';
import Buttons from './Buttons';


export default function Button(props) {    
    console.log(props)
    return Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === props.selected[feature].name}
              onChange={e => props.update(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({props.formatCurrency(item.cost)})
            </label>
          </div>
        );
    })
      return (
        <Buttons 
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        options={options}/>        
      );    })
  }
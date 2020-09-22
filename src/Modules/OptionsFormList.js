// import React from 'react';
// import OptionsButtons from './OptionsButtons'

// export default function OptionsFormList(props) {
//     const features = Object.keys(props.features).map((feature, idx) => {
//         const featureHash = feature + '-' + idx;
        

//         return (
//         <fieldset className="feature" key={featureHash}>
//             <legend className="feature__name">
//             <h3>{feature}</h3>
//             </legend>
//             <OptionsButtons
//             features={props.features}
//             selected={props.selected}
//             updateFeature={props.updateFeature}
//             feature={feature}
//             />

//         </fieldset>
//         );
//     });
        

//     return (
//         <form className="main__form">
//         <h2>Customize your laptop</h2>
//         {features}
//         </form>

//     )   
// }
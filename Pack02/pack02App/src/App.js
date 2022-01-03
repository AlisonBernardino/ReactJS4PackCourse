import React from 'react';
import CandyShopHeader from './CandyShopHeader';
import CandyShopArticle from './CandyShopArticle';
import CandyShopFooter from './CandyShopFooter';
import {Button} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

// Method 01 - Using classes
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <CandyShopHeader/>
//         <CandyShopArticle/>
//         <CandyShopFooter/>
//       </div>
//     );
//   }
// }

// Method 02 - Using functions
function App (props){
  return(
    <div>
      <CandyShopHeader/>
      <CandyShopArticle/>
      <CandyShopFooter/>
    </div>
  )
}
 
export default App;

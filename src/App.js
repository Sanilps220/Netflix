import React from 'react';
import Banner from './Commponents/Banner/Banner';
import NavBar from './Commponents/NavBar/NavBar';

import RowPost from './Commponents/RowPost2/RowPost';
import {action, originals} from './urls'
function App() {
  return (
    <div className="App">
 
     <NavBar/> 
      <Banner/>
     <RowPost url={originals} title='Netflix Originals'  />
     <RowPost url={action} title='Action'  isSamll />
    </div>
  )
}

export default App

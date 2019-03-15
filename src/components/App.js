import React from 'react'

import NavBar from './NavBar.js'
import GifListContainer from '../containers/GifListContainer.js'

// the App component should render out the GifListContainer component 

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
          <GifListContainer />
    </div>
  )
}

export default App;

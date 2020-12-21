import { Fragment } from 'react'
import Header from './components/Header'
import Characters from './components/Characters'


function App() {
  return (
    <Fragment>
      <Header 
        about="The Rick and Morty API is a RESTful and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show."  
      />
      <Characters />
    </Fragment>
  );
}

export default App;

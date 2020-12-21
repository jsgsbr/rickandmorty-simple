import { useState ,useEffect } from 'react'

const Characters = () => {

    // Estados
    const [character, setCharacter] = useState([])

    // LLamado a la API
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))
    }, [])

    return ( 
        <div className="container">
           <div className="row row-cols-1 row-cols-md-3">
                {
                    character.map(item => (
                        <div className="col mb-4" key={item.id}>
                            <div className="card">
                                <img src={item.image} alt={item.name} className="card-img-top"/>
                            </div>
                        </div>
                    ))
                }
           </div>
        </div>
     );
}
 
export default Characters;
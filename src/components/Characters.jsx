import React, { useEffect, useState } from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const url = `https://rickandmortyapi.com/api/character`
    const getCharacters = async (url)=>{
        const res = await fetch(url)
        const {results} = await res.json()
        setCharacters(results)

    }
    useEffect(()=>{
       getCharacters(url)
    },[url])

    console.log(characters)
    return (
        <main>
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-1 sm:p-2 lg:p-6 w-11/12 mx-auto">
              {
                    characters.map((character) => {
                        return(  
                          <figure className="flex flex-col sm:flex-row p-4 ">
                                 <img src={character.image} key={character.id} alt={character.name}
                                 className="w-full sm:w-48 xl:w-52"
                                 />
                                <figcaption className="bg-gray-800 flex-grow p-2"> 
                                   <h2 className="p-2 rounded text-3xl m-2 font-rick "> {character.name}</h2>
                                   <p className="p-2 bg-gray-600 rounded text-center mt-2 font-morty tracking-widest text-xl">{character.species}</p>
                                   <p className="p-2 bg-gray-600 rounded text-center mt-2  font-morty tracking-widest text-xl">{character.status}</p>
                                </figcaption>
                          </figure>  
                       
                        )
                    })
                }
              </section>

        </main>
    )
}

export default Characters


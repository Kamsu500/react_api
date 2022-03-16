import React,{useState,useEffect} from 'react';
import './App.css';
import Add from './components/addPokemon/addPokemon';
import Navbar from './components/navbar/navbar';
import Card from './components/card';

import { getAllPokemon,getPokemon } from './services/pokemon'

//function to get all pokemons and get one by card

function App() {
    const [pokemonData,setPokemonData]=useState([]);
    const [nextUrl,setNextUrl]=useState('');
    const [prevUrl,setPrevUrl]=useState('');
    const [loading,setLoading]=useState(true);
    const initialUrl='https://pokeapi.co/api/v2/pokemon'

    useEffect(()=>{
      async function fetchData(){
        let response = await getAllPokemon(initialUrl);
        console.log(response);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await loadingpPokemon(response.results)
        setLoading(false);
      }
      fetchData();
    },[]);

    const loadingpPokemon = async(data)=>{
      
      let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url)

      return pokemonRecord
      }))

      setPokemonData(_pokemonData);
    }

    return <div>
            <Navbar/>
            <div class='container mt-2'>
            <div class="row justify-content-between">
              <div class="col-4">
                <button class='btn btn-info'>previous</button>
              </div>
              <div class="col-4">
                <button class='btn btn-info'>next</button>
              </div>
            </div>
            </div>
            <Add/>
            {loading ? <h1>Loading ...</h1> : 
           
           <div className=''>
             {
               pokemonData.map((pokemon,i)=>{
                 return <Card key={i} pokemon={pokemon}/>
               })
             }
           </div>
           }
    
           </div>;
}
export default App;
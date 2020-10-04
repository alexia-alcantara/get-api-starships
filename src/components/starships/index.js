import React from 'react';
import axios from 'axios';

const URL = 'https://swapi.dev/api/starships/'


class Starships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  listaStarships: []  }
  }

  refresh(Name = '') {
    const search = Name ? `&Name__regex=/${Name}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
    .then(response => { this.setState({ listaStarships: response.data}); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });    

  }
  
  
  componentDidMount() {
    this.refresh()
  }
  
  
  render() {
    console.log(this.state.listaStarships);
    return (
      <div>
        <h3>Starships List</h3>
        <button>Show Message </button>

        {this.state.listaStarships.map(function(item){
          return (
            <p>{item.name}</p>
          )
        })}
        
      </div>
    )
  }
}



export default Starships;
import React, {Fragment} from 'react'

const Starship = (props) => {
    const names = ['a', 'b', 'c', 'd']
    const starship = names.map((n) =>
        <li>Satélite {n}</li>
    )

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.consumables}</p>

            <hr/>
        </div>
    )
}

export default Starship;
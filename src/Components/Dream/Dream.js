import './Dream.css'
import AddDream from './AddDream/AddDream.js'
import ListDream from './ListDream/ListDream'
import { useState } from 'react'

const Dream = () =>{

    const [getDream, setDream] = useState ([
        {id : 1, title : "Holiday in japan"}
    ])

    const eventCreateDream = (Dream) =>{
        setDream(getDream.concat(Dream))
        console.log(getDream)
    }


    return (
        <div>

            <h3>What your dream : </h3>
            <AddDream onCreateDream = {eventCreateDream}/>         
            <ListDream dataDreamValue = {getDream}/>

        </div>
    )
}

export default Dream;
import './AddDream.css'
import {useState} from 'react'

const AddDream = (props) => {

    const [getDream, setDream] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const NewDream = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getDream
        }

        props.onCreateDream(NewDream)

        setDream ('')
        console.log(NewDream)
    }

    const handleDreamInput = (event) => {
        setDream(event.target.value)
        console.log(getDream)
    }

    return (
        <form className='spaceDream' onSubmit={handleSubmit}>
            <input type = "text" value={getDream} onChange={handleDreamInput}/>
            
            <button type= "submit" >Add</button>
        </form>

        
    )
}

export default AddDream;
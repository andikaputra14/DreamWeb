import './ListDream.css';

const ListDream = (props) =>{
    return (
        <ul>{
            props.dataDreamValue.map((dataDream) => {
                //{id : 1, title : 'Muhammad Abili'}
                return <li key = {dataDream.id}>{dataDream.title}</li>
            })
        }</ul>
    )
}

export default ListDream;
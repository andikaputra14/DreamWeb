import './Pesanan.css'
import AddPesanan from '../Pesanan/AddPesanan/AddPesanan.js'
import ListPesanan from './ListPesanan/ListPesanan'
import { useState } from 'react'

const Pesanan = () =>{

    const [getPesanan, setPesanan] = useState ([
        {id : 1, title : "alkdsjfsl"}
    ])

    const eventCreatePesanan = (pesanan) =>{
        setPesanan(getPesanan.concat(pesanan))
        console.log(getPesanan)
    }


    return (
        <div>

            <h3>Pesanan Anda : </h3>
            <AddPesanan onCreatePesanan = {eventCreatePesanan}/>         
            <ListPesanan dataPesananValue = {getPesanan}/>

        </div>
    )
}

export default Pesanan;
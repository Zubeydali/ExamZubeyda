import React, { useEffect, useState } from 'react'
import './Collection.css'

function Collection() {


    const [product, setproduct] = useState([])
    const [search, setsearch] = useState("")
    useEffect(() => {

        fetch("https://67704b972ffbd37a63cc94d6.mockapi.io/netflix")
            .then(res => res.json())
            .then(data => setproduct(data))


    }, [])
    return (
        <>
            <input type="text" value={search} onChange={x => setsearch(x.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className="row">

                {
                    product
                        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                        .map((x) => (
                            <div className="card col-4 " key={x.id}>
                                <p>{x.name}</p>
                                <img src="{x.avatar}" alt="" />


                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Collection
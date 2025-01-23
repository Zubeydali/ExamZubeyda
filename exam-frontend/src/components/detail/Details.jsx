import React from 'react'

function Details(props) {
    const {productId} = useParams()
    const Product = x.find(prod => prod.id === productId)
    
  return (
<>

{
   <div>
   <h1>{Product.name}</h1>
   <p>{Product.avatar}</p>
   <p>{Product.description}</p>
</div>
}
</>
  )
}

export default Details
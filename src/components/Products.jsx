import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(30)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  console.log(Math.ceil(3/2))

  const getData = async () => {
    const skip = (page - 1) * limit
    const response = await fetch(`https://dummyjson.com/product?limit=${limit}&skip=${skip}`)
    const data = await response.json()
      console.log(data)
            setProducts(data.products)
            setTotal(data.total)
  }
              
      useEffect(() => {
        getData();
      }, [limit,page])


      console.log(page, total , limit)
  

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>

      <select value={limit} onChange={(ev) =>  setLimit(ev.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option  value={30}>30</option>
      </select>

      
      <button disabled={page == 1 } onClick={() =>setPage(page-1) }> Before page </button>
      <p> {page} </p>
      <button disabled ={page == Math.ceil(total/limit)} onClick={() => setPage(page+1) }>  Next page </button>


      {
      products.map((product)=> {
        return (
          <div style={{border: "1px solid black"}}>
          
            <p>{product?.id}</p>
            <p>{product?.title}</p>
            <img style={{height: "100px", width: "150px",}} src={product.images[0]} alt="" />  
            
                
          </div>
          

        )
      })
    }
    
    </div>
  )
}

export default Products

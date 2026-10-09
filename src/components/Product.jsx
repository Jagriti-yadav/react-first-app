import React from 'react'
import { useParams } from 'react-router-dom'
//useSearchParams is used to get the query parameters from the url. It returns an array of two values, the first value is the search params object and the second value is a function to set the search params. The search params object has a method called get() which is used to get the value of a query parameter by its name. The setSearchParams() function is used to set the query parameters in the url. It takes an object as an argument where the keys are the names of the query parameters and the values are their corresponding values.
//dynamic url ways to create
//diff btc useparama vs usesetprama
//nested routing

const Product = () => {
const [info,setInfo] = useState();
const [filter,setFilter] = useSearchParams();
const pid = filter.get("pid");
const onSearch = (e) =>{
  e,preventDefault();
  setFilter({pid:info});
}
const getProduct = ()=>{
  //switch
}
//const [info,setInfo] = useState();
  const { id } = useParams()

  let product

  switch (id) {

    case '1':
      product = {
        name: 'iPhone 15',
        price: 60000,
        
      }
      break

    case '2':
      product = {
        name: 'Samsung Galaxy S24',
        price: 70000,
        
      }
      break

    case '3':
      product = {
        name: 'OnePlus 12',
        price: 50000,
        
        
      }
      break

    default:
      return <h2>Product Not Found</h2>
  }

  return (
    <div className="card" style={{ width: '18rem' }}>

      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="card-text">
          ₹{product.price}
        </p>

        <button className="btn btn-primary">
          Buy Now
        </button>

      </div>

    </div>
  )
}

export default Product
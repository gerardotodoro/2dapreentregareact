import { useState, useEffect } from "react"
import { getProductById } from "../NavBar/asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { ItemId } = useParams()

    useEffect(() => {
      getProductById(ItemId)
        .then(response => {
          setProduct(response);
        })
        .catch(error => {
          console.error(error);
        });
    }, [ItemId]); // Provide an empty dependency array
  
    return (
      <div className='ItemDetailContainer'>
        {product && <ItemDetail {...product} />}
      </div>
    );
  };
  
  export default ItemDetailContainer;
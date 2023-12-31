import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector( (state) => state)
  const dispatch = useDispatch()

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id))
    toast.error("Item remmoved from Cart")
  }

  return (

    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p> {post.description} </p>
      </div>

      <div>
        <img src={post.image} />
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      {
        cart.some( (p) => p.id == post.id) ?
        (<button
          onClick={removeFromCart}
        >
          Remove item
        </button>): 
        (<button
          onClick={addToCart}
        >
          Add to cart
        </button>)
      }
       

    </div>

  )
};

export default Product;

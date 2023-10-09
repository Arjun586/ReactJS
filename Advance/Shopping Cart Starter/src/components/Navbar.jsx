import{FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div>
            <img src="https://www.bing.com/images/search?view=detailV2&ccid=rG0tnrwT&id=454D3C8D8ED924DA97D8704CD58CE548C6DEF122&thid=OIP.rG0tnrwThJPOWfrOefpRBgHaFj&mediaurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f725831%2fscreenshots%2f3251631%2f__________-2.png&exph=600&expw=800&q=code+logo&simid=607992525788302687&FORM=IRPRST&ck=BC5FAC71419508CDC120B09A15C39B45&selectedIndex=10" />
          </div>
        </NavLink>
       
        <div>
          <NavLink to="/" >
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart/>
            </div>
          </NavLink>
          
        </div>

      </nav>
    </div>
  )
};

export default Navbar;

import { data } from "../../pages/services/productdata";
import { Product } from "../../componants/productCard";
import { useNavigate,Link } from "react-router-dom";
import "../../css/productList.css";
export const ProductList = () => {


  const productList = data;
  

  return (
    <div className="productList">
      <ul >
          <li >
              <Link to={'/adminhome'} >Home</Link>
            </li>

            <li >
              <Link to={'/addProduct'} >Add Product</Link>
            </li>
            </ul>
      {
        productList.map((item) => {
          return (
            <Product
            key={item.id}
            id={item.id}
            name={item.name}
            descr={item.descr}
            stock={item.stock}
            image={item.image}
              
            />
          );
        })
      }
    </div>
  );
};

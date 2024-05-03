import { data } from "../../pages/services/productdata";
import { SvProduct } from "../../componants/svProdCard";
import { useNavigate,Link } from "react-router-dom";
import "../../css/productList.css";
export const SvProductList = () => {


  const productList = data;


  return (
    <div className="productList">
      <ul >
          <li >
              <Link to={'/svhome'} >Back</Link>
            </li>

            </ul>
      {
        productList.map((item) => {
          return (
            <SvProduct
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

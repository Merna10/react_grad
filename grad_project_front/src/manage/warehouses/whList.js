import { data2 } from "../../pages/services/warehousesdata";
import { Warehouse } from "../../componants/warehouseCard";
import { Link } from "react-router-dom";
import "../../css/whList.css";

export const WhList = () => {


  const productList = data2;
  

  return (
    <div className="whlist">
      <ul >
          <li >
              <Link to={'/adminhome'} >Home</Link>
            </li>

            <li >
              <Link to={'/addwh'} >Add Warehouse</Link>
            </li>
            </ul>
      {
        productList.map((info) => {
          return (
            <Warehouse
            key={info.id}
            id={info.id}
            name={info.name}
            location={info.location}
            status={info.status}
              
              
            />
          );
        })
      }
    </div>
  );
};

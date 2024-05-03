import { data3 } from "../../pages/services/superviseordata";
import { Supervisor } from "../../componants/supervCard";
import { useNavigate, Link } from "react-router-dom";
import "../../css/svList.css";

export const SvList = () => {


  const productList = data3;
 

  return (
    <div className="svlist">
      
      <ul >
          <li >
              <Link to={'/adminhome'} >Home</Link>
            </li>

            <li >
              <Link to={'/addsv'} >Add Supervisor</Link>
            </li>
            </ul>
      <br/>
      {
        productList.map((info) => {
          return (
            <Supervisor
            key={info.email}
            email={info.email}
            name={info.name}
            password={info.password}
            status={info.status}
              
            />
          );
        })
      }
    </div>
  );
};

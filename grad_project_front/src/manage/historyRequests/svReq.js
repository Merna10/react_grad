import { data } from "../../pages/services/requestproductdata";
import { SupervisorRequest } from "../../componants/supervhistoryrequest";
import {SvHeader} from "../../pages/shared/header/superVheader";
import Table from 'react-bootstrap/Table';
export const SvHistorList = () => {

  

  const productList = data;
  

  return (
    <div className="">
      <SvHeader />
      <Table striped bordered hover variant="dark">
      <thead>
      <tr >
              <th style={{width:'  7cm'}}>Item</th>
              <th style={{width:'  7cm'}}>Id</th>
              <th style={{width:'  7cm'}}>warehouseId</th>
              <th style={{width:'  7cm'}}>Stock</th>
              <th style={{width:'  7cm'}}>Request</th>
              <th style={{width:'  7cm'}}>Status</th>
            </tr>
      </thead>
  
    </Table>
      {
        
        productList.map((item) => {
          return (
            
            <SupervisorRequest
            key={item.id}
            id={item.id}
            name={item.name}
            stock={item.stock}
            warehouseId={item.warehouseId}
            request={item.request}
            status={item.status}
              
             
            />
          );
        })
      }
    </div>
  );
};

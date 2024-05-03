import { data } from "../../pages/services/requestproductdata";
import { AdminRequest } from "../../componants/adminhistoryrequest";
import {AdminHeader} from "../../pages/shared/header/admiHeader";
import Table from 'react-bootstrap/Table';

export const AdminHistorList = () => {
  const productList = data;
  return (
    <div >
      <AdminHeader />
      <Table striped bordered hover variant="dark" >
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
            
            <AdminRequest
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

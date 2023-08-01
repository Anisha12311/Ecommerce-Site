import * as React from 'react';
import '../../Styles/UserOrder.css'
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
const UserOrders = () =>  {
  return (
   <div class="containers">
    <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-2"> Id</div>
      <div class="col col-2">User</div>
      <div class="col col-2">Date</div>
      <div class="col col-2">Total</div>
      <div class="col col-2">Delivered</div>
      <div class="col col-2">Order Detail</div>
    </li>
    <li class="table-row">
      <div class="col col-2" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-2" data-label="Date">2022-09-12</div>
      <div class="col col-2" data-label="Amount">$350</div>
      <div class="col col-2" data-label="Amount"><ClearIcon/></div>
      <div class="col col-2" data-label="Payment Status">Pending</div>
    </li>
    <li class="table-row">
    <div class="col col-2" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-2" data-label="Date">2022-09-12</div>
      <div class="col col-2" data-label="Amount">$350</div>
      <div class="col col-2" data-label="Amount"><CheckIcon/></div>
      <div class="col col-2" data-label="Payment Status">Pending</div>
    </li>
    <li class="table-row">
       <div class="col col-2" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-2" data-label="Date">2022-09-12</div>
      <div class="col col-2" data-label="Amount">$350</div>
      <div class="col col-2" data-label="Amount"><ClearIcon/></div>
      <div class="col col-2" data-label="Payment Status">Pending</div>
    </li>
    <li class="table-row">
    <div class="col col-2" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-2" data-label="Date">2022-09-12</div>
      <div class="col col-2" data-label="Amount">$350</div>
      <div class="col col-2" data-label="Amount"><CheckIcon/></div>
      <div class="col col-2" data-label="Payment Status">Pending</div>
    </li>
  </ul>
  </div>          
  );
}

export default UserOrders

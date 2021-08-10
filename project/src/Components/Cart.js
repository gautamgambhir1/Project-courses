import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



export default function Cart({his,pass}) {
    const arr = pass.length
    const handleclick = ()=>{
        his.push({
            pathname: '/cart',
            state: { detail: pass}
        })
    }
  return (
      <div>
          <Badge badgeContent={arr} color="primary">
        <ShoppingBasketIcon onClick={()=>handleclick()} style = {{fontSize:"1.9rem",cursor:"pointer"}}/>
      </Badge>
    </div>
  );
}
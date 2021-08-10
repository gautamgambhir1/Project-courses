import { DataGrid } from '@material-ui/data-grid';
import React, {useState,useEffect } from 'react';
import {Button} from '@material-ui/core'
import Cart from './Cart';
const rows=[
  { id: 1, col1: 'Python', col2: ' Mon May 03 2021',col3:"04:00 pm-05:00 pm",col4:11,col5:"Book Now" },
  { id: 2, col1: 'Python', col2: 'Mon May 10 2021',col3:"04:00 pm-05:00 pm",col4:6,col5:"Book Now"  },
  { id: 3, col1: 'Python', col2: 'Mon May 17 2021',col3:"04:00 pm-05:00 pm",col4:7,col5:"Book Now"  },
  { id: 4, col1: 'Python', col2: 'Mon May 24 2021',col3:"04:00 pm-05:00 pm",col4:15,col5:"Book Now"  },
  { id: 5, col1: 'Python', col2: 'Mon May 31 2021' ,col3:"04:00 pm-05:00 pm",col4:12,col5:"Book Now" },
  { id: 6, col1: 'Python', col2: 'Mon jun 06 2021' ,col3:"04:00 pm-05:00 pm",col4:9,col5:"Book Now" },
  { id: 7, col1: 'Python', col2: 'Mon jun 13 2021',col3:"04:00 pm-05:00 pm",col4:20,col5:"Book Now"  },
  { id: 8, col1: 'Python', col2: 'Mon jun 20 2021',col3:"04:00 pm-05:00 pm",col4:8,col5:"Book Now"  },

];
 const style = {
   disabled:{
    pointerEvents:"none"
   }
 }

export default function Loadingpage({history}) {
    const [time,settime]=useState(45)
    const [state,setstate] = useState([])
    const [Rows,setRows] = useState(rows)
    const [message,setmessage] = useState('')
    const [flag,setflag]= useState(false)
    const [random]= useState(1)

    useEffect(()=>{
      time>0 && 
       setTimeout(()=>{
           settime(time-1)
       },1000)
    },[time])

    const columns = [
        { field: 'col1', headerName: 'Subject', width: 150 },
        { field: 'col2', headerName: 'Date', width: 150 },
        { field: 'col3', headerName: 'Time', width: 150 },
        { field: 'col4', headerName: 'Availaibility', width: 150 },
        { field: '', headerName: '', width: 150,renderCell: (params) => {
          const onClick = () => {
            setstate([...state,params.row])
            
            Rows.map((itm)=>{
          
      
                if (params.row.id===itm.id){
                  itm.col4-=1 
                  itm.col5="Booked"
              
                }
                else if(state.length >= 2){
                  setflag(true)
                  itm.col5="Full" 
                  setmessage("You can select max 3 course")
                  
                }
                return itm
            })
            setRows([...Rows])
          };
        
      
          return <Button color="primary" style={flag? style.disabled :{}} onClick={onClick}>{params.row.col5}</Button>;
        } }
      ];
  return (
    <div style={{ height: 600, width: '80%',marginLeft:"50px" }}>
      <h3>Time-Left: {time}</h3>
        <h3 style={{textAlign:"center",fontFamily:"cursive",color:"red",fontWeight:"bolder"}}>{message}</h3>
        <h2 style={{float:'right',fontFamily:"sans-serif"}}>Free-Seats-Left: {random*rows.length}</h2>
        <div style={{float:"right"}}>  
        <Cart pass = {state} his = {history} />
        </div>
        <h1>Claim Your Free Trial Class</h1>
      <DataGrid style={{color:"darkblue",fontFamily:"serif",fontSize:"1rem"}} rows={rows} columns={columns} />
    </div>
  );
}
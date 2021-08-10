import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useLocation } from 'react-router-dom';
import {Button} from '@material-ui/core'

export default function Cartpage(){
    const[rows,setrows]= useState([])
    const location = useLocation()
    const columns = [
        { field: 'col1', headerName: 'Subject', width: 150 },
        { field: 'col2', headerName: 'Date', width: 150 },
        { field: 'col3', headerName: 'Time', width: 150 },
        { field: 'col4', headerName: 'Availaibility', width: 150 },
        { field: '', headerName: '', width: 150,renderCell: (params) => {
            const onClick = () => {
                    const result= rows.filter((i)=>i.id!==params.row.id)
                    setrows(result)
                  
            };
          
        
            return <Button color="primary"  onClick={onClick}>Cancel</Button>;
          } }
        ];



        useEffect(()=>{
          setrows(location?.state?.detail)
        },[location?.state?.detail])


    return (<div style={{ height: 1000, width: '70%' }}>
      <h1 style = {{textAlign:"center",fontFamily:"cursive"}}>Your-cart</h1>
      <DataGrid style={{color:"darkblue",fontFamily:"serif",fontSize:"1rem"}} rows= {rows} columns = {columns}/>
    </div>)
}
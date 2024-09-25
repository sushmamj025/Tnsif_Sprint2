import React,{useEffect, useState} from 'react'
import { deleteStore, listStores } from '../services/StoreService'
import {useNavigate} from 'react-router-dom'
const listStore = () => {

     const [stores,setStore]=useState([])
     const navigator = useNavigate();

     useEffect(()=>{
        getAllStore();
      },  [])
     function getAllStore(){
        listStores().then((response)=>{
            setStore(response.data);
        }).catch(error=>{
            console.error(error);
        })


     }
 function addNewStore(){
    navigator('/add-store')

 }
 function updateStore(id){
    navigator(`/edit-store/${id}`)
 }
 function removeStore(id){
    console.log(id);
    deleteStore(id).then((response)=>{
        getAllStore();

    }).catch(error =>{
        console.error(error);
    })
 }
return (
    <div className='container'>
        
<h2 className='text-center'>Store Details</h2>
   <button className='btn btn-primary mb-2'onClick={addNewStore}>Add Store</button>
    <table className='table table-stripped table-bordered'> 

        <thead>
            <tr>
                <th>Store ID</th>
                <th>Store Category</th>
                <th>Store Contact Info</th>
                <th>Store Location</th>
                <th>Store Name</th>
                <th>Store Operating Hours</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                stores.map(store =>
                    <tr key={store.id}>
                        <td>{store.id}</td>
                        <td>{store.category}</td>
                        <td>{store.contact_info}</td>
                        <td>{store.location}</td>
                        <td>{store.name}</td>
                        <td>{store.operating_hours}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=> updateStore(store.id)}>Update</button>
                            <button className='btn btn-danger'onClick={() => removeStore(store.id)}>Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>

    </div>
  )
}


export default listStore
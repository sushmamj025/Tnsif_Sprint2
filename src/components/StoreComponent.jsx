import React,{ useEffect, useState } from 'react'
import { createStore, getStore, updateStore } from '../services/StoreService'
import{ useNavigate, useParams }from 'react-router-dom';
const StoreComponent = () => {
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [contactInfo,setContactInfo] = useState('');
    const [location,setLocation] = useState('');
    const [name,setName] = useState('');
    const [operatingHours,setOperatingHours] = useState('');
     const { Id } = useParams();
    const navigator = useNavigate();

    useEffect(()=>{
        if(id){
            getStore(id).then((response)=>{
                //setId(response.data.id);
                setCategory(response.data.category);
                setContactInfo(response.data.contactInfo);
                setLocation(response.data.location);
                setName(response.data.name);
                setOperatingHours(response.data.operatingHours);
                
            }).catch(error =>{
                console.error(error);
            })
        }
        
    }, [id])
   
    function saveOrUpdateStore(e){
               e.preventDefault();
               const store={id,category,contactInfo,location,name,operatingHours}
               console.log(store)
               if(id){
                updateStore(id,store).then((response)=>{
                    console.log(response.data);
                    navigator('/stores');
                }).catch(error => {
                    console.error(error);
                })
               }else{
                createStore(store).then((response)=>{
                    console.log(response.data);
                    navigator('/stores')

               }).catch(error =>{
                console.error(error);
               })
        
        }
      }
      function pageTitle(){
        return id ? <h2 className='text-center'>Update Store</h2> : <h2 className='text-center'>Add Store</h2>;
         }
return (
    <div className='container'>
        <br />
        <br />
        <div className='row'>
            <div className='card col-md-12 offset-md-5 offset-md-5' >
               {
                 pageTitle()
               }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Store ID:</label>
                            <input
                                type='number'
                                placeholder='Enter Store ID'
                                name='id'
                                value={id}
                                className='form-control'
                                onChange={(e) => setId(e.target.value)}
                            >
                              </input><div className='form-group mb-2'>
                            <label className='form-label'>Store Category:</label>
                            <input
                                type='text'
                                placeholder='Enter Store Category'
                                name='category'
                                value={category}
                                className='form-control'
                                onChange={(e) => setCategory(e.target.value)}
                            >
                              </input>
                            
                        </div>
                          
                        </div>

                        

                        <div className='form-group mb-2'>
                            <label className='form-label'>Store Contact Info:</label>
                            <input
                                type='text'
                                placeholder='Enter Store Contact Info'
                                name='contactInfo'
                                value={contactInfo}
                                className='form-control'
                                onChange={(e) => setContactInfo(e.target.value)}
                            >
                              </input>
                           
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Store Location:</label>
                            <input
                                type='text'
                                placeholder='Enter Store Location'
                                name='location'
                                value={location}
                                className='form-control'
                                onChange={(e) => setLocation(e.target.value)}
                            >
                              </input>
                           
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Store Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Store Name'
                                name='name'
                                value={name}
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Store Operating Hours:</label>
                            <input
                                type='number'
                                placeholder='Enter Store Operating Hours'
                                name='operatingHours'
                                value={operatingHours}
                                className='form-control'
                                onChange={(e) => setOperatingHours(e.target.value)}
                            >
                              </input>
                            
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateStore}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

        </div>
    )
  }


export default StoreComponent;        
    



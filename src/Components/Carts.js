import './styles.css'
import { gettingData } from '../features/actions/carts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd'
import 'antd/dist/reset.css';
import { valueFolow } from '../features/slices/cartsSlices';
import InputSeacrh from './InputSearch';
const Carts = () => {
    const dispatch = useDispatch ()
    const { data, isloading } = useSelector (({carts}) => carts);
    useEffect (() => {
        try {
            dispatch (gettingData ())  
        }catch (e) {
            console.log(e);
        }
       
    }, [])
 
const handleFolowValue = (event) => {
    event.preventDefault()
    dispatch (valueFolow(event.target.value));
}

   return data.length ? (
    <>
        <InputSeacrh handleFolowValue = {handleFolowValue} />
        <section className='cats-container'>
                {isloading ? <div className='spiner-container'> 
                <Spin size = 'large' className='spin' /> 
                </div>: data.map (item => {
                    const { id, urls } = item
                        return (
                    <React.Fragment key={id}>
                    <img src= {urls.small_s3} className='images-style' />
                </React.Fragment>  
            )
        })}
            </section>
    </>
   ) : (
    <>
      <InputSeacrh handleFolowValue = {handleFolowValue} />
        <h2>No Results Found...</h2>
    </>
   )
}

export default Carts;
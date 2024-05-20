import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router'
import axios from 'axios'
const Detail = () => {
    const {id}=useParams()
    const [data,setData]=useState([])
    const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`).then(res=>{
            setData(res.data)
        })
    },[])
    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basket))
    },[basket])
    const addToBasket=(title)=>{
        let basketItem=basket.find((e)=>e.title==title)
        if(!basketItem){
            setBasket([...basket,{...data,
                                  count:1,
                                  totalPrice:data.price}
            ])
        }
        else{
            basketItem.count++
            basketItem.totalPrice=basketItem.count * basketItem.price
            setBasket([...basket])
        }
    }
  return (
    <div className="detail-container">
        <img width={"300px"} src={data.image} alt="" />
        <div className='detailText'>
            <h2>{data.title}</h2>
            <span>{data.price}</span>
            <button className='btn btn-primary' onClick={()=>{
                addToBasket(data.title)
            }}>Add to Basket</button>
        </div>
    </div>
  )
}

export default Detail
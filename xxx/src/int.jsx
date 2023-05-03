import './styy.css'
import React from "react"
// import Cart from './cart'
import img from './img/Фото.png'
import img1 from './img/xiaomi_redmi_note_11-650x650.jpg'
import img2 from './img/win.jpg'
// import { Cart1 } from './cart'
// import { Cart2 } from './cart'
// import { Pul } from './cart'
import { useState } from 'react'


let User = () => {


    let [pul,setpul] = useState(100)
    let [pul2,setpul2] = useState(1000)
    let [pul3,setpul3] = useState(10000)
    let [don,setdon] = useState(1)
    let [don2,setdon2] = useState(1)
    let [don3,setdon3] = useState(1)
    // let [main4,setmain4] = useState()
    let minus1=()=>{
        if (don > 1) {
            setdon(don-1)            
        }
    }
    let pilus1=()=>{
        setdon(don+1)
    }
    let minus2=()=>{
        if (don2 > 1) {
            setdon2(don2-1)
        }
    }
    let pilus2=()=>{
        setdon2(don2+1)
    }
    let minus3=()=>{
        if (don3 > 1) {
            setdon3(don3-1)
        }
    }
    let pilus3=()=>{
        setdon3(don3+1)
    }




    return(
        <div className='main__gl'>
        <div className='text'>
        <p className='color__p'>ваша корзино,</p>
        <p className='color__p'>3 товар</p>
        </div>
        <div className='menu_cart'>
        <div className='menu_item'>
            <div className='item'>
                <p>снять все</p>
                <div className='items'>
                <p>ближайший дата доставки:</p>
                <p className='text2'>2 май (завта)</p>
                </div>
            </div>
            <div className='items__blok'>
                <img className='xbox' src={img}/>
                <div className='menu__text__btn'>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <div className='menu__obj'>
                    <p className='text__xbox'>Lorem ipsum dolor sit.</p>
                    <div className='calkul'>
                        <button className='btn2' onClick={minus1}>-</button>
                        <p>{don}</p>
                        <button className='btn2' onClick={pilus1}>+</button>
                    </div>
                    </div>
                </div>
                <div className='menu__maney'>
                    <div>
                    <p className='cart delete'>удалить</p>
                    <h4 className='cart'>{don * pul}$</h4>
                    <h6 className='pul__vv cart'>1500$</h6>
                    </div>
                </div>
        </div>  
        <div className='items__blok'>
                <img className='xbox' src={img1}/>
                <div className='menu__text__btn'>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <div className='menu__obj'>
                    <p className='text__xbox'>Lorem ipsum dolor sit.</p>
                    <div className='calkul'>
                        <button className='btn2' onClick={minus2}>-</button>
                        <p>{don2}</p>
                        <button className='btn2' onClick={pilus2}>+</button>
                    </div>
                    </div>
                </div>
                <div className='menu__maney'>
                    <div>
                    <p className='cart delete'>удалить</p>
                    <h4 className='cart'>{don2 * pul2}$</h4>
                    <h6 className='pul__vv cart'>1500$</h6>
                    </div>
                </div>
        </div> 
        <div className='items__blok'>
                <img className='xbox' src={img2}/>
                <div className='menu__text__btn'>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <div className='menu__obj'>
                    <p className='text__xbox'>Lorem ipsum dolor sit.</p>
                    <div className='calkul'>
                        <button className='btn2' onClick={minus3}>-</button>
                        <p>{don3}</p>
                        <button className='btn2' onClick={pilus3}>+</button>
                    </div>
                    </div>
                </div>
                <div className='menu__maney'>
                    <div>
                    <p className='cart delete'>удалить</p>
                    <h4 className='cart'>{don3 * pul3}$</h4>
                    <h6 className='pul__vv cart'>1500$</h6>
                    </div>
                </div>
        </div>
                    <p className='ppp'>total {don * pul + don2 * pul2 + don3 * pul3}$</p>
        </div>
        </div>
    </div>
    )
}


export default User

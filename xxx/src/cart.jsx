// import React from "react"

// export default class Cart extends React.Component{
//     constructor(props){
//         super(props)
//             this.state={
//                 num:1,
//                 pul__cart1:100,
//                 pul__cart2:100,
//                 pul__cart3:2000,
//             }
//     }
//     render(){
//             let minus=()=>{
//                 if (this.state.num > 1) {
//                     this.setState({num:this.state.num-1})
//                 }
//             }
//             let pilus=()=>{
//                 this.setState({num:this.state.num+1})
//             }
//         return(
//             <>
//                <div className='items__blok'>
//                             <img className='xbox' src={this.props.img}/>
//                             <div className='menu__text__btn'>
//                                 <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
//                                 <div className='menu__obj'>
//                                 <p className='text__xbox'>Lorem ipsum dolor sit.</p>
//                                 <div className='calkul'>
//                                     <button className='btn2' onClick={minus}>-</button>
//                                     <p>{this.state.num}</p>
//                                     <button className='btn2' onClick={pilus}>+</button>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className='menu__maney'>
//                                 <div>
//                                 <p className='cart delete'>удалить</p>
//                                 <h4 className='cart'>{this.state.pul__cart1 * this.state.num}$</h4>
//                                 <h6 className='pul__vv cart'>1500$</h6>
//                                 </div>
//                             </div>
//                     </div>  
//             </>
//         )
//     }
// }


// export class Cart1 extends React.Component{
//     constructor(props){
//         super(props)
//             this.state={
//                 num:1,
//                 num:1,
//                 num:1,
//                 pul__cart1:12000,
//                 pul__cart2:3000,
//                 pul__cart3:9000,
//             }
//     }
//     render(){
//             let minus=()=>{
//                 if (this.state.num > 1) {
//                     this.setState({num:this.state.num-1})
//                 }
//             }
//             let pilus=()=>{
//                 this.setState({num:this.state.num+1})
//             }
//         return(
//             <>
//                <div className='items__blok'>
//                             <img className='xbox' src={this.props.img}/>
//                             <div className='menu__text__btn'>
//                                 <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
//                                 <div className='menu__obj'>
//                                 <p className='text__xbox'>Lorem ipsum dolor sit.</p>
//                                 <div className='calkul'>
//                                     <button className='btn2' onClick={minus}>-</button>
//                                     <p>{this.state.num}</p>
//                                     <button className='btn2' onClick={pilus}>+</button>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className='menu__maney'>
//                                 <div>
//                                 <p className='cart delete'>удалить</p>
//                                 <h4 className='cart'>{this.state.pul__cart2 * this.state.num}$</h4>
//                                 <h6 className='pul__vv cart'>1500$</h6>
//                                 </div>
//                             </div>
//                     </div>  
//             </>
//         )
//     }
// }


// export class Cart2 extends React.Component{
//     constructor(props){
//         super(props)
//             this.state={
//                 num:1,
//                 pul__cart1:1200,
//                 pul__cart2:100,
//                 pul__cart3:9000,
                
//             }
//     }
//     render(){
//             let minus=()=>{
//                 if (this.state.num > 1) {
//                     this.setState({num:this.state.num-1})
//                 }
//             }
//             let pilus=()=>{
//                 this.setState({num:this.state.num+1})
//                 // let xxx = this.state.pul__cart1 + this.state.pul__cart2 + this.state.pul__cart3
//             }
//         return(
//             <>
//                <div className='items__blok'>
//                             <img className='xbox' src={this.props.img}/>
//                             <div className='menu__text__btn'>
//                                 <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
//                                 <div className='menu__obj'>
//                                 <p className='text__xbox'>Lorem ipsum dolor sit.</p>
//                                 <div className='calkul'>
//                                     <button className='btn2' onClick={minus}>-</button>
//                                     <p>{this.state.num}</p>
//                                     <button className='btn2' onClick={pilus}>+</button>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className='menu__maney'>
//                                 <div>
//                                 <p className='cart delete'>удалить</p>
//                                 <h4 className='cart'>{this.state.pul__cart3 * this.state.num}$</h4>
//                                 <h6 className='pul__vv cart'>1500$</h6>
//                                 </div>
//                             </div>
//                     </div>  
//                 <p className="ppp">totle {}$</p>
//             </>
//         )
//     }
// }
import { useEffect,useState } from 'react';
import CartBtn from './cartBtn';
import Navigation from './Navigation';
function DataFetching(){
    //create a state variable to assign response JSON 
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async ()=>{
            const res=await fetch('https://fakestoreapi.com/products');
            console.log(res);
            console.log(res.ok);
            const resData=await res.json();
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
    })
    const convertToStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? '⭐'  : '';
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return '⭐' .repeat(fullStars) + '⭐'.repeat(emptyStars) + halfStar;
      
        
    }
    return(
//         <div>Fetching data
//         {/* {data.map((dataItem,index)=><div key={index}>{dataItem.title}</div>)} */}
//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Category</th>
//       <th scope="col">Description</th>
//       <th scope="col">Image</th>
//       <th scope="col">Price</th>
//     </tr>
//   </thead>
//   <tbody>
//   {data.map((dataItem,index)=><tr key={index}>
//     <td>{dataItem.id}</td>
//     <td>{dataItem.category}</td>
//     <td>{dataItem.description}</td>
//     <td><img src={dataItem.image} style={{width:'50px'}}/></td>
//     <td>{dataItem.price}</td>
//     </tr>
// )}
//     </tbody>
// </table>
//         </div>
<div className="card" style={{display:'flex',flexWrap:'wrap'}}>
<Navigation/>
<div className="row" >
{data.map((dataItem,index)=>(
    <div className="col-md-4" key={index}>
    <div className="card mb-4" style={{display:'flex',flexDirection:'column',height:'100%'}}>
  <img src={dataItem.image} class="card-img-top"width='55%' height='125px' objectFit='cover'/>
  <div class="card-body" flex='1' display='flex' flexDirection='column'justifyContent='space-between'>
    <h5 class="card-title">{dataItem.title}</h5>
    <p class="card-text" >{dataItem.category}</p>
    <p class="class-text">{convertToStars(dataItem.rating.rate)}</p>
    <p class="card-text"><b>${dataItem.price}</b></p>
    <CartBtn/> 
  </div>
</div>
</div>

    ))}
    </div>
    </div>
);
}
export default DataFetching;
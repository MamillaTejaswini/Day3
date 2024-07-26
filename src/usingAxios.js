import { useEffect,useState } from 'react';
import axios from 'axios';
function DataFetching(){
    //create a state variable to assign response JSON 
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async ()=>{
            const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
            const resData=await res.data;
            setData(resData);
            // console.log(res);
            // console.log(res.data);
        }
        fetchMyData();
    },[])
    return(
        <div>Fetching data
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">UserId</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataItem,index)=><tr key={index}>
    <td>{dataItem.id}</td>
    <td>{dataItem.userId}</td>
    <td>{dataItem.title}</td>
    <td>{dataItem.body}</td>
    </tr>
)}
    </tbody>
</table>
        </div>
    );
}
export default DataFetching;
import React,{useState} from "react"
import './App.css';
import Data from "../src/components/Data.json"




const App = () => {
 const [search,setSerch]=useState("")

  return (
<>
<h1>QARABAĞ FK OYUNÇULAR</h1>
<input className="input_search" type="text" placeholder=" OYUNÇULARI AXTAR..."

onChange={(event)=>setSerch(event.target.value)}
/>


<div className="parent_data">
{
Data.filter((item)=>{

if(search==""){

return item

}

else if(item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){

  return item
}


}).map((item)=>{
 return(
  <div className="Data" key={item.id}>
  <img src={item.image}  />
  <h2>{item.title}</h2>
  <p>{item.Description}</p>
  </div>)
})


}
</div>


</>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const Data=useLoaderData();
    // const [Data,setData]=useState([]);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Nickop21").then((Response)=>Response.json())
    //     .then((data)=>{
    //        setData(data)
    //     })

    // },[])
  return (
    <div style={{display:'flex' ,alignItems:'center', flexDirection:'column', gap:'20px', margin:'30px', background:'#ebeaea4f', padding:'20px'}}>
        <div>Followers : {Data.followers}</div>
        <img style={{borderRadius:'50%'}} src={Data.avatar_url} alt='' width={300}/>

    </div>
  )
}

export default Github

export  const githubInfoLoader=()=>{
    const resopnse=fetch("https://api.github.com/users/Nickop21")
    return resopnse;

}
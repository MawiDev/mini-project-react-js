import { useEffect, useState } from "react";
import ReturnButton from "./ReturnButton";
import axios from 'axios'

const url = "https://api.github.com/users"

export default function GitHubUsers() {
  const [users, setUsers] = useState([])
  
  const getData = async () => {
    const response =  await axios.get(url)
    setUsers(response.data)
  }

  useEffect(()=> {
    getData()
  },[])
  
  return (
    <div className="bg-neutral-800 w-full h-screen justify-center items-center overflow-y-auto p-6 py-0">
      <h1 className="text-5xl asher-punk font-extrabold text-center uppercase text-white my-6"
      style={{ color: "#bd00ff" }}>
        Github Users
      </h1>
      <div className="flex flex-wrap justify-center">
        {users.map((el) =>{
          return(
            <div key={el.id} className='bg-white m-6 flex flex-row justify-start items-center gap-12 w-[20%] p-4 rounded-lg'>
              <img width={'100'} className='rounded-full' src={el.avatar_url} alt={el.login} />
              <div>
                <h2 className="text-2xl font-medium">{el.login}</h2>
                <a href={el.html_url} className='underline text-blue-600'>Profile</a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="text-center flex justify-center">
        <ReturnButton />
      </div>
    </div>
  );
}


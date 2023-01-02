import React,{useState , useEffect} from 'react'
import "./apiPage.css"

function ApiPage() {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch((error)=>console.log(error))

  }, [])

  console.log(apiData);
  

  return (
    <div className="api-list">
      <ul>  
        {
          apiData.map((data) => {
              return <li key={data.id}>
                  <span> id: <b>{data.id}</b></span>
                <article>
                  <p className='text-name'>name: {data.name}</p>
                  <p className='text-name'>email: {data.email}</p>
                  <p className='text-name'>addres: {data.address.street}</p>
                </article>
              </li>            
          })
        }
      </ul>
    </div>
  )
}

export default ApiPage
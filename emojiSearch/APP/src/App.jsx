
import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
//this is the example of USE EFFECT & FETCH query
export default function app() {
  const source = ""
  const [resourceType, setresourcetype] = useState('Posts')
  const [items, setItems] = useState([])

  //useEffect if any type of changes ex. here it changes type of resource .
  //2nd parameter is whats chnaged we are chasing that value of parameter
  //if 2nd parameter is [] then it renders one time only no matter how many times changed
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

  }, [resourceType])



  return (
    <>
      <div>
        <h2>This is an example of fetch React</h2>
        <button style={{ background: 'aqua' }} onClick={() => setresourcetype('Posts')}>Post</button>
        <button style={{ background: 'aqua' }} onClick={() => setresourcetype('Users')}>Users</button>
        <button style={{ background: 'aqua' }} onClick={() => setresourcetype('Comments')}>Comments</button>

        <h2>{resourceType}</h2>

        <button style={{ background: 'aqua' }} onClick={() => setresourcetype("")}>Clear Data</button>
        {
          items.map(item => {
            if (resourceType != "")
              return <pre>{JSON.stringify(item)}</pre>//to loop through each item
          })
        }


      </div >



    </>
  )

}
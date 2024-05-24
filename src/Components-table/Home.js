import React from 'react'
import { Link,Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import './home.css'

export default function Home() {
  return (
    <div className='main'>
        <div className='div1'>
            <Link to='/project1'>Project 1</Link>
        </div>
        <div className='div2'>
            <Link to='/project2'>Project 2</Link>
        </div>
    </div>
  )
}

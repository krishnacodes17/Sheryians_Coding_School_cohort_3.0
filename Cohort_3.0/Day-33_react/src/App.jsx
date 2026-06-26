import React from 'react'
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
const App = () => {
  // //  ? this is to confusing to create any thing so here bable comes in picture 
  //  let ui = React.createElement("div",{},[
  //   React.createElement("h1",{},"This is h1"),
  //   React.createElement("h2",{},"This is h2"),
  //   React.createElement("h3",{},"This is h3")
  //  ])

  // return ui


  return (
    <>
      <h1>Hello thi is h1</h1>
      <h2>Hellow this is h2</h2>
      {Navbar("kela")}
      <Header name="Krishna" age="26" />

    <Sidebar name="rohit" >
      <h2>this is childeren of sidebar </h2>
    </Sidebar>

      <Footer fotervalue="this is fff"  footerage={36} /> 
    </>
  )
}

export default App

import React, { useState } from 'react';
import { useQuery, gql } from
"@apollo/client";
import logo from './logo.svg';
import { from } from '@apollo/client';
import './App.css';
import Component2 from './Component2';

const BOOK_QUERY = gql `
{
    book {
      author
      pages {
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;



function test() {
  // console.log(props.value);
  return <h1>Hello</h1>;
}
function Welcome(props) {
  // console.log(props.value);
  return <h1>Hello, {props.value}</h1>;
}

function App() {
const { data, loading, error } = useQuery(BOOK_QUERY);
const paragraph=" ";
const [state, setstate] = useState({data:""});
const [count, setclick] = useState(0);    
const [num, setNum] = useState(0);

const CounterI = () => {
   setNum (num+1);   
  //  alert(num);
}
const CounterD = () => {
    setNum (num-1);
}

const changeState = (a, b, c) => {
  c.map((x, i) =>{
    if(i == b){
      const w = x.value;
      setstate({data: {w, b, c}});
      // setstate({data: x.value});
    }
  })
}


const [Heading, setHeading] = useState("");
const renderHtml =()=> {
  setHeading("<h1>Hello</h1>");
}

  if (loading) 
    return "Loading...";
  if (error) return <pre> 
    {error.message}
  </pre>

// console.log(data.book.pages);
  return (
    <div className="container">
      <div className="row align-items-center my-5">
      <div className="col-lg-7" style={{padding: 50, backgroundColor: '#BCC6CC', 'whiteSpace': 'pre-wrap', 'overflowWrap': 'break-word', display: 'inline-block'}}>
    <h1>Book Solution</h1>

    <br />
    {data.book.pages.map((launch) => (
      // paragraph = launch.content
     
      // g = Array.from(launch.content.split(' '))
      Array.from(launch.content.split(' '))
      .map((word, index) => <span onClick={() => changeState(word, index, launch.tokens)}>{word}&nbsp;</span>)
    
      ))[num]}
      <br />
      
      <span onClick={() => CounterD() }>Prev</span> &nbsp;&nbsp;&nbsp;
      <span onClick={() => CounterI() }>Next</span>
      </div>
{/* <br /> */}
<div className="col-lg-5" style={{padding: 50, backgroundColor: '#BCC6CC', display: 'inline-block'}}>
    <Component2 data={state.data} />  
    
    {/* <i className={`glyphicon glyphicon-arrow-right`} aria-hidden="true" /> */}
    </div>
    </div>
    <i className={`glyphicon glyphicon-arrow-right`} aria-hidden="true" />
    </div>
    

 );
}

export default App;

import { useState } from "react"
import "./modal.css"

const Expense = (props)=>{
    const expenseind=props.expenseind
    const chabi=props.chabi
    const username=props.username
    const tripid=props.tripid
    const expensetype=props.expensetype
    const expense=props.expense
    const description=props.description
    const {ontypeselect}=props
    const {ondescription}=props
    const {closeall}=props
    const [addexpense,setaddexpense]= useState(expense)
    const [adddescription,setaddddescription]=useState(description)
  
     return(
        <>
        <div className="rounded-lg p-4 m-4 ">
      <h2 className="text-black font-bold text-2xl mb-4 text-center">Expense</h2>
      <input
        type="number"
        value={addexpense}
        onChange={(e) =>{
          setaddexpense(e.target.value)
        }}
        className="border-2 border-purple-500 p-2 rounded-lg outline-none w-full h-10"
        placeholder="Enter Expense"
      />
      <br/>
      <br/>
      <button onClick={()=>{ontypeselect(addexpense)}} className="flex justify-between items-center border-2 border-purple-500 rounded-lg w-full h-10">
      <div className="flex items-center">
    {expensetype==="Activities" && (
       <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="15" y1="5" x2="15" y2="7" />  <line x1="15" y1="11" x2="15" y2="13" />  <line x1="15" y1="17" x2="15" y2="19" />  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
    )}
    {expensetype==="Flight" && (
      <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2-4l-2 -4h3l2 2h4l-2 -7h3z" /></svg>
    )}
    {expensetype==="Lodging" && (
      <svg class="h-8 w-8 text-purple-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg>
    )}
    {expensetype==="Car Rental" && (
      <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg>
    )}
    {expensetype==="Public Transit" && (
      <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="2" />  <circle cx="18" cy="17" r="2" />  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />  <polyline points="16 5 17.5 12 22 12" />  <line x1="2" y1="10" x2="17" y2="10" />  <line x1="7" y1="5" x2="7" y2="10" />  <line x1="12" y1="5" x2="12" y2="10" /></svg>
    )}
    {expensetype==="Food" && (
      <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" /></svg>
    )}
    {expensetype==="Drinks" && (
       <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="15" x2="12" y2="21" />  <path d="M16 4l1 6a5 5 0 0 1 -10 0l1 -6z" />  <path d="M7 10a4 4 0 0 1 5 0a4 4 0 0 0 5 0" /></svg>
    )}
    {expensetype==="Sightseeing" && (
      <svg class="h-8 w-8 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="3" y1="10" x2="21" y2="10" />  <polyline points="5 6 12 3 19 6" />  <line x1="4" y1="10" x2="4" y2="21" />  <line x1="20" y1="10" x2="20" y2="21" />  <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />  <line x1="16" y1="14" x2="16" y2="17" /></svg>
    )}
    {expensetype==="Shopping"  && (
      <svg class="h-8 w-8 text-purple-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
    )}
    {expensetype==="Gas" && (
      <svg class="h-8 w-8 text-purple-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
    </svg>
    )}
    {expensetype==="Groceries" && (
      <svg class="h-8 w-8 text-purple-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
    ) }
    {expensetype==="others" && (
      <svg class="h-8 w-8 text-purple-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
    </svg>
    )}
      &nbsp;
      {expensetype}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
     </svg>
    </button> 
    <br/>
<div>
<textarea
 className="description  sec p-3 h-40 w-full border-2 border-purple-500 outline-none"
 spellCheck="false"
 placeholder="Anything to note"
value={adddescription}
onChange={(e)=>{setaddddescription(e.target.value);ondescription(adddescription)}}    
    />
    </div>
    <br/><br/>
    <div class="flex">
     <button  onClick={()=>{ontypeselect(addexpense);closeall()}} class="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-2">save</button>
     &nbsp;&nbsp;&nbsp;
     {addexpense &&(
     <button class="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-2">delete</button>
     )}
     </div>
    </div>
   
    </>
     )
}

export default Expense
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Form.css"

function Form() {

const obj = {
  header:"",
  details:""
}

const [data,setData]=useState(obj)

const [newData,setNewData]=useState([])

const handleChange=(e)=>{
    
  setData({...data,[e.target.name]:e.target.value})
}

const handlesubmit=(e)=>{

  e.preventDefault();
  setNewData([...newData,data])
  setData(obj)
}

  return (
    <div>
      
    <form onSubmit={handlesubmit} style={{border:"1px solid black",width:"25%", height:"300px",margin:"25px 0 0 30px"}} className='item'>
      <h2 className='header'>Add Section</h2>
      <div className='ContDiv'>
        <label>Section Header</label><br/>
        <input value={data.header} name='header' type='text' onChange={handleChange} />
      </div>
      <div className='ContDiv'>
        <label className='label'>Section Details</label><br/>
        <textarea value={data.details} name='details' type='text' onChange={handleChange} className='box' />
      </div >
      <button className='btn' type='submit'>Add</button>
    </form>

    <div>
<div className='list'>   
    <Accordion className='AccoDiv'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Section 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {newData.map((item)=>{
        return(
          <Accordion className='AccoDiv'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.header}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             {item.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
        )
      })}

    </div>
</div>

    </div>
  )
}

export default Form;
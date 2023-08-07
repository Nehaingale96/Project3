// import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "./Form.css"

// function Form() {

// const obj = {
//   header:"",
//   details:""
// }

// const [data,setData]=useState(obj)

// const [newData,setNewData]=useState([])

// const handleChange=(e)=>{

//   setData({...data,[e.target.name]:e.target.value})
// }

// const handlesubmit=(e)=>{

//   e.preventDefault();
//   setNewData([...newData,data])
//   setData(obj)
// }

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-6'>
//     <form onSubmit={handlesubmit} style={{border:"1px solid black",width:"50%", height:"350px",margin:"25px 0 0 30px"}} className='item'>
//         <h2 className='header'>Add Section</h2>
//         <div className='ContDiv'>
//           <label>Section Header</label><br/>
//           <input value={data.header} name='header' type='text' onChange={handleChange} />
//         </div>
//         <div className='ContDiv'>
//           <label className='label'>Section Details</label><br/>
//           <textarea value={data.details} name='details' type='text' onChange={handleChange} className='box' />
//         </div >
//         <button className='btn' type='submit'>Add</button>
//     </form>
//       </div>
// <div className='list col-6'>   
//     <Accordion className='AccoDiv'>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Section 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       {newData.map((item)=>{
//         return(
//           <Accordion className='AccoDiv'>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography>{item.header}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//              {item.details}
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         )
//       })}

//     </div>
// </div>

//     </div>
//   )
// }

// export default Form;

import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Form.css'; // Your custom CSS file for additional styling
import { AccordionDetails, Typography, AccordionSummary, Accordion } from '@mui/material';

function Form() {
  const obj = {
    header: '',
    details: '',
  };

  const [data, setData] = useState(obj);
  const [newData, setNewData] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData([...newData, data]);
    setData(obj);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit}
            className="border p-4 rounded"
            style={{ width: '60%', height: '350px', margin: '25px 0 0 120px' }}
          >
            <h2 className="mb-3">Add Section</h2>
            <div className="mb-3">
              <label htmlFor="header" className="form-label">
                Section Header
              </label>
              <input
                value={data.header}
                name="header"
                type="text"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Section Details
              </label>
              <textarea
                value={data.details}
                name="details"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary  btn-lg btn-block">
              Add
            </button>
          </form>
        </div>
        {/* <div className="col-md-6">
          {newData.map((item, index) => (
            <div key={index} className="accordion mb-3">
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {item.header}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse show"
                  aria-labelledby={`heading${index}`}
                >
                  <div className="accordion-body">{item.details}</div>
                </div>
              </div>
            </div> */}
        {/* ))} */}
        {/* </div> */}

        <div className=' col-6 mt-4' style={{border:'1px solid black'}}>
          <Accordion className='AccoDiv' style={{width:'600px',marginLeft:'16px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Section 1</Typography>
            </AccordionSummary>
            
            <AccordionDetails>
              <Typography>
                lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui ofcia deserunt mollit anim id est
                laborum.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="col-12 collpase" >
          {newData.map((item) => {
            return (
              <Accordion className='AccoDiv'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
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
    </div>
  );
}

export default Form;


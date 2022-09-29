import React from 'react'

export default function NewsLetter() {
  return (
    <div id="news" style={{padding: '50px'}}>
    <br/>
    <h2 className="text-center" style={{color: 'white'}}>Subscribe to our Newsletter</h2>
    
    <div className="input-group mx-auto justify-content-center" style={{width: "400px"}}>
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1" style={{backgroundColor: 'black',color: 'lightgreen'}}>Email:</span>
  </div>
  <input type="text" className="form-control" placeholder="Username@example.com" aria-label="Username" aria-describedby="basic-addon1"/>
  <button type="button" className="btn btn-dark">✔</button>
</div>

<br></br>
    </div>
  )
}

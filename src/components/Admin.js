import React,{useState,useRef} from 'react'

export default function Admin() {
const initialTiles=[
{model:"Jet-A",price:4684,quantity:523},
{model:"Jet-A1",price:8723,quantity:713},
{model:"Jet-B",price:9273,quantity:392},
{model:"JP-1",price:3762,quantity:1000},
{model:"AvGas 100",price:1657,quantity:376},
{model:"AvGas 100LL",price:2167,quantity:824},
{model:"AvGas 82UL",price:4831,quantity:238},]

const modelRef=useRef();
const priceRef=useRef();
const quantityRef=useRef();

const[tiles,setTiles]=useState(initialTiles);
function addTile(e)
{
    e.preventDefault();
    const tile={
        model:modelRef.current.value,
        price:priceRef.current.value,
        quantity:quantityRef.current.value,
    }
    setTiles([...tiles,tile]);
}
  return (
    <>
    <center>
        <h3 style={{font:'-moz-initial', paddingTop:'5px', paddingBottom:'5px', backgroundColor:'#e36c1d'}}><strong>Admin Portal</strong></h3>
    <div style={{border:'1px solid',marginLeft:'485px',marginRight:'485px',marginTop:'40px',backgroundColor:'#e8e4e4', borderRadius:'3%'}}>
        <form onSubmit={addTile}>
    <h4 style={{marginTop:'10px'}}>Add Product</h4>
  <div class="form-group"><br></br>
    <label for="name"><strong>Model</strong></label>
    <input type="text" ref={modelRef} style={{border:'1px solid',marginLeft:'5px'}}/>
  </div>
  <div class="form-group">
    <label for="name"><strong>Price</strong></label>
    <input type="text" ref={priceRef} style={{border:'1px solid',marginLeft:'5px'}}/>
  </div>
  <div class="form-group">
    <label for="name"><strong>Quantity</strong></label>
    <input type="text" ref={quantityRef} style={{border:'1px solid',marginLeft:'5px'}}/>
  </div>
            <div>
            <button type="submit" class="btn btn-primary" style={{marginBottom:'10px',backgroundColor:'#e36c1d', paddingTop:'3px',paddingBottom:'3px',paddingLeft:'6px',paddingRight:'6px'}}>ADD</button>
            </div>
        </form>
    </div>
    </center>

    <div className='container-fluid p-5'>
        <div className='d-flex flex-wrap'>
        
        {tiles.map((tile,index)=>{
            return(

                
                <div class="card" key={index} style={{color:'black', background:'white', width:"300px", margin:"auto" , padding:"10px", marginBottom:"40px",border:'1px solid'}}>
                    
                            
                        <div class="card-header" style={{backgroundColor:'grey'}}>
                            <strong>Product {index+1}</strong>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Model : {tile.model}</p>
                            <p class="card-text">Price : ${tile.price}</p>
                            <p class="card-text">Quantity : {tile.quantity}KL</p>
                        </div>
                        
                
            </div>
            
            )
            }
        )
        }
       
    </div>
    </div>
    </>
  )
}
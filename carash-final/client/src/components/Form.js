import React, {useState , useEffect} from "react"
import axios from "axios"

export default (props)=> {
    const {initialName , initialType , initialDescription , initialMileage, initialYear , initialColor , onSuccess , buttonValue} = props;
    const [name , setName] = useState(initialName);
    const [type , setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const[mileage , setMileage] = useState(initialMileage);
    const[year , setYear] = useState(initialYear);
    const[color , setColor] = useState(initialColor);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSuccess({name , type , description , mileage , year , color});
    }
    const styles= {
        form :{
            "margin" : "15px",
            "font-style" : 'oblique' ,
            "font-weight": "60px",
            
        }
    }






    return(
        <div className="container" >
    <form style={styles.form} onSubmit={onSubmitHandler}>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Name</label>
      <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
      <label for="validationCustom02">Type</label>
      <input type="text" className="form-control"  value={type} onChange={(e)=> setType(e.target.value)}   />
      <label for="validationCustom01">Description</label>
      <input type="text" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)} />
      <label for="validationCustom02">mileage</label>
      <input type="number" className="form-control"  value={mileage} onChange={(e)=> setMileage(e.target.value)}  />
      <label for="validationCustom02">Year Of Built</label>
      <input type="number" className="form-control"  value={year} onChange={(e)=> setYear(e.target.value)}/>
      <label for="validationCustom02">color</label>
      <input type="text" className="form-control"  value={color} onChange={(e)=> setColor(e.target.value)} />
      <button type="submit" className="btn btn-primary" >{buttonValue}</button>
      
     </div>
     </div>
    
    
   
  
    </form>

        </div>
    )
}
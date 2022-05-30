import React, { useState } from 'react';

const Form = () => {
    const [inputs, setInputs] = useState('');
    const [names, setNames] = useState([]);
    console.log(names)
    const handleSubmit = (e) => {
        e.preventDefault();
        setNames([...names,{id:inputs.length, inputs}])
        setInputs('');
    }

    function handleDelete(id){
      setNames(names.filter((el)=>el.id !== id))
    }

    
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setInputs(e.target.value)} type="text" name="name" value={inputs}/>
                <button>Click Here</button>
            </form>
            <ul>
            {
                names.map(name=> <li key={name.id}>{name.inputs} <button onClick={()=>handleDelete(name.id)}>Delete</button></li>)
            }
            </ul>
        </div>
    );
};

export default Form;
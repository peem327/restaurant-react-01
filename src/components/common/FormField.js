import React from 'react';

export default ({input, label, type, required, meta}) => {

    return (
      <div className="form-group"> 
          <label className= "title">{label}</label>
          <input {...input} type={type} className= "form-control" required={required}/>
            {meta.error && meta.touched &&
          (
          <div className="mt-2 text-danger title">{meta.error}</div>
          )
          }
      </div>
    );
}

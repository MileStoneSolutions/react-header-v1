
import React from 'react'; 
//css
import './HeaderSearch.css'



const HeaderSearch =(props)=>{
  return(
    <div className="top-header-search col-md-7">
<form className="">
    <div className="form-row">
    <div className=" col-md-11">
        <div className="row">
        <div className="input input-group-sm col-md-10">
        <input type="text" className="form-control" id="inlineFormInputName2" placeholder="I am looking for" />
      </div>
      <div className="button col-md-2">
        <button type="submit" className="btn btn-primary mb-2">Search</button>
        </div>
        </div>
        </div>
        </div>
      </form>
</div>
  )


};
export default HeaderSearch;

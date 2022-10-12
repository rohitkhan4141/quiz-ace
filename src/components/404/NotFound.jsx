import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='w-50 mx-auto text-center my-5'>
      <h1>Page is not Found</h1>
      <Link className='btn btn-primary' to='/'>
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;

import React from 'react';
import Spinner from "../src/assets/images/spinner.gif"
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 backdrop-blur">
      <div className="">
        <img src={Spinner} alt="Loader Image" />
      </div>
    </div>
  );
}

export default Loader;
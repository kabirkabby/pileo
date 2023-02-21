import React from 'react';
import { Rings } from 'react-loader-spinner';

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Rings
            color="#4a1675"
            height={200}
            width={250}
            className="m-15"
        />

        <p className='text-lg text-center pt-100'>{message}

        </p>
        </div>
  )
}

export default Spinner
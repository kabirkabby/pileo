import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({searchTerm, setSearchTerm, user}) => {
  const navigate = useNavigate();



  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-4 rounded-lg bg-neutral-100 border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
        onFocus={() => navigate('/search')}
        className="p-2 w-full bg-neutral-100 outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to='create-pin' className="bg-purple-800 text-white rounded-full w-12 h-12 md:w-12 md:h-12 flex justify-center items-center">
           <IoMdAdd/>
        </Link>

      </div>
    </div>
  )
}

export default Navbar
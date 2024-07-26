import React from "react";
import list from "../../public/list.json";
import Cards from './cards'
import {Link} from 'react-router-dom'
function course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here !</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            recusandae unde animi, ipsa repellat rem excepturi quas
            exercitationem aspernatur vitae ea rerum corporis repellendus,
            necessitatibus ullam, labore adipisci placeat obcaecati nemo
            deserunt? Tempore, maiores, dolore, culpa eligendi natus tempora
            saepe in officiis tenetur autem ipsa consequuntur laudantium
            doloribus inventore quidem.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default course;

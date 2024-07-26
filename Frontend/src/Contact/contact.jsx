import React from "react";
// import { useForm } from "react-hook-form";
function contact() {
  return (
    <>
        <div className="flex items-center justify-center min-h-screen ">
          <form className="">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* passward */}
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <input
                type="message"
                placeholder="enter your comment"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className=" mt-4 flex justify-center">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                submit
              </button>
            </div>
          </form>
        </div>
    </>
  );
}

export default contact;

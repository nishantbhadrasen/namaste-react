import { useEffect } from "react";
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-3 m-4">Contact us Page</h1>
      <form>
        <input
          type="text "
          className=" border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text "
          className=" border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-50 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

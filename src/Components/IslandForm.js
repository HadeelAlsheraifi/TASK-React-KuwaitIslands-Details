import { useState } from "react";

export default function IslandForm({ island }) {
  const [visitorname, setVisitorName] = useState("");
  const [mobile, setMobile] = useState("");

  const bookPopUp = () => {
    window.confirm(`
   ${visitorname}
   ${mobile}
   ${island.name}`);
  };

  const changeVisitorName = (e) => {
    setVisitorName(e.target.value);
  };

  const changeMobile = (e) => {
    setMobile(e.target.value);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input onChange={changeVisitorName} placeholder="Type Full Name" />
      <input onChange={changeMobile} placeholder="Type Phone Number" />
      <button className="book" onClick={bookPopUp}>
        Book for today!
      </button>
    </div>
  );
}

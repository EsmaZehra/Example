import { useState } from "react";
import "./UserCardStyle.css";
function UserCar({ fullname, email, phonenumber, age }) {
  const [toogleShowMore, settoogleShowMore] = useState(false);
  function toogleShowMoreClicked() {
    settoogleShowMore(!toogleShowMore);
  }

  return (
    <div className="UserCardMain">
      <img
        className="image1"
        src={require("./../../images/IMG_4292.JPG")}
        alt=""
      />
      <h4 className="userCardFullname">{fullname}</h4>
      <h5 className="userCardEmail">{email}</h5>
      <button className="buttonToogle" onClick={toogleShowMoreClicked}>
        {toogleShowMore ? "show less..." : "show more..."}
      </button>
      {!toogleShowMore || (
        <div>
          <h5 className="userCarPhoneNumber">{phonenumber}</h5>
          <h5 className="userCarPhoneNumber">{age} years old</h5>
        </div>
      )}
    </div>
  );
}

export default UserCar;

import { useState } from "react";
import "./LoginStyle.css";
import UserCar from "../UserCard/UserCar";
function Login() {
  const [inputUsername, setinputUsername] = useState("");
  const [inputPassword, setinPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const [users, setUsers] = useState([
    {
      name: "Esma",
      username: "es",
      age: 22,
      email: "esma@gmail.com",
      phoneNumber: "55555555",
      password: 123,
      profilePic: require("./../../images/IMG_4292.JPG"),
    },
    {
      name: "Tugay",
      username: "tug",
      age: 25,
      email: "tugay@gmail.com",
      phoneNumber: "55555555",
      password: 456,
    },
    {
      name: "zehra",
      username: "zeh",
      age: 25,
      email: "zehra@gmail.com",
      phoneNumber: "55555555",
      password: 789,
    },
  ]);
  function buttonClicked() {
    // console.log(inputUsername, inputPassword);
    // console.log(users);

    users.map((user) => {
      if (user.username == inputUsername && user.password == inputPassword) {
        setisLogin(true);
      }
    });
  }

  return (
    <div>
      <div>
        {isLogin ? (
          users.map((item) => {
            return (
              <UserCar
                fullname={item.username}
                email={item.email}
                phonenumber={item.phoneNumber}
                age={item.age}
              ></UserCar>
            );
          })
        ) : (
          <div className="LoginMainDiv">
            <label htmlFor="">
              {"Username: "}
              <input
                className="input1"
                placeholder="write your username..."
                type="text"
                value={inputUsername}
                onChange={(e) => {
                  setinputUsername(e.target.value);
                }}
              />
              {"Passwword: "}
            </label>

            <input
              className="input1"
              placeholder="write your password..."
              type="password"
              value={inputPassword}
              onChange={(e) => {
                setinPassword(e.target.value);
              }}
            />
            <button onClick={buttonClicked}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

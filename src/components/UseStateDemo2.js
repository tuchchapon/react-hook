import React, { useState } from "react";

export default function UseStateDemo2() {
  const [account, setAccount] = useState({ username: "", Password: "" });
  return (
    <div style={{textAlign:"center"}}>
      <form >
        <p>**{JSON.stringify(account)}</p>
        <input
          type="text"
          placeholder="Username"
          value={account.username}
          onChange={(e) => {
            setAccount({...account, username: e.target.value,});
          }}
        ></input>
        <br />
        <input
          type="text "
          placeholder="Password"
          value={account.Password}
          onChange={(e) => {
            setAccount({...account,  Password: e.target.value });
          }}
        ></input>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(JSON.stringify(account));
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount({ username: "", Password: "" });
          }}
        >
          clear
        </button>
      </form>
    </div>
  );
}

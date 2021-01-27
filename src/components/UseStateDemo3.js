import React, { useState } from "react";

export default function UseStateDemo3() {
  const initiaState = {username:"",password:""}
  const [account, setAccount] = useState({ username: "", password: "" });
  const [accountList, setaccountList] = useState ([]);
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        {/* <p>**{JSON.stringify(account)}</p> */}
        <p>**{JSON.stringify(accountList)}</p>
        <input
          type="text"
          placeholder="Username"
          value={account.username}
          onChange={(e) => {
            setAccount({ ...account, username: e.target.value });
          }}
        ></input>
        <br />
        <input
          type="text "
          placeholder="password"
          value={account.password}
          onChange={(e) => {
            setAccount({ ...account, password: e.target.value });
          }}
        ></input>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setaccountList([...accountList,{...account,index: accountList.length}])
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount({initiaState});
          }}
        >
          clear
        </button>
      </form>
      <ul>
          {accountList.map(item=><li key={item.index}>username:{item.username},password:{item.password}</li>)}
        
      </ul>
    </div>
  );
}

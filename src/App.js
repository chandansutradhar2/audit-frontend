import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { LoginComponent } from "./Login";
import { Signup } from "./Signup";
import { Header } from "./Header";
import { AuditList } from "./AuditList";
import { AboutUs } from "./AboutUs/Aboutus";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("chandan");

  const [auditLogs, setAuditLogs] = useState([
    {
      createdOn: "01/01/2023:10:20:34",
      createdBy: "chandan",
      action: "CREATE",
      description: "a merchant was created",
    },
    {
      createdOn: "01/01/2023:13:20:34",
      createdBy: "chandan",
      action: "UPDATE",
      description: "a merchant was updated",
    },
    {
      createdOn: "01/01/2023:14:20:34",
      createdBy: "chandan",
      action: "DISABLED",
      description: "a merchant was disabled",
    },
  ]);

  console.log(typeof auditLogs);

  const removeAuditLog = (index) => {
    const newAuditLogs = [...auditLogs]; //syntax to clone or make a copy 
    newAuditLogs.splice(index, 1);
    setAuditLogs(newAuditLogs);
  };

  return (
    <div>
      <h4>Welcome to Audit Management System </h4>
      <h5> {userName} </h5>
      <AuditList
        auditRecords={auditLogs}
        userName={userName}
        chandan={removeAuditLog}
        counter={10}
      />
      <input
        type="text"
        value={userName}
        placeholder="enter username"
        onChange={(ev) => {
          setUserName(ev.target.value);
        }}
      />
    </div>
  );
}

export default App;

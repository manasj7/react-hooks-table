import React, { useState, useEffect } from "react";
import axios from "axios";

//class defined specifically for having a navigation bar linked to appropriate components
export default function Table() {
  const [items, setItems] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      //console.log(data)
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {items
                ? items.data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.street}</td>
                      </tr>
                    );
                  })
                : false}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

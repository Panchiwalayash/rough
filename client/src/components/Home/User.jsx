import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");

  const url = process.env.REACT_APP_SERVER;
  let i = 0;
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`${url}/api/auth`);
      setUsers(data.users);
      setDisplay(data.users);
    };
    getUser();
    console.log(i++);
  }, []);

  useEffect(() => {
    const filterUser = () => {
      const newUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search);
      });
      setDisplay(newUsers);
    };
    filterUser();
  }, [search]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {display.map((user) => {
            return (
              <li key={user.id}>
                {user.name}, {user.email}, {user.password}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default User;

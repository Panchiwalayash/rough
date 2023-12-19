import React, { useEffect, useState } from "react";
import axios from 'axios'

const Detail = () => {
  const [userDetail, setUserDetail] = useState({});

  const port = process.env.REACT_APP_SERVER;

  useEffect(() => {
    const getDetail = async() => {
      const { data } = await axios.get(`${port}/api/detail`, {
        headers: {
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZGU0MjY4NDBlMTIxMmZiN2I3Y2JhIn0sImlhdCI6MTcwMjc0OTIyM30.8Hasu5bj1TW79oB50-IiL5_WCk2s4r8NPBh6cMhGcqw"
        }
      })
      setUserDetail(data)
    }
    getDetail()
  }, []);

  return (
    <div>
            <div>Name: {userDetail.fullName}</div>
            <div>Age:{userDetail.age}</div>
        
    </div>
  );
};

export default Detail;

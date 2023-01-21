import React, { useState, useEffect } from "react";

// fetch test. fruit database와는 관계없는 파일.
const Fetch = () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(url).then((response) =>
      response.json().then((data) => setUser(data.name))
    );
  }, []);

  return <div>{user}</div>;
};

export default Fetch;

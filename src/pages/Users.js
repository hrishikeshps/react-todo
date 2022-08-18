import React, { useEffect, useState} from 'react'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                setUsers(result)
            //   setIsLoaded(true);
            //   setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            //   setIsLoaded(true);
            //   setError(error);
            }
          )
      }, [])

  return (
    <div>Users</div>
  )
}


export default Users
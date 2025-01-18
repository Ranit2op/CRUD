


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const UserProfile = () => {
    const location=useLocation();
  // useParams hook allows access to the dynamic part of the URL
  const { id } = useParams();
  const [user, setUser] = useState<any>();

  // Simulate fetching user data based on ID
  useEffect(() => {
    const fetchUser =() => {
      // Simulate an API call or fetching data based on the `id`
      const users:any[] = [
        { id: '1', name: 'John Doe', age: 28, country: 'USA' },
        { id: '2', name: 'Jane Smith', age: 34, country: 'Canada' },
        { id: '3', name: 'Alice Johnson', age: 25, country: 'UK' },
        { id: '4', name: 'Bob Brown', age: 30, country: 'Australia' }
      ];

      // Find the user based on the ID from the URL
      const foundUser:any = users.find((user:any) => user.id === id);
      setUser(foundUser);
    };

    fetchUser();
  }, [id]);

  // Loading state while the user data is being fetched
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        {/* <h2>Your Location is : {location.pathname}</h2> */}
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
    </div>
  );
};

export default UserProfile;

import { useEffect, useState } from "react";
import AuthNavbar from "./AuthNavbar/AuthNavbar";
import NotAuthNavbar from "./NotAuthNavbar/NotAuthNavbar";


function AdminNavbar(props) {

  const [username, setName] = useState('');
  

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });

        const content = await response.json();

        setName(content.username);
      }
    )();
  });

  if (!username) {
    
    return <NotAuthNavbar/>;
    
  }else return <AuthNavbar />;

 
}
export default AdminNavbar;



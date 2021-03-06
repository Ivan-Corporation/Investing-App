
import AuthNavbar from "./AuthNavbar/AuthNavbar";
import NotAuthNavbar from "./NotAuthNavbar/NotAuthNavbar";


function AdminNavbar(props) {

  // const { token, setToken } = useToken();
  


  // if (!token) {
    
    return <NotAuthNavbar/>;
    
  // }else return <AuthNavbar setToken={setToken}/>;

 
}
export default AdminNavbar;



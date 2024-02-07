import NavBar1 from "./NavBar1"
import Triplist from "./Triplist"
import { useLocation } from 'react-router-dom';
function Logined(){
    const location = useLocation();
    const result1 = location.state.result1;
    const username=location.state.username
    const photourl=location.state.photourl
    console.log(result1,"this is triplist")
    return(
        <div>
            <NavBar1 username={username}/>
            <Triplist result1={result1} username={username} photourl={photourl}/>
        </div>
    )
}
export default Logined
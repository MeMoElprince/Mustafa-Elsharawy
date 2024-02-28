import Navbar from './Navbar/Navbar';
import Body from './Body/Body';

const Root = () => {
    return ( 
    
        <div className="h-screen   text-pallete-300 lg:grid lg:grid-cols-5">
            <Navbar />
            <Body />
        </div>
     );
}

export default Root;

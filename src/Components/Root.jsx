import Navbar from './Navbar/Navbar';
import Body from './Body/Body';


const root = () => {
    return ( 
        <div className="h-screen border-4 border-red lg:grid lg:grid-cols-5">
            <Navbar />
            <Body />
        </div>
     );
}

export default root;

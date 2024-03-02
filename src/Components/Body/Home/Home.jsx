import MyCard from "./MyCard";
import Slider from './Slider';

import { useEffect } from "react";

const Home = ({prev}) => {
    
    // const location = useLocation();
    // const [prevLocation, setPrevLocation] = useState(location.pathname.split('/')[1]);

    
    useEffect(() => {
        
        prev(1);

    }, []);

    return ( 
        <div className="home flex flex-col pb-6  h-full">
            <div className="grid place-items-center justify-center md:grid-cols-2 p-5 md:p-10 h-full md:gap-3 gap-6" >
                <div className="px-10 order-2 gap-2 flex flex-col justify-center items-center md:order-1 text-center">
                    <div className="">
                        <h1 className="clamp   lg:text-7xl sm:text-5xl text-4xl"> Mustafa Hazem Elsharawy <div className="loader  inline-flex translate-y-2 lg:w-14 w-10"></div> </h1>
                        
                    </div>
                    <h1 className="lg:text-4xl sm:text-3xl text-2xl"> Full Stack Web Developer </h1>
                    <h1 className="lg:text-2xl text-xl"> I am a senior cs student 😀 </h1>
                </div>
                <MyCard className="order-1 lg:max-h-200 lg:max-w-200 max-w-100 max-h-100 md:order-2 aspect-[3.2/4]"/>
            </div>
            
            <Slider />

        </div>
     );
}
 
export default Home;
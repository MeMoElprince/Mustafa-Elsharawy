// import dark from '../../Imgs/dark.png';
// import light from '../../Imgs/light.png';

import darkA from '../../Imgs/darkA.png';
import lightA from '../../Imgs/lightA.png';

const Mode = ({className}) => {
    return ( 
        <div className={"lg:grid grid-cols-2 place-content-center min-h-16 h-16 lg:w-3/5  2xl:w-2/4 bg-pallete-300 rounded-3xl overflow-hidden " + className}>
            <img src={darkA} alt="" className="justify-self-center w-12 h-12  p-1 rounded-full bg-pallete-200 hover:bg-pallete-200 hover:cursor-pointer" />
            <img src={lightA} alt="" className="justify-self-center w-12 h-12 p-1 rounded-full hover:bg-pallete-200 hover:cursor-pointer" />
        </div>
     );
}
 
export default Mode;
import img from '../../../Imgs/me.jpeg';

const MyCard = ({className}) => {
    return ( 
        <div className={"card flex justify-center items-center  overflow-hidden rounded-3xl dark:shadow-md shadow-md dark:shadow-pallete-400 shadow-pallete2-400 " + className}>
            <img className="w-full h-full  " src={img} alt="pic" />
        </div>
     );
}
 
export default MyCard;
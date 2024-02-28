import img from '../../../Imgs/photo.jpg';

const MyCard = ({className}) => {
    return ( 
        <div className={"card flex justify-center items-center  overflow-hidden rounded-3xl " + className}>
            <img className="w-full h-full " src={img} alt="pic" />
        </div>
     );
}
 
export default MyCard;
import img from '../../../Imgs/photo.jpg';

const MyCard = ({className}) => {
    return ( 
        <div className={"card border-green-400 border-4  flex justify-center items-center " + className}>
            <img className="w-full h-full" src={img} alt="pic" />
        </div>
     );
}
 
export default MyCard;
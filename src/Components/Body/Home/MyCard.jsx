import img from '../../../Imgs/Me-2024.jpg';

const MyCard = () => {
    return (
        <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden dark:ring-2 ring-2 dark:ring-pallete-400 ring-pallete2-400 dark:ring-offset-4 ring-offset-4 dark:ring-offset-pallete-100 ring-offset-pallete2-100">
                <img className="w-full h-full object-cover" src={img} alt="Mustafa Elsharawy" />
            </div>
            <div className="absolute -z-10 top-3 left-3 w-full h-full rounded-2xl dark:bg-pallete-300 bg-pallete2-300" />
        </div>
    );
}

export default MyCard;

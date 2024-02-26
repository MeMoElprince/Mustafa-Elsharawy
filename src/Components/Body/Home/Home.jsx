import MyCard from "./MyCard";

const Home = () => {
    return ( 
        <div className="home grid border-4 border-blue-400 h-full">
            <div className="grid place-items-center md:grid-cols-2 p-5 md:p-10 h-full border-4 md:gap-3 gap-6 border-gray-900 " >
                <div className="px-10 order-2 md:order-1">
                    <h1 className="text-5xl"> Mustafa Hazem Elsharawy </h1>
                    <h1 className="text-3xl"> Full Stack Web Developer </h1>
                    <h1 className="text-xl"> I am an undergraduate cs student </h1>
                </div>
                <MyCard className="order-1 max-h-100 max-w-100 md:order-2 aspect-[3/4]"/>
            </div>

            <div className='parent border-4 border-yellow-400 '>
            
            </div>

        </div>
     );
}
 
export default Home;
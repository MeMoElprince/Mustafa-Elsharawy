// import linkedIn from '../../Imgs/linkedIn.png';
// import github from '../../Imgs/github.png';
import githubL from '../../Imgs/githubL.png';
import linkedInL from '../../Imgs/linkedInL.png';


const Footer = ({className}) => {
    return ( 
        <div className={" footer lg:flex flex-col  items-center justify-center my-3  h-fit w-full xl:w-3/4 2xl:w-3/5  gap-7 " + className}>
            <div className="social grid grid-cols-2 w-full h-12 ">
                <img src={linkedInL} alt="linkedInL" className=" h-full rounded-full justify-self-center" />
                <img src={githubL} alt="githubL" className=" h-full rounded-full justify-self-center" />
            </div>

            <div className="copyright flex flex-wrap justify-center text-center items-center text-white text-sm">
                <p>© 2024 Mustafa Hazem Elsharawy</p>
            </div>
        </div>
     );
}
 
export default Footer;
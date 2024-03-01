import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

import { Route, Routes } from 'react-router-dom';


const Body = () => {
    return ( 
        <div className="dark:bg-pallete-200 bg-pallete2-200 overflow-y-auto dark:text-pallete-400 text-pallete2-400 flex w-full justify-center items-center min-h-full lg:col-span-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-projects" element={<Projects />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/contact-me" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
     );
}
 
export default Body;
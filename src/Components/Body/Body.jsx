import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const movement = (prev, current) => {
  if (prev > current) {
    // both go down
    return -1;
  } else if (prev === current || prev === null) {
    // no movement
    return 0;
  } else if (prev < current) {
    // both go up
    return 1;
  }
  return 10;
};

const Layout = ({ children, prev, current }) => {
  const animationType = movement(prev, current);
  
  const variantDown = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .8,
      }
    }
  };

  const variantUp = {
    initial: {
      y: '-100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .8,
      }
    }
  };

  const variantStop = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: .5,
      }
    },
  };

  
  return (
    <motion.div

      key={current}
      className="w-full h-full"
      variants={
        animationType === -1
          ? variantUp
          : animationType === 1
          ? variantDown
          : variantStop
      }
      initial="initial"
      animate="animate"
      
    exit={{
      opacity: 0,
      transition: {
        duration: .5,
      }
    }}
      
      
    >
      {children}
    </motion.div>
  );
};

const Body = () => {
  const [prev, setPrev] = useState(null);
  const location = useLocation();
  return (
    <div 
    className="dark:bg-pallete-200 bg-pallete2-200 overflow-y-auto dark:text-pallete-400 text-pallete2-400 flex w-full justify-center items-center min-h-full lg:col-span-4">
      <AnimatePresence mode="wait"  >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Layout current={1} prev={prev}>
                <Home prev={setPrev} />
              </Layout>
            }
          />
          <Route
            path="/about-me"
            element={
              <Layout current={2} prev={prev}>
                <About prev={setPrev} />
              </Layout>
            }
          />
          <Route
            path="/my-projects"
            element={
              <Layout current={3} prev={prev}>
                <Projects prev={setPrev} />
              </Layout>
            }
          />
          <Route
            path="/contact-me"
            element={
              <Layout current={4} prev={prev}>
                <Contact prev={setPrev} />
              </Layout>
            }
          />
          <Route
            path="/*"
            element={
              <Layout current={5} prev={prev}>
                <NotFound prev={setPrev} />
              </Layout>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Body;

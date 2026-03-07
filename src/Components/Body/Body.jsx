import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

const movement = (prev, current) => {
  if (prev > current) return -1;
  if (prev === current || prev === null) return 0;
  if (prev < current) return 1;
  return 0;
};

const Layout = ({ children, prev, current }) => {
  const animationType = movement(prev, current);

  const variantDown = {
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const variantUp = {
    initial: { y: -24, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const variantStop = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.35 } }
  };

  return (
    <motion.div
      key={current}
      className="w-full"
      variants={
        animationType === -1
          ? variantUp
          : animationType === 1
          ? variantDown
          : variantStop
      }
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
};

const Body = () => {
  const [prev, setPrev] = useState(null);
  const location = useLocation();

  return (
    <main className="flex-1 dark:bg-pallete-100 bg-pallete2-100 dark:text-pallete-500 text-pallete2-500">
      <AnimatePresence mode="wait">
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
    </main>
  );
};

export default Body;

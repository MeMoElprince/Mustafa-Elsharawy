import {motion} from 'framer-motion';

const AnimationLogo = () => {
  return (
    <motion.div className='parent lg:h-72 h-52 w-52 rounded-full lg:w-72 z-10 bg-pallete-400'
        initial={{boxShadow: 'none'}}
        animate={{boxShadow: ["none","0 0 80px 8px #C7938B", "none"]}}
        transition={{duration: 7, repeat: Infinity, yoyo: Infinity}}
    >
        <motion.div className='child lg:h-72  h-52 w-52  text-center rounded-full z--10 lg:w-72 bg-pallete-600 flex justify-center items-center text-2xl font-bold'
            initial={{x: 0, y: 0}}
            animate={{x: [15, -15], y: [-15, 15]}}
            transition={{duration: 5, repeat: Infinity, repeatType: 'reverse'}}
        >
            <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: [0, 1, 0]}}
                transition={{duration: 20, repeat: Infinity}}
                className='fixed'
            >
                Mustafa Elsharawy
            </motion.h1>
            <motion.h1
                initial={{opacity: 1}}
                animate={{opacity: [1, 0, 1]}}
                transition={{duration: 20, repeat: Infinity}}
            >
                Full Stack Developer
            </motion.h1>
        </motion.div>
    </motion.div>
  );
};

export default AnimationLogo;

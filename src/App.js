
import { useEffect, useState } from 'react';
import Loading from './Loading/loading';
import Main from './main.js';
import { AnimatePresence, motion } from 'framer-motion';
import $ from 'jquery';


const App = () => {

  const height = $(window).innerHeight();
  const [nowLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {nowLoading ? (
          <motion.div key="box" exit={{ translateY: -height, transition: { duration: 0.5 }, backgroundColor:'black' }} >
            <Loading />
          </motion.div>)
          : (
            <motion.div initial={{ translateY: height }} animate={{ translateY: 0 }} exit={{ translateY: 0 }} transition={{ duration: 0.5 }}>
              <Main />
            </motion.div>
          )}
      </AnimatePresence>

    </div>
  );
}

export default App;

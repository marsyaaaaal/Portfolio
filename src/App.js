
import { useEffect, useState } from 'react';
import Loading from './Loading/loading';
import Main from './main.js';
import { AnimatePresence, motion } from 'framer-motion';
import $ from 'jquery';
const App = () => {

  // const height = $(window).innerHeight();
  const [nowLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return (

    <div >
      <AnimatePresence exitBeforeEnter>
        {nowLoading ? (
          <motion.div key="box" exit={{ opacity: 0, transition: { duration: 0.5 } }} >
            <Loading />
          </motion.div>)
          : (
            <motion.div key="box2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Main />
            </motion.div>
          )}
      </AnimatePresence>

    </div>
  );
}

export default App;

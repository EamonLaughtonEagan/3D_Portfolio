import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Known Technologies</p>
      <h2 className={styles.sectionHeadText}>Technologies.</h2>
    </motion.div>
      <div className='flex flex-row flex-wrap justify-between gap-10 mt-20'>
        {technologies.map((technology, index) => (
          <div key={`technoloogy-${index}`} className='w-28 h-28'>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
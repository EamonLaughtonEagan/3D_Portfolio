import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import Tilt from 'react-parallax-tilt'

const TechCard = ({index, name, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-[235px]'>
      <motion.div 
      variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{ max: 45, scale: 1, speed: 450}}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col'>
            <img src={icon} alt={name} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Known Technologies</p>
      <h2 className={styles.sectionHeadText}>Technologies.</h2>
    </motion.div>
    <div className='mt-20 flex flex-wrap gap-10 xs:justify-center'>
      {technologies.map((tech, i) => (
        <TechCard key={tech.name} index={i} {...tech} />
      ))}
    </div>
    </>
  )   
}

export default SectionWrapper(Tech, 'tech')
import Myself from './Myself';
/** 
 * @typedef {object} aboutMe ,  
 * @property {string} name,
 * @property {string} designation
 */

const aboutMe ={
  name:'Jesmin Chakma',
  designation:'Frontend Developer',

};

/**
 * @return {JSX.Element} 
 */
const Introduction = () => {
  return (
    <div>
      <Myself aboutMe={aboutMe}/>
    </div>
  );
};

export default Introduction;
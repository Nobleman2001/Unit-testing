import Myself from "./Myself"

const aboutMe ={
  name:'Jesmin Chakma',
  
}
// this is just checking the github  push  this is 
const Introduction = () => {
  return (
    <div>
      <Myself aboutMe={aboutMe}/>
    </div>
  )
}

export default Introduction
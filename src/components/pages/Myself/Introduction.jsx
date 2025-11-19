import Myself from "./Myself"

const aboutMe ={
  name:'Jesmin Chakma',
  
}
const Introduction = () => {
  return (
    <div>
      <Myself aboutMe={aboutMe}/>
    </div>
  )
}

export default Introduction
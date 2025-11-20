import Container from '../../hooks/Container';
/**
 * @param {{aboutMe:{name:string,designation:string}}} { aboutMe }
 * @return {JSX.Element}
 */
const Myself = ({ aboutMe }) => {
  return (
    <div className="bg-gray-100">
      <Container>
        <h2>Name: {aboutMe.name}</h2>
        <p> Designation: {aboutMe.designation}</p>
      </Container>
    </div>
  );
};

export default Myself;

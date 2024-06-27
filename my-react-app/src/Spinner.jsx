import { ClipLoader } from 'react-spinners';

function Spinner(){
  return (
    <div className="spinner-container">
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
};

export default Spinner;

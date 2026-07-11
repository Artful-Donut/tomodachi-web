import { useNavigate } from 'react-router-dom';


function AddWeezButton() {

    const navigate = useNavigate();
    return(
        <button
            className="bg-red-300"
            type="button"
            onClick={() => {
               navigate('/addweez')
            }}
            disabled={false}
        >
            ADD WEEZ
        </button>
    );

    
}


export default AddWeezButton
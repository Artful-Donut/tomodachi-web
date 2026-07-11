import { useNavigate } from 'react-router-dom';


function AddWeezButton() {

    const navigate = useNavigate();
    return(
        <button
            className="bg-red-500 h-15 w-25 text-black"
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
import { useNavigate } from 'react-router-dom';


function AddWeezButton() {

    const navigate = useNavigate();
    return(
        <button
            className="bg-rose-300 border border-purple-500 rounded-3xl"
            type="button"
            onClick={() => {
               navigate('/addweez')
            }}
            disabled={false}
        >
            <div className="text-black">
                ADD WEEZ
            </div>
        </button>
    );

    
}


export default AddWeezButton
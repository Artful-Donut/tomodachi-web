type DisplayButtonProps = {
    iconsrc: string;
    numberid: number
}

function DisplayButton({iconsrc, numberid}: DisplayButtonProps) {

    return(
        <>
        <button
            type="button"
            onClick={() => alert(numberid)}
            className="bg-gray-500 h-40 w-40"
        >
            <img src={iconsrc}></img>
            
        </button>

        </>
    )

}

export default DisplayButton
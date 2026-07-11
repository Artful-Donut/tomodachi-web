type CustomizeButtonProps = {
    iconsrc: string;
    numberid: number
}


function CustomizeButton({iconsrc, numberid}: CustomizeButtonProps) {

    return(
        <>
        <button
            type="button"
            onClick={() => alert(numberid)}
            className="bg-yellow-500 h-20 w-20"
        >
            <img src={iconsrc}></img>
            
        </button>

        </>
    )

}

export default CustomizeButton
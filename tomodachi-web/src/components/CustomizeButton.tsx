type CustomizeButtonProps = {
    iconsrc: string;

}


function CustomizeButton({iconsrc}: CustomizeButtonProps) {

    return(
        <>
        <button
            type="button"
            onClick={() => alert("Customize button clicked")}
            className="bg-yellow-500 h-20 w-20"
        >
            <img src={iconsrc}></img>

        </button>

        </>
    )

}

export default CustomizeButton
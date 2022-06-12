const ChangeColour = ({setColourScheme,colourScheme}) => {
    return(
        <button onClick = {() =>{
             setColourScheme(!colourScheme)
        }}>Change Colour scheme</button>
    )
}
export default ChangeColour
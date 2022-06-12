const ChangeFont = ({font,setFont}) => {
    return(
        <button onClick = {()=> {
            setFont(!font);
        }}>Toggle Dyslexia Font</button>
    )
}
export default ChangeFont
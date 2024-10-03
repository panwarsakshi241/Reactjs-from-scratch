function Button(props){

    return(
        <>
        <button onClick={props.onSelect}>{props.label}</button>
        </>

    );
}

export default Button;
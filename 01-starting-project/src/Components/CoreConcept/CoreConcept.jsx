/*
Or you can use object destructuring (function CoreConcept({image, title, description}))
and then use them directly with the name title, image & description
*/

function CoreConcept(props){
    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

export default CoreConcept;
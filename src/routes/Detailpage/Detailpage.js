import { useParams } from 'react-router-dom';

//function component
export default function Detailpage(){
    //returns the following elements
    //extract id from the useParams hook here: 
    let { id } = useParams();

    return (
        <div>
            <h1>Welcome to the detail page!</h1>
            <p>You have selected item : {id}</p>
        </div>
    )
}
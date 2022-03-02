import { useNavigate, Link } from 'react-router-dom';

import styles from './Listpage.module.css';


//function component
export default function Listpage(){

    //assigining navigation functionality
    const navigate = useNavigate();

    const listOfItems = [
        {id:1, itemText:'A first item'},
        {id:2, itemText:'A second item'},
        {id:3, itemText:'A third item'},
        {id:4, itemText:'A fourth item'},
        {id:5, itemText:'A fifth item'},
        {id:6, itemText:'A sixth item'},
        {id:7, itemText:'A seventh item'},
    ]

    const itemClicked = (item) => {
        console.log("I got clicked", item);
        //example /list/1
        navigate(`/list/${item.id}`);
    }

    //returns the following elements
    return (
        <div>
            <h1>Welcome to the list page!</h1>
            <ul className="list-group">
                {listOfItems.map((item) => {
                    //dynamically routing to the location using navigate
                    return <li key={item.id} className={`list-group-item ${styles.clickable}`} onClick={() => itemClicked(item)}>{item.itemText}</li>
                    
                    // alternative version using Link instead 
                    // return <Link to={`/list/${item.id}`}>{item.itemText}</Link>
                })}
            </ul>
        </div>
    )
}
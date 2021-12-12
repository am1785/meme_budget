import {useState, useEffect} from 'react';
import Button  from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { RiEdit2Fill } from 'react-icons/ri';
import "bootstrap/dist/css/bootstrap.min.css";

function Progress (props) {

    const [bar, setBar] = useState("100"); // by default 0% width progress bar
    const percentage = (Number(props.price) / Number(props.budget) * 100).toFixed(0);
    const label = `${props.price} / ${props.budget}`;


    console.log(bar);

    useEffect(()=> {
        setBar(percentage);
    },[]);

    return <>
    <h1>Meme Budget</h1>
    <div className='container'>
        <div className='row justify-content-evenly align-items-center'>
            <div className='col-10'>
                <ProgressBar animated now={bar} label={label} />
            </div>
            <div className='col-2 text-center'>
                <Button variant="light"><RiEdit2Fill /></Button>
            </div>
        </div>
    </div>
    </>

}

export default Progress;
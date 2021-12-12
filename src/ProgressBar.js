import {useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress (props) {

    const [bar, setBar] = useState("100"); // by default 0% width progress bar
    const percentage = (Number(props.price) / Number(props.budget) * 100).toFixed(0);
    const label = `${props.price} / ${props.budget}`;


    console.log(bar);

    useEffect(()=> {
        setBar(percentage);
        console.log(bar);
    },[]);

    return <>
    <ProgressBar animated now={bar} label={label} />;
    </>

}

export default Progress;
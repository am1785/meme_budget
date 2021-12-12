import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BiScan } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';

function Navigator (){

    const [budgetIsActive, setBudgetActive] = useState(true);
    const [scanIsActive, setScanActive] = useState(false);
    const [checkIsActive, setCheckActive] = useState(false);

    function ToggleBudgetActive(){
        setBudgetActive(true);
        setScanActive(false);
        setCheckActive(false);
    }

    function ToggleScanActive(){
        setScanActive(true);
        setBudgetActive(false);
        setCheckActive(false);
    }

    function ToggleCheckActive(){
        setCheckActive(true);
        setScanActive(false);
        setBudgetActive(false);
    }


return <>
{/* <div className="fixed-top start-15">
    <h1>Meme Budget</h1>
</div> */}
<div className="fixed-bottom">
<nav className="nav nav-pills nav-fill justify-content-around">
  <a className={budgetIsActive ? 'nav-link active':'nav-link'} onClick={ToggleBudgetActive} href="#"><FaShoppingBag /></a>
  <a className={scanIsActive ? 'nav-link active':'nav-link'} onClick={ToggleScanActive} href="#"><BiScan /></a>
  <a className={checkIsActive ? 'nav-link active':'nav-link'} onClick={ToggleCheckActive} href="#"><BsPerson /></a>
</nav>
</div>
</>

}

export default Navigator;
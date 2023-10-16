import {PointOfInterestTable} from "../components/PointOfInterestTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const PointOfInterest =() => {
    const navigate = useNavigate();

    function addPointOfInterest(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addPointOfInterest()}>Add Point Of Interest</Button>
            <PointOfInterestTable />
        </>
    )
}

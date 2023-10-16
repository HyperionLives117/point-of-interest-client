import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as PointOfInterestService from '../services/PointOfInterestService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const PointOfInterestTable = () => {
    const [pointOfInterest, setPointOfInterest]= useState([]);
    const navigate = useNavigate();

    function requestDataFromApi(){
        PointOfInterestService.getAllPointsOfInterest()
        .then(res => {
            setPointOfInterest(res.data);
        })
    }

    useEffect(()=> {
        PointOfInterestService.getAllPointsOfInterest()
        .then(res => {
            setPointOfInterest(res.data);
        })
    }, [])
    const goToUpdate = (id) => {
        navigate(`/${id}`);
    }

    const deletePointOfInterest = (id) => {
        PointOfInterestService.deletePointOfInterest(id)
    .then(()=>{
        requestDataFromApi();
    })
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        Location
                    </TableCell>
                    <TableCell>
                        City
                    </TableCell>
                    <TableCell>
                        State
                    </TableCell>
                    <TableCell>
                        Description
                    </TableCell>
                    <TableCell>
                        Rating
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pointOfInterest.map((pointOfInterest)=> {
                            return(
                                <TableRow
                                    hover
                                    key={pointOfInterest.id}
                                >
                                    <TableCell>
                                        {pointOfInterest.id}
                                    </TableCell>
                                    <TableCell>
                                        {pointOfInterest.location}
                                    </TableCell>
                                    <TableCell>
                                        {pointOfInterest.city}
                                    </TableCell>
                                    <TableCell>
                                        {pointOfInterest.state}
                                    </TableCell>
                                    <TableCell>
                                        {pointOfInterest.description}
                                    </TableCell>
                                    <TableCell>
                                        {pointOfInterest.rating}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(pointOfInterest.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deletePointOfInterest(pointOfInterest.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useState, useEffect } from 'react';




// let label = "Test"


// export const BoardSpace = (gameBoardCoordinate, boardLocation, updateBoard) => {
export const BoardSpace = (props) => {


    // const [data, setData] = useState("Test");

    useEffect(() => {
    
        // label = "Test 2"
        console.log("props.gameBoardCoordinate: " + JSON.stringify(props.gameBoardCoordinate) )
      }, [props.gameBoardCoordinate]);
    const [teamSelection, setTeamSelection] = useState(props.gameBoardCoordinate)

    // let tmp = gameBoardCooridnate//"Test Cooridantes"
    // console.log("teamSelection : " , teamSelection )

    return(
        <>
        <Card sx={{ minWidth: 275 }} onClick={() => {
            // console.log(" gameBoardCoordinate: "  ,  gameBoardCoordinate.gameBoardCoordinate )
            props.updateBoard(props.gameBoardCoordinate)
            // setData("Test 2")
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {/* {props.label} */}
                        {props.gameBoardCoordinate.value}
                        {/* {data} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
}
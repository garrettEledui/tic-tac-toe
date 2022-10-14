import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';





// export const BoardSpace = (gameBoardCoordinate, boardLocation, updateBoard) => {
export const BoardSpace = (props) => {


    const [teamSelection, setTeamSelection] = useState(props.gameBoardCoordinate)

    // let tmp = gameBoardCooridnate//"Test Cooridantes"
    // console.log("teamSelection : " , teamSelection )

    return(
        <>
        <Card sx={{ minWidth: 275 }} onClick={() => {
            // console.log(" gameBoardCoordinate: "  ,  gameBoardCoordinate.gameBoardCoordinate )
            props.updateBoard(props.gameBoardCoordinate)
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        test
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
}

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useState, useEffect } from 'react';

export const BoardSpace = (props) => {


    useEffect(() => {
      }, [props.gameBoardCoordinate]);

    return(
        <>
        <Card sx={{ minWidth: 275, minHeight: 250 }} onClick={() => {
            props.updateBoard(props.gameBoardCoordinate)
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h1" component="div">
                        {props.gameBoardCoordinate.value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
}
import './App.css';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {BoardSpace} from './components/BoardSpace';



let gameBoard = { 
    "row0" : { 
      "colomn0" : undefined, 
      "colomn1" : undefined, 
      "colomn2" : undefined
    }, 
    "row1" : { 
      "colomn0" : undefined, 
      "colomn1" : undefined, 
      "colomn2" : undefined
    },  
    "row2" : { 
      "colomn0" : undefined, 
      "colomn1" : undefined, 
      "colomn2" : undefined
    }, 
  }




export function GameBoard() {



  useEffect(() => {
    
    console.log("gameBoard: " + JSON.stringify(gameBoard) )
  }, [gameBoard]);

  function updateBoard(gameBoardCoordinate)
  {
    console.log("update board: ", gameBoardCoordinate )
    
  }
    return(
        <>
        {/* <Box sx={{ flexGrow: 1}}> */}
          <Grid container spacing={2}>
              <Grid item  xs={3} md={4}>
                  <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 0, "colomn" : 0} , value : gameBoard.row0.colomn0}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 0, "colomn" : 1} , value : gameBoard.row0.colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 0, "colomn" : 2} , value : gameBoard.row0.colomn2}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 1, "colomn" : 0} , value : gameBoard.row1.colomn0}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 1, "colomn" : 1} , value : gameBoard.row1.colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 1, "colomn" : 2} , value : gameBoard.row1.colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 2, "colomn" : 0} , value : gameBoard.row2.colomn0}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 2, "colomn" : 1} , value : gameBoard.row2.colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 2, "colomn" : 2} , value : gameBoard.row2.colomn2}} updateBoard={updateBoard}/>
              </Grid>
          </Grid>
        {/* </Box> */}
        
        </>
    );
}
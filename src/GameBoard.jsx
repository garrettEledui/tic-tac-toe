import './App.css';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {BoardSpace} from './components/BoardSpace';
import { CheckForLegalMove } from './helperMethods/CheckForLegalMove';
import { CheckForWin } from './helperMethods/CheckForWin';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


let board = [
  {"row" : 0, "colomn" : 0, "value" : undefined},
  {"row" : 0, "colomn" : 1, "value" : undefined},
  {"row" : 0, "colomn" : 2, "value" : undefined},

  {"row" : 1, "colomn" : 0, "value" : undefined},
  {"row" : 1, "colomn" : 1, "value" : undefined},
  {"row" : 1, "colomn" : 2, "value" : undefined},

  {"row" : 2, "colomn" : 0, "value" : undefined},
  {"row" : 2, "colomn" : 1, "value" : undefined},
  {"row" : 2, "colomn" : 2, "value" : undefined},
]
  



export function GameBoard() {


  const [player, togglePlayer] = useState("TeamO")
  const [winner, setWinner] = useState("")

  let isLegal = true
  


  useEffect(() => {
    
    

    
  }, []);

  function updateBoard(boardUpdateData)
  {
    isLegal = CheckForLegalMove(boardUpdateData, board)

    if(isLegal)
    {
      board.forEach(element => {
    
        if(element.row === boardUpdateData.row && element.colomn === boardUpdateData.colomn)
        {
          if(player === "TeamO")
          {
            element.value = "O"
            togglePlayer("TeamX")
          }
          else if(player === "TeamX")
          {
            element.value = "X"
            togglePlayer("TeamO")
          }
        }
      });

      let winner = CheckForWin(board)
      if(winner !== undefined)
      {
        console.log("winnner: " , winner)
        setWinner(winner)
      }
    }    
  }


function ResetGame() {


  console.log("Reset game")

    board = [
      {"row" : 0, "colomn" : 0, "value" : undefined},
      {"row" : 0, "colomn" : 1, "value" : undefined},
      {"row" : 0, "colomn" : 2, "value" : undefined},
    
      {"row" : 1, "colomn" : 0, "value" : undefined},
      {"row" : 1, "colomn" : 1, "value" : undefined},
      {"row" : 1, "colomn" : 2, "value" : undefined},
    
      {"row" : 2, "colomn" : 0, "value" : undefined},
      {"row" : 2, "colomn" : 1, "value" : undefined},
      {"row" : 2, "colomn" : 2, "value" : undefined},
    ]
    setWinner("") 
    togglePlayer("TeamO")
  }
    return(
        <>
        {winner === "" ?
          <Box>
            <Typography variant="h2">{player}'s turn </Typography>
          </Box>
        :
          <Box sx={{
            minHeight: 150,
          }}>
            <Typography variant="h2">{winner} is the Winner! </Typography>
            <Button variant='contained' onClick={() => {
                ResetGame()
              }}>Play Again</Button>
          </Box>
        }
        
          <Grid container spacing={2}>
          <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[0]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[1]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[2]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[3]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[4]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[5]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[6]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[7]} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={board[8]} updateBoard={updateBoard}/>
              </Grid>
          </Grid>
        </>
    );
}
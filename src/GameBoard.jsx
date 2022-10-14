import './App.css';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {BoardSpace} from './components/BoardSpace';

let gameBoard = [
  [ 
    {
      colomn : 0,
      value : undefined 
    },
    {
      colomn : 1,
      value : undefined 
    },
    {
      colomn : 2,
      value : undefined 
    },
  ],
  [ 
    {
      colomn : 0,
      value : undefined 
    },
    {
      colomn : 1,
      value : "O" 
    },
    {
      colomn : 2,
      value : undefined 
    },
  ], 
  [ 
    {
      colomn : 0,
      value : undefined 
    },
    {
      colomn : 1,
      value : undefined 
    },
    {
      colomn : 2,
      value : undefined 
    },
  ], 
  // { 
  //   colomn0 : undefined, 
  //   colomn1 : undefined, 
  //   colomn2 : undefined
  // },  
  // { 
  //   colomn0 : undefined, 
  //   colomn1 : undefined, 
  //   colomn2 : undefined
  // },  
]

// let gameBoard = { 
//     row0 :  { 
//       colomn0 : undefined, 
//       colomn1 : undefined, 
//       colomn2 : undefined
//     }, 
//     row1 : { 
//       colomn0 : undefined, 
//       colomn1 : undefined, 
//       colomn2 : undefined
//     },  
//     row2 : { 
//       colomn0 : undefined, 
//       colomn1 : undefined, 
//       colomn2 : undefined
//     }, 
//   }

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
  


// board[0].value = "O"

export function GameBoard() {


  const [label, setLabel] = useState("Test");

  useEffect(() => {
    
    

    console.log("gameBoard: " + JSON.stringify(gameBoard) )
  }, []);

  function updateBoard(boardUpdateData)
  {

    

    board.forEach(element => {
    
      
      if(element.row === boardUpdateData.row && element.colomn === boardUpdateData.colomn)
      {
        console.log("element: " ,element)
        element.value = "O"
        console.log("element: " ,element)
        setLabel("O")

      }
      
    });



    


    console.log("board: ", board)
    console.log("boardUpdateData: ", boardUpdateData)
    console.log("row: ", boardUpdateData.row)
    console.log("colomn: ", boardUpdateData.colomn)
    console.log("value: ", boardUpdateData.value)
    

    
    
  }
    return(
        <>
        {/* <Box sx={{ flexGrow: 1}}> */}
          <Grid container spacing={2}>
          <Grid item  xs={3} md={4}>
                {/* <div>{board[0].value}</div> */}
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


              {/* <Grid item  xs={3} md={4}>
                  <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 0, "colomn" : 0} , value : gameBoard[0].colomn0}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 0, "colomn" : 1} , value : gameBoard[0].colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 0, "colomn" : 2} , value : gameBoard[0].colomn2}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 1, "colomn" : 0} , value : gameBoard[1].colomn0}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 1, "colomn" : 1} , value : gameBoard[1].colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 1, "colomn" : 2} , value : gameBoard[1].colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 2, "colomn" : 0} , value : gameBoard[2].colomn0}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 2, "colomn" : 1} , value : gameBoard[2].colomn1}} updateBoard={updateBoard}/>
              </Grid>
              <Grid item  xs={3} md={4}>
                <BoardSpace gameBoardCoordinate={ {boardLocation : {"row" : 2, "colomn" : 2} , value : gameBoard[2].colomn2}} updateBoard={updateBoard}/>
              </Grid> */}
          </Grid>
        {/* </Box> */}
        
        </>
    );
}
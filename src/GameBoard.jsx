import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BoardSpace from './components/BoardSpace';



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
  

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function GameBoard() {
    return(
        <>
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <BoardSpace/>
            </Grid>
            <Grid item xs={6} md={4}>
                <BoardSpace/>
            </Grid>
            <Grid item xs={6} md={4}>
                <BoardSpace/>
            </Grid>
            <Grid item xs={6} md={8}>
                <BoardSpace/>
            </Grid>
        </Grid>
        </>
    );
}
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BoardSpace() {
    return(
        <>
        <Card sx={{ minWidth: 275 }} onClick={() => {
            console.log("test")
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
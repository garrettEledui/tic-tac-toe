export function CheckForWin(board) {


    //Checking row wins
    if(board[0].value === board[1].value && board[1].value === board[2].value)
    {
        if(board[0].value != undefined)
        {
            console.log("Top 3 across")
            return board[0].value
        }
    }
    else if(board[3].value === board[4].value && board[4].value === board[5].value)
    {
        if(board[3].value != undefined)
        {
            console.log("Middle 3 across")
            return board[3].value
        }
    }
    else if(board[6].value === board[7].value && board[7].value === board[8].value)
    {
        if(board[6].value != undefined)
        {
            console.log("Bottom 3 across")
            return board[6].value
        }
    }


    //Checking colomn wins
    else if(board[0].value === board[3].value && board[3].value === board[6].value)
    {
        if(board[0].value != undefined)
        {
            console.log("Colomn 0 ")
            return board[0].value
        }
    }
    else if(board[1].value === board[4].value && board[4].value === board[7].value)
    {
        if(board[3].value != undefined)
        {
            console.log("Colomn 1")
            return board[3].value
        }
    }
    else if(board[2].value === board[5].value && board[5].value === board[8].value)
    {
        if(board[6].value != undefined)
        {
            console.log("Colomn 2 ")
            return board[6].value
        }
    }


    //Checking diagnol win
    else if(board[0].value === board[4].value && board[4].value === board[7].value)
    {
        if(board[0].value != undefined)
        {
            console.log("Colomn 0 ")
            return board[0].value
        }
    }
    else if(board[2].value === board[4].value && board[4].value === board[6].value)
    {
        if(board[2].value != undefined)
        {
            console.log("Colomn 1")
            return board[2].value
        }
    }
    
    else
    {
        return undefined    
    }

    // for(let i = 0; i < board.length; i++)
    // {
    //     if(board[i].value == board[i + 1]?.value)
    //     {
    //         if(board[i].value != undefined)
    //         {
    //             console.log("loop")
    //             return board[i].value
    //         }
    //     }
    // }


    // board.forEach(element => {
    
    //     // if(element.value != undefined)
    //     // {
    //     //     // let result = board.find(item => item.row === item.colomn ) 
    //     //     // console.log("result: " , result)
    //     //     console.log("element: " , element)
    //     // }

    //     if(element.value === "O")
    //     {
    //         console.log("element: " , element)

            

    //         // console.log("previous: " , previous)
    //         // console.log("element.row - 1: " , element.row - 1)
    //         // if(previous === undefined)
    //         // {
    //         //     previous = element
    //         // }



    //         // else if(previous.row === element.row - 1)
    //         // {
    //         //     console.log("Same row as last")
    //         // }
            
            
    //     }
    //   });

}



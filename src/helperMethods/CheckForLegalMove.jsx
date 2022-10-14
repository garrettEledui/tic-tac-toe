export function CheckForLegalMove(boardUpdateData, board) {

    // console.log("Check for legal move: ", boardUpdateData)

    let isLegal = true

    board.forEach(element => {
    
        if(element.row === boardUpdateData.row && element.colomn === boardUpdateData.colomn)
        {
            if(element.value === undefined)
            {
                // console.log("This is a free space.")
                isLegal =  true
            }
            else
            {
                isLegal =  false
            }
            
        }
      });
    return isLegal
}
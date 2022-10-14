export function CheckForLegalMove(boardUpdateData, board) {

    let isLegal = true

    board.forEach(element => {
    
        if(element.row === boardUpdateData.row && element.colomn === boardUpdateData.colomn)
        {
            if(element.value === undefined)
            {
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

var isPathCrossing = function(path) {
    
    const hashMap = new Map()
    let currentX = 0
    let currentY = 0
    hashMap.set(`${currentX},${currentY}`,true)

    for(let i = 0; i < path.length; i++){
        if(path[i] === "N") currentY++
         else if(path[i] === "S") currentY--
          else if(path[i] === "E") currentX++
           else currentX--

        const points = `${currentX},${currentY}`
        if(hashMap.has(points)){
            return true
        }
        hashMap.has(points,true)
    }
    return false

}





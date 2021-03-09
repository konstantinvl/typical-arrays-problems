
exports.min = function min (array) {
  if (array===undefined){
    return 0;
  } else if (array.length==0){
    return 0;
  }else return /*/Math.min.apply(null,array);/*/array.sort((a,b)=>a-b)[0];
  
}

exports.max = function max (array) {
  if (array===undefined){
    return 0;
  } else if (array.length==0){
    return 0;
  }else return array.sort((a,b)=>b-a)[0];

}

exports.avg = function avg (array) {  
  if (array===undefined){
    return 0;
  } else if (array.length==0){
    return 0;
  }else{
    let result = array.reduce((sum, current) => sum + current, 0);
    return (result/array.length);
  }
}

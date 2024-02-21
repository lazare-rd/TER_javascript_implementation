function group_by(keys, val){
    if (keys.length != val.length){
        throw new RangeError("Invalid array length");
    }
    var result = {};
    for (let i = 0; i<keys.length; i++){
        if (Object.keys(result).includes(keys[i])){
            result[keys[i]] += val[i];
        }
        else{
            result[keys[i]] = val[i];
        }
    }
    return result ;
}

keys = ['A', 'B', 'C', 'A', 'A', 'C', 'C', 'C', 'B'];
val = [2, 4, 7, 6, 4, 2, 3, 9, 1];
console.log(group_by(keys, val));
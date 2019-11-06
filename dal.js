const fs = require('fs');
const filePath = "phones.json";

function readAll(cb){
    fs.readFile(filePath, function(e, data){
        if(e){
            cb(e);
        }
        else{
            cb(null, data.toString());
        }
    })
}

function readOne(id, cb){

}

function add(obj, cb){
    fs.readFile(filePath, function(e, data){
        if(e){
            cb(e);
        }
        else{
            phones = JSON.parse(data.toString());
            phones.push(obj);
            fs.writeFile(filePath, JSON.stringify(phones), function(e){
                if(e){
                    cb(e);
                }
                else{
                    cb(null);
                }
            })
        }
    })
}

function deleteOne(id, cb){
    fs.readFile(filePath, function(e, data){
        if(e){
            cb(e);
        }
        else{
            let phones = JSON.parse(data.toString());
            let idx = phones.findIndex(i => i.id == id);
            phones.splice(idx, 1);
                fs.writeFile(filePath, JSON.stringify(phones), function(e){
                    if(e){
                        cb(e);
                    }
                    else{
                        cb(null,data);
                    }
                })
        }
    })
}

function updateOne(id, cb){

}

module.exports = {
    readAll: readAll,
    readOne: readOne,
    add: add,
    deleteOne: deleteOne,
    updateOne: updateOne
}
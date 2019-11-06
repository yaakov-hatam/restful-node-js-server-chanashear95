const dal = require('./dal');

function getAllPhones(cb){
    dal.readAll(function(e, data){
        if(e){
            cb(e);
        }
        else{
            cb(null, data);
        }
    })
}

function getOnePhone(){

}

function addPhone(obj, cb){
    dal.add(obj, function(e, data){
        if(e){
            cb(e);
        }
        else{
            cb(null, data)
        }
    })
}

function deletePhone(id, cb){
    dal.deleteOne(id, function(e, data){
        if(e){
            cb(e)
        }
        else{
            cb(null, data)
        }
    })
}

function updatePhone(){

}

module.exports = {
    getAllPhones: getAllPhones,
    getOnePhone: getOnePhone,
    addPhone: addPhone,
    deletePhone: deletePhone,
    updatePhone: updatePhone
}
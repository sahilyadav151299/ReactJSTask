// validates the user form input data
function ValidateData(username, birthdate, department, expirence){

    if(username.trim() === ''){
        alert('Username Is Required!');
        return false;
    }
    
    if(username){
        let count = 0;
        let len = username.length;
        for(let i=0; i<len; i++){

            if((username.charCodeAt(i) >= 65 && username.charCodeAt(i) <= 90) || (username.charCodeAt(i) == 32)){
                count++;   
            }
        } 

        if(count !== len){
            alert('Username Must Be In Capital A-Z Only!');
            return false
        }
    }
    
    if(birthdate === ''){
        alert('Birthdate Is Required!');
        return false;
    }
    
    if(department.trim() === ''){
        alert('Department Is Required!');
        return false;
    }

    if(expirence === ''){
        alert('Expirence Is Required!');
        return false;
    }
     
    if(expirence < 0){
        alert('Input Must Be A Positive Number!');
        return false;
    }

    return true;
  }

export default ValidateData;
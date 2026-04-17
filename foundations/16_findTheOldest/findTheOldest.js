const findTheOldest = function(people) {
    people.forEach(obj=>{
        let birth=obj.yearOfBirth;
        let death=obj.yearOfDeath;
        if(death===undefined){
            death=new Date().getFullYear();
        }
        obj.lived=death-birth;
    });
    people.sort((a,b)=>{
       return b.lived - a.lived ;
    });

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;

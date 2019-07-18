class LocalStorage{
    constructor(){
        this.id = 0;
    }

    add(obj){
        this.id++;
        var stringField = JSON.stringify(obj);
        localStorage.setItem(this.id,stringField);
        return this.id;
    }

    update(id,obj){
        localStorage.setItem(id,obj);
    }

    remove(id){
        localStorage.removeItem(id);
    }

    read(id){
        if (id === undefined){
            var arr = [];
            for(id=1; id<=localStorage.length;id++){
                arr.push(localStorage.getItem(id));
            }
            return arr;
        } else{
            return localStorage.getItem(id);
        }
        }
    }

class Group {
    constructor(){
        this.name = name;
    }
}

class StudentList {
    constructor(){
        this.id=id;
        this.name=name;
        this.secondName=secondName;
        this.fatherName=fatherName;
        this.birthDate=birthDate;
        this.gender=gender;
        this.hobbi=hobbi;
    }
}

class LocalStorage{
    constructor(id){
        this.id = [];
    }

    counter(){
        if (id === undefined){
            var idCount = 0;
        return idCount++;
        } else{
            var idCount = id.length - 1;
            return idCount++;
        }
    }

    add(){
        id.push(this.counter());
        localStorage.setItem('Id',this.id);
        console.log(JSON.parse(localStorage.getItem('Id'),this.id));
    }

    update(){
        localStorage.getItem('Id',this.id);
        var updId = prompt("");
        localStorage.setItem('Id',updId);
        console.log(localStorage.getItem('Id',updId));
    }

    remove(){
        localStorage.removeItem('Id',this.id);
        console.log("Id removed");
        console.log(read());
    }

    read(){
        var searchID = prompt("");
        if (searchID === undefined){
            for(id; id<=id.length;id++){
                console.log(localStorage.getItem('Id',this.id))
            }
        } else{
            console.log(localStorage.getItem('Id',this.id))
        }

        /*let int = [];
        let id = int.entries();
        var result = id.next();
        while(result.done === false){
            console.log(result.value[0], result.value[1]);
            result = id.next();*/
        }
    }


class Group extends LocalStorage{
    constructor(id, name){
        super(id);
        this.name = name;
    }

    add(){
        super.add();
        this.name = prompt("");
        console.log(JSON.parse(localStorage.getItem('Id')), this.name);
    }

    update(){
        super.update();
        this.name = prompt("");
        console.log(JSON.parse(localStorage.setItem('Id',updId)), this.name);
    }

    remove(){
        super.remove();
    }

    read(){
        super.read();
        console.log(JSON.parse(localStorage.getItem('Id')), this.name);
    }
}

class StudentList extends LocalStorage{
    constructor(id,name,secondName,fatherName,birthDate,gender,hobbi){
        this.id=id;
        this.name=name;
        this.secondName=secondName;
        this.fatherName=fatherName;
        this.birthDate=birthDate;
        this.gender=gender;
        this.hobbi=hobbi;
    }

    add(){
        super.add();
        this.name=prompt("");
        this.secondName=prompt("");
        this.fatherName=prompt("");
        this.birthDate=prompt("");
        this.gender=prompt("");
        this.hobbi=prompt("");
        console.log(JSON.parse(localStorage.getItem('Id')));
    }

    update(){
        super.update();
        this.fio = prompt("");
        console.log(JSON.parse(localStorage.setItem('Id',updId)));
    }

    remove(){
        super.remove();
    }

    read(){
        super.read();
    }
}

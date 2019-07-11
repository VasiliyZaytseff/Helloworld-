class LocalStorage{
    constructor(id){
        this.id = id;
    }

    add(){
        var addId = prompt("");
        var addId = JSON.stringify(addId);
        localStorage.setItem('Id',addId);
        console.log(JSON.parse(localStorage.getItem('Id')));
    }

    update(){
        var updId = prompt("");
        localStorage.getItem('Id');
        var updId = JSON.stringify(updId);
        localStorage.setItem('Id',updId);
        console.log(JSON.parse(localStorage.setItem('Id',updId)));
    }

    remove(){
        localStorage.removeItem('Id');
        console.log("Id removed");
    }

    read(){
        console.log(JSON.stringify(localStorage.getItem('Id')));
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

class List extends LocalStorage{
    constructor(id, fio){
        super(id);
        this.fio = fio;
    }

    add(){
        super.add();
        this.fio = prompt("");
        console.log(JSON.parse(localStorage.getItem('Id')), this.fio);
    }

    update(){
        super.update();
        this.fio = prompt("");
        console.log(JSON.parse(localStorage.setItem('Id',updId)), this.fio);
    }

    remove(){
        super.remove();
    }

    read(){
        super.read();
        console.log(JSON.parse(localStorage.getItem('Id')), this.fio);
    }
}
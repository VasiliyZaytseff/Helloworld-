/*class LocalStorage{
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

class Groups {
    constructor(){
        this.name = name;
    }
}

class Students {
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
*/  

class LocalStorage{
    constructor(key){
        this.key = key;
    }

    add(key,value){
        if (localStorage.getItem(key) !== null){
            var str = localStorage.getItem(key);
            var arr = JSON.parse(str);
            arr.push(value);
            var strArr = JSON.stringify(arr);
            localStorage.setItem(key,strArr);          
        } else {
            var arr = [];
            arr.push(value);
            var strArr = JSON.stringify(arr);
            localStorage.setItem(key,strArr); 
        }
    }

    /**
     * Обновляет значение объекта 
     * 
     * @param {*} key Ключ для LocalStorage в котором хранится массив объектов нужного типа
     * @param {*} obj Объект 
     */

    update(key,obj){
        var get = localStorage.getItem(key);
        var parseGet = JSON.parse(get);
        for (var i=0;i<parseGet.length;i++){
            if (parseGet[i].id === obj.id){
                parseGet[i] = obj;
                break;
            }
        }
        localStorage.setItem(key,JSON.stringify(parseGet));
    }

    /**
     * Возвращает массив, если идентификатор не указан, если указан, то возвращает одну запись
     * 
     * @param {*} key Ключ для LocalStorage в котором хранится массив объектов нужного типа
     * @param {*} id  Идентификатор записи
     */

    read(key,id){ 
        if (id === undefined){
            var readed = localStorage.getItem(key);
            var objReaded = JSON.parse(readed);
            return objReaded;
        } else {
            var readed = localStorage.getItem(key);
            var objReaded = JSON.parse(readed);
            for (var i = 0; i<objReaded.length; i++){
                if (objReaded[i].id === id){
                    return objReaded[i];
                }
            }
        }
    }

    /**
     * Удаляет элемент массива Group
     * 
     * @param {*} key Ключ для LocalStorage в котором хранится массив объектов нужного типа
     * @param {*} id Иентификатор записи 
     */

    remove(key,id){
        var temp = [];
        var get = localStorage.getItem(key);
        var groups = JSON.parse(get);
        for (var i=0;i<groups.length;i++){
            if(groups[i].id !== id){
                temp.push(groups[i]);
            } else{
                continue;
            }
        }
        var strTemp = JSON.stringify(temp);
        localStorage.setItem(key,strTemp);
    }
}

class Groups extends LocalStorage {
    constructor(){
        super("groups");
        this.counter = 0;
    }

    add(obj){
        obj['id'] = ++this.counter;
        super.add(super.key,obj);
    }

    update(obj){
        super.update(super.key,obj);
    }

    remove(obj){
        super.remove(super.key,obj);
    }

    read(id){
        return super.read(super.key,id);
    }
}

class Students extends LocalStorage {
    constructor(){
        super("students")
        this.counter = 0;
    }

    add(obj){
        obj['id'] = ++this.counter;
        super.add(super.key,obj);
    }

    update(obj){
        super.update(super.key,obj);
    }

    remove(obj){
        super.remove(super.key,obj);
    }

    read(id){
        return super.read(super.key,id);
    }
}

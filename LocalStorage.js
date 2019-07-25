class BaseStorage {
        tableName = constructor.name;
        primaryKey = idx;
        secondKey = id;
    constructor(){
    }

    add(item){
        var items = JSON.parse(this.getItems());
        if (this.getPK() == undefined ){
            var idx = JSON.parse(this.getPK());
            idx.push(1);
            localStorage.setItem(this.primaryKey, JSON.stringify(idx));
        } else {
            this.getPK();
            localStorage.setItem(Object.assign(idx[0],++this.idx));
        }
        items.push(Object.assign(item,{id:"_idx"}));
        localStorage.setItem(this.tableName,JSON.stringify(items));
        return arr;
    }

    update(id,item){
        for(var i = 0;i<items.length;i++){
            if(items[i].id == id){
                localStorage.setItem(id,JSON.stringify(item));
            } 
        }
    }

    remove(id){
        var temp = [];
        var items = JSON.parse(getItremId());
        for (var i=0;i<items.length;i++){
            if(items[i].id !== id){
                temp.push(items[i]);
            } else{
                continue;
            }
        }
        var strTemp = JSON.stringify(temp);
        localStorage.setItem(id,strTemp);
    }

    get(id){
        if (id == undefined){
            return getPK();
        } else {
            return getItremId();
        }
    }

    getItremId(){
        return localStorage.getItem(this.id);
    }

    getItems(){
        return localStorage.getItem(this.tableName);
    }

    getPK(){
        return localStorage.getItem(this.primaryKey);
    }
}

class Students extends BaseStorage{
    constructor(){
        super();
    }
}

class Groups extends BaseStorage{
    constructor(){
        super();
    }
}

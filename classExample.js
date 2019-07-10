class  writSupp {
    constructor(name){
        this.name = name;
    }

    outPut(){
        console.log(this.name);
    }
}

class ruchka extends writSupp{
    constructor(name, pasta, corpus){
        super(name);
        this.pasta = pasta;
        this.corpus = corpus;
    }

    outPut(){
        super.outPut();
        console.log(this.pasta, this.corpus);
    }
}

class marker extends writSupp{
    constructor(name, color, width){
        super(name);
        this.color = color;
        this.width = width;
    }

    outPut(){
        super.outPut();
        console.log(this.color, this.width);
    }
}

let erichKrause = new writSupp("Erich Krause");
let gelRuchka = new ruchka("Erich Krause", "Black", "Plastic");
let flomaster = new marker("Erich Krause", "Blue", "0.7cm");

erichKrause.outPut();
gelRuchka.outPut();
flomaster.outPut();
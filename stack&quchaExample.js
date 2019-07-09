//Стек
function Stack() {
    this._size = 0;
    this._storage = {};
}
 
Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};
 
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};

//Куча
function Qucha() {
	var arr = [];
	var	arr[0]=promt("");
	var	arr[1]=promt("");
	var	arr[2]=promt("");
	alert(arr);
}
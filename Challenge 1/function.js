function pengurangan (a,b) {
    return a - b;
}
 console.log(pengurangan(10, 5)); 

 let isOnLeave = true
 let object = {
    name: 'dena',
    age : 23,
    isOnLeave : false,
    doYourJob: function() {
        if (this.isOnLeave){
            return 'kerja rodi'
        } else {
            return 'malassss'
        }
    }
} 
console.log(object.doYourJob())
 //object fungsi konstruktor

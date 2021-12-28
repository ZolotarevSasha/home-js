function calculate (){
    var input = document.getElementById('input');
    var flash = input.value;
    var result = (flash * 1024/ 820).toFixed(0);
    console.log('min_3 result:',result);
}
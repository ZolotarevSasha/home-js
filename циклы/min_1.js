function calculate (){
    var input = document.getElementById('input');
    var age = parseInt(input.value);
    if (isNaN(age)){
        alert('неверный формат данных');
    }
    else if (age<0){
        alert('вы ещё в проЭкте');
    }
    else if (age>100){
        alert('столько не живут');
    }
    else if (age>=0 && age<=11){
        alert('ребёнок')
    }
    else if (age>=12 && age<=17){
        alert('подросток')
    }
    else if (age>=18 && age<=59){
        alert('взрослый')
    }
    else if (age>=60 && age<=100){
        alert('пенсионер')
    }
}
 /*
let DATA ="secrite information "


 class User {

    constructor(name,email) {
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data",DATA);
    }
}



let student1= new User("Ali", "abc@gmail.com")

let student2= new User("Kashif", "abc@gmail.com")

let teacher1= new Usoler("Kashif", "abc@gmail.com")    */

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value === 'AC') {
            string = "";
            input.value = string;
        }
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});

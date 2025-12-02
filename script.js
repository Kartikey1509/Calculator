let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');

let string = "";


function isOperator(ch) {
    return ['+', '-', '*', '/', '%'].includes(ch);
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        let btn = e.target.textContent.trim();

        if (btn === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (btn === 'AC') {
            string = "";
            input.value = "";
        }

        else if (btn === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }

        else {

           
            if (isOperator(btn) && isOperator(string.slice(-1))) {
                return ;
            }

            string += btn;
            input.value = string;
        }
    });
});

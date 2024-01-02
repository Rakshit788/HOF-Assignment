let a = 3;
const intervalId = setInterval(() => {
    for (let i = 3; i > 0; i--) {
        a = a - 1;
        console.log("The message will be displayed in " + a);
        if (a === 0) {
            clearInterval(intervalId); // Provide the interval ID
            generate_randomno();
        }
    }
}, 1000);

function generate_randomno() {
    console.log(Math.floor(Math.random() * 100));
}

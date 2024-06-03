// immeditelly invoked function epression = IIFE

function chai() {
    console.log(`DB Connected`);
}

// chai()

(function chai() {

    //named iife
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected two ${name}`);
})("deepak")
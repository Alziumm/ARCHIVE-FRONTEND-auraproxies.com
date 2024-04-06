class API_CONNECTION {

    constructor(){

        this.inputs = document.querySelectorAll("#otp-field input");
        this.container = document.getElementById("otp-field");

        this.loginContainer = document.querySelector('.login-container');
        this.registerContainer = document.querySelector('.register-container');
        this.forgotContainer = document.querySelector('.forgot-container');
        this.twofactorContainer = document.querySelector('.twofactor-container');

        this.inputs.forEach((input, index) => {
            input.dataset.index = index;
            input.addEventListener("paste", (e) => this.handleOnPasteOtp(e, input));
            input.addEventListener("keyup", (e) => this.handleOtp(e, input));
            input.addEventListener("keypress", (e) => this.allowDigitsOnly(e, input));
        });

        document.getElementById('to_register').addEventListener('click', () => {
            this.switch_to_register();
        });
        
        document.getElementById('to_login').addEventListener('click', () => {
            this.switch_to_login();
        });
        
        document.getElementById('to_login_2').addEventListener('click', () => {
            this.switch_to_login();
        });
        
        document.getElementById('to_forgot').addEventListener('click', () => {
            this.switch_to_forgot();
        });

        document.getElementById('back').addEventListener('click', () => {
            this.switch_to_login();
        });

    }

    verif_twofactor(to_verif = false){

        if (to_verif){
            if (to_verif.length != 6 || /^\d{6}$/.test(to_verif) == false) {
                return false;
            }
            return true;
        } else {
            let otpString = '';
            this.inputs.forEach((input) => {
                otpString += input.value;
            });
            if (otpString.length != 6 || /^\d{6}$/.test(otpString) == false) {
                return false;
            }
            return true;
        }
    }

    shake_element(){

        if (this.container.classList.contains('shake')){
            this.container.classList.remove('shake');
        };

        this.container.classList.add('shake');

        setTimeout(()=>{
            this.container.classList.remove('shake');
        }, 600);

    }

    handleOnPasteOtp(e) {

        const data = e.clipboardData.getData("text");

        if (this.verif_twofactor(data) == true){

            const value = data.split("");

            if (value.length === this.inputs.length) {

                this.inputs.forEach((input, index) => (input.value = value[index]));

            };

        } else {

            e.preventDefault();
            
            this.shake_element();

            return false;

        };

    };

    handleOtp(e) {
        var keyCode = e.which || e.keyCode;
        const input = e.target;
        let value = input.value;
        input.value = "";
        input.value = value ? value[0] : "";
        let fieldIndex = input.dataset.index;
        if (value.length > 0 && fieldIndex < this.inputs.length - 1) {
            input.nextElementSibling.focus();
        }
        if (e.key === "Backspace" && fieldIndex > 0) {
            input.previousElementSibling.focus();
        }
        if (keyCode === 37 && fieldIndex > 0) {
            input.previousElementSibling.focus();
        }
        if (keyCode === 39 && fieldIndex < this.inputs.length - 1) {
            input.nextElementSibling.focus();
        }

        if (this.verif_twofactor() == true){
            console.log('OTP is valid');
        };

    };

    allowDigitsOnly(event) {

        var keyCode = event.which || event.keyCode;

        if (keyCode >= 48 && keyCode <= 57 && (/[0-9]/.test(event.which))) {
            return;
        };

        if (keyCode === 8) {
            return;
        };

        if (keyCode === 37 || keyCode === 39) {
            if (e.key === "Backspace" && fieldIndex > 0) {
                input.previousElementSibling.focus();
            };
        };

        this.shake_element();

        event.preventDefault();

    };

    switch_to_login(){
        this.registerContainer.style.opacity = 0;
        this.forgotContainer.style.opacity = 0;
        this.twofactorContainer.style.opacity = 0;

        setTimeout(()=>{
            this.registerContainer.classList.add('dn');
            this.forgotContainer.classList.add('dn');
            this.twofactorContainer.classList.add('dn');
            this.loginContainer.classList.remove('dn');
            this.loginContainer.style.opacity = 0;
            setTimeout(()=>{
                this.loginContainer.style.opacity = 1;
            }, 100);
        }, 1500);

    };
    
    switch_to_register(){
        this.loginContainer.style.opacity = 0;
        this.forgotContainer.style.opacity = 0;
        this.twofactorContainer.style.opacity = 0;

        setTimeout(()=>{
            this.loginContainer.classList.add('dn');
            this.forgotContainer.classList.add('dn');
            this.twofactorContainer.classList.add('dn');
            this.registerContainer.classList.remove('dn');
            this.registerContainer.style.opacity = 0;
            setTimeout(()=>{
                this.registerContainer.style.opacity = 1;
            }, 100);
        }, 1500);

    }
    
    switch_to_forgot(){
        this.loginContainer.style.opacity = 0;
        this.registerContainer.style.opacity = 0;
        this.twofactorContainer.style.opacity = 0;
        setTimeout(()=>{
            this.loginContainer.classList.add('dn');
            this.registerContainer.classList.add('dn');
            this.twofactorContainer.classList.add('dn');
            this.forgotContainer.classList.remove('dn');
            this.forgotContainer.style.opacity = 0;
            setTimeout(()=>{
                this.forgotContainer.style.opacity = 1;
            }, 100);
        }, 1500);
    }
    
    switch_to_twofactor(){
        this.loginContainer.style.opacity = 0;
        this.registerContainer.style.opacity = 0;
        this.forgotContainer.style.opacity = 0;
        setTimeout(()=>{
            this.loginContainer.classList.add('dn');
            this.registerContainer.classList.add('dn');
            this.forgotContainer.classList.add('dn');
            this.twofactorContainer.classList.remove('dn');
            this.twofactorContainer.style.opacity = 0;
            setTimeout(()=> {
                this.twofactorContainer.style.opacity = 1;
            }, 100);
        }, 1500);
    }
}

const TWO_FACTOR = new API_CONNECTION();
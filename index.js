const database = [
    { name:'Sebastian Moncada', email: 'example@gmail.com', password: '12345'},
    { name:'Santiago Jimenez', email: 'santiago.jr.dev@gmail.com', password: 'Santiago.123'},
]


function getDataLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = database.find((item) => item.email === email);
    if(password === user.password){
        alert(`Bienvenido CAREMONDAAA de ${user.name}`)
    }else{
        alert("Yo por ahi no paso")
    }

    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log("USUARIO",user)
}
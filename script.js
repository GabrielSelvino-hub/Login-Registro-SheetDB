
var url = 'https://sheetdb.io/api/v1/30v73rsmrq5p2';
var cop=0;

function salvar(name, emai, pas) {  
    return axios.post(url, {
        "data": {
            "username": name,
            "email": emai,
            "password": pas
        }
    }).then(x=>{window.location.href = '/index.html';});
}

function vfemail() {
    axios.get(url,
    ).then( response => {
        var coletar;
        coletar = response.data;
        for (var i = 0;i < coletar.length;i++) {
            var emai = document.querySelector('.form').children[2].children[0].value;
            var name = document.querySelector('.form').children[1].children[0].value;
            var pas = document.querySelector('.form').children[3].children[0].value;
            if(coletar[i].email == emai){
                cop = 1;
                break;
            } else {
                if (cop == 0){
                    cop = 2;    
                } 
            }
        }
        if(cop==1) {
            alert('Esse email já existe')
            location.reload();
        }
        if(cop==2) {
            salvar(name, emai, pas);
        }
    })
}

function coletar() {
    axios.get(url,
    ).then( response => {
        var coletar;
        var res = false;
        coletar = response.data;
        for (var i = 0;i < coletar.length;i++) {
            var emai = document.querySelector('.form').children[1].children[0].value;
            var pas = document.querySelector('.form').children[2].children[0].value;
            
            if(coletar[i].email == emai && coletar[i].password == pas){
                res = true;
                window.location.href = '/entro.html';
            }
        }
         if (res == false) {
            alert('Erro!');
         }
    });
}

axios.get(url,
).then( response => {
    for (var i = 0;i < response.data.length;i++) {
        console.log(response.data[i]);
    }
});

const spost = (event) => {
    event.preventDefault();
    vfemail();
}
const sget = (event) => {
    event.preventDefault();
    coletar();
}

if (document.querySelector('.form').childElementCount == 5){
    document.querySelector('form').addEventListener('submit', sget);
} else {
    document.querySelector('form').addEventListener('submit', spost);
}

function traducao() {
    var lg = document.querySelector('.form').children[0].innerHTML;
    var form = document.querySelector('.form');
    if (form.childElementCount == 5){
        if (lg == 'Sing in') {
            form.children[0].innerHTML = 'Entrar';
            form.children[1].children[1].innerHTML = 'Usuário';
            form.children[2].children[1].innerHTML = 'Senha';
            form.children[3].children[0].innerHTML = 'Esqueceu a senha';
            form.children[3].children[1].innerHTML = 'Inscrever-se';
            form.children[4].value = 'Conectar ';
            
        } else {
            form.children[0].innerHTML = 'Sing in';
            form.children[1].children[1].innerHTML = 'Username';
            form.children[2].children[1].innerHTML = 'Password';
            form.children[3].children[0].innerHTML = 'Fogot pasword';
            form.children[3].children[1].innerHTML = 'Signup';
            form.children[4].value = 'Login ';
        }
    } else {
        if (lg == 'Create account') {
            form.children[0].innerHTML = 'Criar conta';
            form.children[1].children[1].innerHTML = 'Usuário';
            form.children[3].children[1].innerHTML = 'Senha';
            form.children[4].children[0].innerHTML = 'Esqueceu a senha';
            form.children[4].children[1].innerHTML = 'Conectar';
            form.children[5].value = 'Criar';
            
        } else {
            form.children[0].innerHTML = 'Create account';
            form.children[1].children[1].innerHTML = 'Username';
            form.children[3].children[1].innerHTML = 'Password';
            form.children[4].children[0].innerHTML = 'Fogot pasword';
            form.children[4].children[1].innerHTML = 'Login';
            form.children[5].value = 'Create';
        }
    }
}

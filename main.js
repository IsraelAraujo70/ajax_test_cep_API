// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btnCEP').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint, true);
        
//         xhttp.onreadystatechange = function() {
//             if (xhttp.readyState === 4 && xhttp.status === 200) {
//                 const response = JSON.parse(xhttp.responseText);
//                 console.log(response);
//                 if (response.erro) {
//                     alert('CEP inválido');
//                 } else {
//                     document.getElementById('endereco').value = response.logradouro;
//                 }
//             }
//         };

//         xhttp.send(); 

//     });
// });

$(document).ready(function(){
    $('#cep').mask('00000-000');
    $('#btnCEP').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;

            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            $('#endereco').val(endereco);

            setTimeout(function(){
                $('#btnCEP').find('i').removeClass('d-none');
                $('#btnCEP').find('span').addClass('d-none');
            },500);
        })
    })
})
import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault(); //dont refresh page before submit
    controller.adiciona(); //call adiciona method in controller class
});

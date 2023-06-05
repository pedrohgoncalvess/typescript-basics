import { ControllerNegotiation } from './controllers/controller-negotiation';

const controller = new ControllerNegotiation();
const form = document.querySelector('.form'); //select form in html
form.addEventListener('submit', event => { //use form to call the negociacaocontroller class
    event.preventDefault(); //dont refresh page before submit
    controller.addNegoc(); //call adiciona method in controller class
});
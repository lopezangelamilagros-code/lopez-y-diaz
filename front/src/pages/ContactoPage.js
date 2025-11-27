
import React from 'react';
import '../styles/pages/ContactoPage.css'; 
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario"><h4>
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="telefono" >Telefono </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor= "mensaje"> Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value= "Enviar" />
                    </p>
                    <p className="redes">
                        <h2>También puede contactactarnos en </h2>
                        <ul>
                        <li><h4>WhatsApp:3772343469</h4></li>
                        <li><h4>Instagram:vitalfitnessok </h4></li>
                        <li><h4>Facebook:Vital Fitness</h4></li>
                        <li><h4>Twitter: @vitalfitnessok</h4></li>
                        </ul>
                    </p>
                </h4></form>
            </div>
            <div className="datos">
                
            </div>
        </main>
    );
}

export default ContactoPage;
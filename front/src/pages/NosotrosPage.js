import React from 'react';
import '../styles/pages/NosotrosPage.css'; 
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="staff">
                <h1>Staff</h1>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg"  alt="Martin Benitez" />
                        <h1>Martin Benitez</h1>
                        <p><h2>"Especialista en fuerza y acondicionamiento físico. Te guiaré a superar tus límites con entrenamientos personalizados que se adaptan a tus objetivos."</h2></p>
                    </div>
                     <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg"  alt="Camila Bermudez" />
                        <h1>Camila Bermudez</h1>
                        <p><h2>"Entrenadora en bienestar integral. Combino rutinas dinámicas con hábitos saludables para que logres un estilo de vida equilibrado."</h2></p>
                    </div>
                     <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg"  alt="Laura Robledo" />
                        <h1>Laura Robledo</h1>
                        <p><h2>"Entrenadora certificada en fitness funcional. Mi misión es ayudarte a transformar tu energía en resultados reales y duraderos."</h2></p>
                     </div>
                     <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg"  alt="Diego Romero" />
                        <h1>Diego Romero</h1>
                        <p><h2>"Coach de musculación y rendimiento. Trabajo contigo para lograr un progreso constante, seguro y motivador."</h2></p>
                    </div>
                </div>
           </div>
        </main>
    );
}

export default NosotrosPage;

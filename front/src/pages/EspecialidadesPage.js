import React, { useEffect, useState } from 'react';
import '../styles/pages/EspecialidadesPage.css';

const EspecialidadesPage = () => {

    const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/especialidades")
            .then(res => res.json())
            .then(data => setEspecialidades(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="holder">
            <h1>ESPECIALIDADES</h1>

            <div className="Especialidad">
                <img src="img/especialidades/musculacion.jpg" width="150" alt="Musculación" />
                <div className="info">
                    <h2>Musculación y Fuerza</h2>
                    <p>
                        Enfocada en el desarrollo muscular y el aumento de la fuerza.
                        Se trabaja con pesas libres, máquinas y rutinas personalizadas
                        para lograr resultados efectivos.
                    </p>
                    <hr />
                </div>
            </div>

            <div className="Especialidad">
                <img src="img/especialidades/entrenamiento.jpg" width="150" alt="Entrenamiento Funcional" />
                <div className="info">
                    <h2>Entrenamiento Funcional</h2>
                    <p>
                        Basado en ejercicios que simulan movimientos cotidianos,
                        mejora la resistencia, la coordinación y la movilidad.
                        Ideal para quienes buscan un acondicionamiento integral.
                    </p>
                    <hr />
                </div>
            </div>

            <div className="Especialidad">
                <img src="img/especialidades/cardio.jpg" width="150" alt="Cardio" />
                <div className="info">
                    <h2>Clases de Cardio</h2>
                    <p>
                        Incluye actividades como spinning, aeróbicos y HIIT.
                        Perfecto para quemar calorías y mejorar la salud cardiovascular.
                    </p>
                    <hr />
                </div>
            </div>

            <div className="Especialidad">
                <img src="img/especialidades/yogz.jpg" width="150" alt="Yoga y Pilates" />
                <div className="info">
                    <h2>Yoga y Pilates</h2>
                    <p>
                        Disciplinas que combinan fuerza, flexibilidad y control mental.
                        Ayudan a reducir el estrés y mejorar la postura.
                    </p>
                    <hr />
                </div>
            </div>
        </section>
    );
};

export default EspecialidadesPage;

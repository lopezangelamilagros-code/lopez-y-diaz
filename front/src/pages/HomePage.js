import '../styles/pages/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => { 
  return (
    <div className="bienvenidos">

      <h1 className="titulo-principal">¡BIENVENIDOS!</h1>

      <h2 className="descripcion">
        Nos alegra que formes parte de nuestra comunidad dedicada al bienestar y la superación personal. 
        Aquí encontrarás un espacio moderno, equipado con tecnología de punta y acompañado por entrenadores 
        profesionales que te guiarán en cada paso de tu camino.
      </h2>

      <h2 className="descripcion">
        Nuestro objetivo es ayudarte a alcanzar tus metas, mantenerte motivado y disfrutar del proceso.
        Tu transformación comienza hoy… y comienza en <b>Vital Fitness</b>.
      </h2>

      <div className="carousel-container">
        <Carousel interval={5000}>

          <Carousel.Item>
            <img src="/img/lugar.png" alt="Instalaciones del gimnasio" />
          </Carousel.Item>

          <Carousel.Item>
            <img src="/img/profes.png" alt="Entrenadores profesionales" />
          </Carousel.Item>

          <Carousel.Item>
            <img src="/img/pesas.png" alt="Pesas y equipamiento" />
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
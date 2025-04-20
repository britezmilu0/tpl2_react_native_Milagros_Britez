import { useState, useEffect } from "react";
import "../styles/poemaInterface.css";

export default function PoemInterface() {
  const [currentPoem, setCurrentPoem] = useState(0);
  const [favoritePoems, setFavoritePoems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const poems = [
    {
      title: "A un olmo seco",
      author: "Antonio Machado",
      content:
        "Al olmo viejo, hendido por el rayo \ny en su mitad podrido, \n con las lluvias de abril y el sol de mayo \nalgunas hojas verdes le han salido. \n¡El olmo centenario en la colina  \n que lame el Duero! Un musgo amarillento  \nle mancha la corteza blanquecina  \n al tronco carcomido y polvoriento.  \n No será, cual los álamos cantores  \n que guardan el camino y la ribera,  \n habitado de pardos ruiseñores;  \n ejército de hormigas en hilera  \n va trepando por él, y en sus entrañas  \n urden sus telas grises las arañas.  \n Antes que te derribe, olmo del Duero,   \n con su hacha el leñador, y el carpintero   \n te convierta en melena de campana,  \n lanza de carro o yugo de carreta;   \n antes que rojo en el hogar, mañana,  \n ardas en alguna mísera caseta,  \n al borde de un camino;  \n antes que te descuaje un torbellino  \n y tronche el soplo de las sierras blancas;  \n antes que el río hasta la mar te empuje  \n por valles y barrancas, olmo, quiero anotar en mi cartera  \n la gracia de tu rama verdecida.  \n Mi corazón espera  \n también, hacia la luz y hacia la vida,  \n otro milagro de la primavera. ",
      year: 1912,
    },
    {
      title: "Sonatina",
      author: "Rubén Darío",
      content:
        "La princesa está triste La princesa está triste… ¿qué tendrá la princesa?  \n Los suspiros se escapan de su boca de fresa, \n que ha perdido la risa, que ha perdido el color.  \n La princesa está pálida en su silla de oro,  \n está mudo el teclado de su clave sonoro,  \n y en un vaso, olvidada, se desmaya una flor.  \n El jardín puebla el triunfo de los pavos reales.  \n Parlanchina, la dueña dice cosas banales,  \n y vestido de rojo piruetea el bufón.  \n La princesa no ríe, la princesa no siente;  \n la princesa persigue por el cielo de Oriente  \n la libélula vaga de una vaga ilusión.  \n ¿Piensa acaso en el príncipe de Golconda o de China,  \n o en el que ha detenido su carroza argentina  \n para ver de sus ojos la dulzura de luz?  \n ¿O en el rey de las islas de las rosas fragantes,  \n o en el que es soberano de los claros diamantes,  \n o en el dueño orgulloso de las perlas de Ormuz?  \n ¡Ay!, la pobre princesa de la boca de rosa  \n quiere ser golondrina, quiere ser mariposa,  \n tener alas ligeras, bajo el cielo volar,  \n ir al sol por la escala luminosa de un rayo,  \n saludar a los lirios con los versos de mayo  \no perderse en el viento sobre el trueno del mar.  \n Ya no quiere el palacio, ni la rueca de plata,  \n ni el halcón encantado, ni el bufón escarlata,  \n ni los cisnes unánimes en el lago de azur.  \n Y están tristes las flores por la flor de la corte;  \n los jazmines de Oriente, los nelumbos del Norte,  \n de Occidente las dalias y las rosas del Sur.  \n ¡Pobrecita princesa de los ojos azules!   \n ¡Está presa en sus oros, está presa en sus tules,  \n en la jaula de mármol del palacio real,  \n el palacio soberbio que vigilan los guardas,  \n que custodian cien negros con sus cien alabardas,  \n un lebrel que no duerme y un dragón colosal!  \n Oh, quién fuera hipsipila que dejó la crisálida!  \n (La princesa está triste. La princesa está pálida.)  \n ¡Oh visión adorada de oro, rosa y marfil!  \n ¡Quién volara a la tierra donde un príncipe existe  \n (la princesa está pálida. La princesa está triste)  \n más brillante que el alba, más hermoso que abril!  \n —¡Calla, calla, princesa —dice el hada madrina—  \n en caballo con alas hacia aquí se encamina,  \n en el cinto la espada y en la mano el azor,  \n el feliz caballero que te adora sin verte,  \n y que llega de lejos, vencedor de la Muerte,  \n  encenderte los labios con un beso de amor!",
      year: 1896,
    },
    {
      title: "Soneto XXIII",
      author: "Garcilaso de la Vega",
      content:
        "En tanto que de rosa y azucena \n se muestra la color en vuestro gesto,  \n y que vuestro mirar ardiente, honesto,  \n con clara luz la tempestad serena;  \n y en tanto que el cabello, que en la vena  \n del oro se escogió, con vuelo presto,  \n por el hermoso cuello blanco, enhiesto,   \n el viento mueve, esparce y desordena;  \n coged de vuestra alegre primavera  \n el dulce fruto, antes que el tiempo airado  \n cubra de nieve la hermosa cumbre. \n Marchitará la rosa el viento helado,  \n todo lo mudará la edad ligera,  \n por no hacer mudanza en su costumbre.",
      year: 1543,
    },
    {
      title: "Rima LIII",
      author: "Gustavo Adolfo Bécquer",
      content:
        "Volverán las oscuras golondrinas\n en tu balcón sus nidos a colgar, \n y, otra vez, con el ala a sus cristales,  \njugando, llamarán. \nPero aquéllas que el vuelo refrenaban \n tu hermosura y mi dicha a contemplar;\n aquéllas que aprendieron nuestros nombres… \n ¡ésas... no volverán!  \n \nVolverán las tupidas madreselvas \nde tu jardín las tapias a escalar,  \n y otra vez a la tarde, aún más hermosas,  \n sus flores se abrirán.  \n Pero aquéllas, cuajadas de rocío, \n cuyas gotas mirábamos temblar  \n y caer, como lágrimas del día...  \n¡ésas... no volverán!   ",
      year: 1871,
    },
    {
      title: "Poema 20",
      author: "Pablo Neruda",
      content:
        "Puedo escribir los versos más tristes esta noche.\n Escribir, por ejemplo: La noche está estrellada,\n y tiritan, azules, los astros, a lo lejos.\nPuedo escribir los versos más tristes esta noche. \nYo la quise, y a veces ella también me quiso. \nEn las noches como ésta la tuve entre mis brazos. \n La besé tantas veces bajo el cielo infinito.\n Ella me quiso, a veces yo también la quería.\n Cómo no haber amado sus grandes ojos fijos. \n Puedo escribir los versos más tristes esta noche. \nPensar que no la tengo. Sentir que la he perdido. \nOír la noche inmensa, más inmensa sin ella. \n Y el verso cae al alma como al pasto el rocío. \n Qué importa que mi amor no pudiera guardarla. \n La noche está estrellada y ella no está conmigo.",
      year: 1924,
    },
  ];
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const nextPoem = () => {
    setCurrentPoem((prev) => (prev + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentPoem((prev) => (prev - 1 + poems.length) % poems.length);
  };

  const toggleFavorite = (index) => {
    setFavoritePoems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Poemas Clásicos</h1>
        <button
          className="dark-mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </header>

      <main className="main">
        <nav className="sidebar">
          <h2>Autores</h2>
          <ul>
            {poems.map((poem, index) => (
              <li
                key={index}
                className={currentPoem === index ? "active" : ""}
                onClick={() => setCurrentPoem(index)}
              >
                {poem.author}
              </li>
            ))}
          </ul>

          <h2>Favoritos</h2>
          {favoritePoems.length === 0 ? (
            <p className="no-favorites">No hay poemas favoritos</p>
          ) : (
            <ul>
              {favoritePoems.map((index) => (
                <li key={index} onClick={() => setCurrentPoem(index)}>
                  <span className="star">★</span> {poems[index].title}
                </li>
              ))}
            </ul>
          )}
        </nav>

        <section className="poem-display">
          <div className="controls">
            <button onClick={prevPoem}>← Anterior</button>
            <button onClick={() => toggleFavorite(currentPoem)}>
              {favoritePoems.includes(currentPoem) ? "★" : "☆"}
            </button>
            <button onClick={nextPoem}>Siguiente →</button>
          </div>

          <h2>{poems[currentPoem].title}</h2>
          <div className="details">
            <h3>{poems[currentPoem].author}</h3>
            <span>{poems[currentPoem].year}</span>
          </div>

          <div className="content">
            {poems[currentPoem].content.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">Biblioteca de Poemas Clásicos © 2025</footer>
    </div>
  );
}

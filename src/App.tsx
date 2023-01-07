import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import { findAllService } from './service/chamadas';

function App() {
  const [dados, setdados] = useState<any>([]);

  useEffect(() => {
    ola();
  }, []);

  const ola = async () => {
    const response = await findAllService.allCharacters();
    console.log(response);
    setdados(response.data.results);
    console.log(dados);
  };

  return (
    <>
      <div className="all">
        <img
          className="myimg"
          src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/05/rick-e-morty-4.jpg"
          alt=""
        />
        <iframe
          className="ytframe"
          width="500"
          height="280"
          src="https://www.youtube.com/embed/REp44yoG2xI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {dados.map((pk: any) => {
          return (
            <>
              <div className="conteudo">
                <h1 className="cortxt">{pk.name}</h1>
                <h2 className="cortxt">
                  Sexo:{pk.gender == 'Male' ? 'masculino' : 'feminino'}
                </h2>
                <h2 className="cortxt">
                  Raça:{pk.species == 'Human' ? 'Humano' : pk.species}
                </h2>
                <div className="caseimg">
                  <img className="imgapi" src={pk.image} alt="" />
                  <img
                    className="meugif"
                    src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif"
                    alt=""
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;

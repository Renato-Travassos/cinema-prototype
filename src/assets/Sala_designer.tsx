import { MdChair } from 'react-icons/md';

interface Salas {
  letra: string[];
  numero_assentos: number[];
  sala_numero: number;
}

function Sala_designer({ letra, numero_assentos, sala_numero }: Salas) {
  return ( 
    <div>
      <h2>Sala {sala_numero}</h2>

      {letra.map((letraAtual) => (
        <div key={letraAtual} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          <span>{letraAtual}</span>

          
          {(() => {
  const cadeiras = [];

  for (let i = 0; i < numero_assentos.length; i++) {
    const cadeira = `${letraAtual}${i + 1}`;

    cadeiras.push(
      <div key={cadeira} title={cadeira}>
        <MdChair size={28} />
      </div>
    );
  }

  return cadeiras;
})()}

        </div>
      ))}
    </div>
  );
}

export default Sala_designer;
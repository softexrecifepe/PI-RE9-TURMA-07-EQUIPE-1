import React, { useState } from 'react';
import CandidatoCard from '../candidatoCard/candidatoCard';

function CandidateList() {
  const [filter, setFilter] = useState({
    area: '',
    cargo: '',
    experiencia: '',
  });

  const [candidates] = useState([
    {
      id: 1,
      nome: 'João Silva',
      area: 'Desenvolvimento',
      cargo: 'Desenvolvedor Frontend',
      experiencia: '3 anos',
      endereco: 'Rua X, 123',
      latitude: -23.550520,
      longitude: -46.633308,
    },
    {
      id: 2,
      nome: 'Maria Souza',
      area: 'Design',
      cargo: 'Designer Gráfico',
      experiencia: '5 anos',
      endereco: 'Rua Y, 456',
      latitude: -23.559520,
      longitude: -46.643308,
    },  
    {
      id: 3,
      nome: 'Pedro Lima',
      area: 'Desenvolvimento',
      cargo: 'Desenvolvedor Backend',
      experiencia: '4 anos',
      endereco: 'Rua Z, 789',
      latitude: -23.565520,
      longitude: -46.653308,
    },
  ]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredCandidates = candidates.filter((candidate) => {
    return (
      (!filter.area || candidate.area.toLowerCase().includes(filter.area.toLowerCase())) &&
      (!filter.cargo || candidate.cargo.toLowerCase().includes(filter.cargo.toLowerCase())) &&
      (!filter.experiencia || candidate.experiencia.toLowerCase().includes(filter.experiencia.toLowerCase()))
    );
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Candidatos</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>Área:</label>
        <input
          type="text"
          name="area"
          value={filter.area}
          onChange={handleFilterChange}
          placeholder="Filtrar por área"
        />
        <label>Cargo:</label>
        <input
          type="text"
          name="cargo"
          value={filter.cargo}
          onChange={handleFilterChange}
          placeholder="Filtrar por cargo"
        />
        <label>Experiência:</label>
        <input
          type="text"
          name="experiencia"
          value={filter.experiencia}
          onChange={handleFilterChange}
          placeholder="Filtrar por experiência"
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredCandidates.map((candidate) => (
          <CandidatoCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default CandidateList;

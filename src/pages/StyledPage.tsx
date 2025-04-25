import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 20rem;
  text-align: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
`;

function StyledPage() {
  const [profile, setProfile] = useState<any>(null);
  const [username, setUsername] = useState('');

  const fetchProfile = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    setProfile(response.data);
  };

  return (
    <Container>
      <h2>Styled-Components Card</h2>
      <Input
        type="text"
        placeholder="Digite o usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={fetchProfile}>Buscar Perfil</Button>

      {profile && (
        <Card>
          <Avatar src={profile.avatar_url} alt="Avatar" />
          <h3>{profile.name}</h3>
          <p>@{profile.login}</p>
          <p>{profile.bio}</p>
        </Card>
      )}
    </Container>
  );
}

export default StyledPage;

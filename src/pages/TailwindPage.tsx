import { useState } from 'react';
import axios from 'axios';


function TailwindPage() {
  const [profile, setProfile] = useState<any>(null);
  const [username, setUsername] = useState('');

  const fetchProfile = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    setProfile(response.data);
  };
  const sizedBox = {
    height: '20px',
  };
  const sizedBox2 = {
    width: '50px',
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-bold">Tailwind CSS Card</h2>
      <div style={sizedBox}>
      </div>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Digite o usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded w-64p-3 border-2 border-gray-400 rounded-lg w-42 focus:outline-none focus:border-blue-500"
        />
        <div style={sizedBox2}>
        </div>
        <div style={sizedBox}>
      </div>
        <button
          onClick={fetchProfile}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Buscar Perfil
        </button>
      </div>

      {profile && (
        <div className="border border-gray-300 rounded p-4 w-80 text-center shadow flex flex-col items-center gap-4">
          <img
            src={profile.avatar_url}
            alt="Avatar"
            className="rounded-full w-24 h-24"
          />
          <h3 className="text-xl font-semibold">{profile.name}</h3>
          <p className="text-blue-600">@{profile.login}</p>
          <p className="text-gray-600 text-sm mt-2">{profile.bio}</p>
        </div>
      )}
    </div>
  );
}

export default TailwindPage;

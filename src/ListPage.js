import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  // you'll need some state to hold onto the array of games
  const [games, setGames] = useState([]);
  
  console.log('||', games);
  // fetch the games on load and inject them into state
  useEffect(() => {
    async function fetchGames() {
      const games = await getGames();

      setGames(games);
    }

    fetchGames();

  }, []);

  
  return (
    <div className='list games'>
      {/* map through the games in state and render Game components */}
      <h3>List Page</h3>
    </div>
  );
}

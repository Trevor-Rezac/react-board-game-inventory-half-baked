import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createGame } from './services/fetch-utils';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();
  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;
  const [titleForm, setTitleForm] = useState('');
  const [genreForm, setGenreForm] = useState();
  const [designerForm, setDesignerForm] = useState('');
  const [descriptionForm, setDescriptionForm] = useState('');
  const [minPlayersForm, setMinPlayersForm] = useState(1);
  const [maxPlayersForm, setMaxPlayersForm] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame({
      title: titleForm,
      genre: genreForm,
      designer: designerForm,
      description: descriptionForm,
      min_players: minPlayersForm,
      max_players: maxPlayersForm
    });

    // use history.push to send the user to the list page

    history.push('/board-games');
  }

  // console.log('||', 
  //   'title form =', titleForm, 
  //   'genre form =', genreForm, 
  //   'designer form =', designerForm, 
  //   'description form =', descriptionForm, 
  //   'minplayers form =', minPlayersForm, 
  //   'maxplayers form =', maxPlayersForm);

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input 
            required name='title'
            onChange={(e) => setTitleForm(e.target.value)}
            value={titleForm}
          />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select 
            required
            onChange={(e) => setGenreForm(e.target.value)}
            value={genreForm}
          >
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input 
            required name='designer'
            onChange={(e) => setDesignerForm(e.target.value)}
            value={designerForm}
          />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input 
            required name='min_players'
            onChange={(e) => setMinPlayersForm(e.target.value)}
            value={minPlayersForm}
          />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input 
            required name='max_players' 
            onChange={(e) => setMaxPlayersForm(e.target.value)}
            value={maxPlayersForm}
          />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea 
            required name='max_players' 
            onChange={(e) => setDescriptionForm(e.target.value)}
            value={descriptionForm}
          />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}

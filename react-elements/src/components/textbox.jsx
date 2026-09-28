import { useState } from 'react';

function Textbox() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpper = () => {
    setText((prevText) => prevText.toUpperCase());
  };

  const handleLower = () => {
    setText((prevText) => prevText.toLowerCase());
  };

  const handleReset = () => {
    setText('');
  };

  return (
    <>
      <div className="m-10 p-5">
        <input
          type="text"
          placeholder="Type text here..."
          value={text}
          onChange={handleChange}
          className="border border-zinc-400 px-4 py-2 rounded text-lg w-80 outline-none focus:border-zinc-800"
        />
      </div>

      <div className="flex gap-4 m-10 p-5">
        <button
          onClick={handleUpper}
          className="px-4 py-2 bg-blue-600 text-white rounded active:scale-95"
        >
          UpperCase
        </button>

        <button
          onClick={handleLower}
          className="px-4 py-2 bg-emerald-600 text-white rounded active:scale-95"
        >
          LowerCase
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-rose-600 text-white rounded active:scale-95"
        >
          Clear Text
        </button>
      </div>
    </>
  );
}

export default Textbox;
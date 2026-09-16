const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function AlphabetBar({ activeLetter, onSelect }) {
  return (
    <div>
      {LETTERS.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelect(letter)}
          style={{ fontWeight: letter === activeLetter ? "bold" : "normal" }}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default AlphabetBar;
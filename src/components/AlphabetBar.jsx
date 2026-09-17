const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function AlphabetBar({ activeLetter, onSelect }) {
  return (
    <div className="alphabet-bar" aria-label="Browse recipes by first letter">
      {LETTERS.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelect(letter)}
          className={letter === activeLetter ? "is-active" : ""}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default AlphabetBar;

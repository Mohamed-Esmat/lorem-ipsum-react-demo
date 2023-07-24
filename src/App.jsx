import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (!isNaN(amount)) {
      const newText = data.slice(0, amount);
      setText(newText);
    }
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form action="" className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text?.map((item, index) => {
          const id = nanoid();
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;

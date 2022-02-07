import './Selectors.scss';

function Selectors() {
let example1 = `div strong {
  color: blue;
}`

let example2 = `.child_combinator > p {
  color: red;
}`

let example3 = `h4 ~ p {
  color: lime;
}`

let example4 = `.adjacent_sibling_combinator + p {
  color: cyan;
}`

  return (
    <>
      <h2>
        Selectors
      </h2>

      <section>
        <h3>Descendant Combinator</h3>
        <div>
          <p>The strong tag is a <strong>descendant</strong> of the div through p</p>
        </div>
        <code>
          {example1}
        </code>
      </section>

      <section>
        <h3>Child Combinator</h3>
        <div className='child_combinator'>
          <p>The paragraph tag is the <strong>direct child</strong> of it's containing div</p>
        </div>
        <code>
          {example2}
        </code>
      </section>

      <section>
        <h3>General Sibling Combinator</h3>
        <div>
          <h4 className='general_sibling_combinator'>I am the eldest sibling</h4>
          <p>I am the middle child</p>
          <p>I am the youngest sibling</p>
        </div>
        <code>
          {example3}
        </code>
      </section>

      <section>
        <h3>Adjacent Sibling Combinator</h3>
        <div>
          <h5 className='adjacent_sibling_combinator'>I am the eldest sibling</h5>
          <p>I am the <strong>adjacent</strong> sibling</p>
          <p>I am the youngest sibling</p>
        </div>
        <code>
          {example4}
        </code>
      </section>
    </>
  );
}

export default Selectors;
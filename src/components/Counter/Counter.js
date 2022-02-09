import './Counter.scss';

function Counter() {
let example1 = `ol {
  counter-reset: listCounter;
}

li {
  counter-increment: listCounter;
}

li::after {
  content: counter(listCounter, upper-roman);
}`

let example2 = `li::marker {
  content:  counters(listCounter, '.') ') ';
}`

  return (
    <>
      <h2 id="counter_functions">
        Counter Functions
      </h2>

      <section>
        <h3>counter</h3>
        <ol className='counter'>
          <li></li>
          <li></li>
        </ol>
        <ol className='counter'>
          <li></li>
          <li></li>
          <li></li>
        </ol>
        <code>
          {example1}
        </code>
      </section>

      <section>
        <h3>counters</h3>
        <ol>
          <li>
            <ol>
              <li></li>
              <li>
                <ol>
                  <li></li>
                </ol>
              </li>
              <li></li>
            </ol>
          </li>
          <li></li>
        </ol>
        <code>
          {example2}
        </code>
      </section>
    </>
  );
}

export default Counter;
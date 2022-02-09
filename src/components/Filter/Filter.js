import './Filter.scss';

function Filter() {
let example1 = `.blur {
  filter: blur(4px);
}`

let example2 = `.opacity {
  filter: opacity(50%);
}`

let example3 = `.drop-shadow {
  filter: drop-shadow(1rem 1rem 4px #4444dd);
}`

let example4 = `.grayscale {
  filter: grayscale(0.50);
}`

  return (
    <>
      <h2 id="filter_functions">
        Filter Functions
      </h2>

      <section>
        <h3>blur</h3>
        <img className='blur' src='https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg' alt='firefox logo' width='100vw' />
        <code>
          {example1}
        </code>
      </section>

      <section>
        <h3>opacity</h3>
        <img className='opacity' src='https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg' alt='firefox logo' width='100vw' />
        <code>
          {example2}
        </code>
      </section>

      <section>
        <h3>drop-shadow</h3>
        <img className='drop-shadow' src='https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg' alt='firefox logo' width='100vw' />
        <code>
          {example3}
        </code>
      </section>

      <section>
        <h3>grayscale</h3>
        <img className='grayscale' src='https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg' alt='firefox logo' width='100vw' />
        <code>
          {example4}
        </code>
      </section>
    </>
  );
}

export default Filter;
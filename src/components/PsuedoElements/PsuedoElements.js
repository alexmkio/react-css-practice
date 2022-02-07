import './PsuedoElements.scss';

function PsuedoElements() {
let example1 = `q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}`

let example2 = `.first_letter::first-letter {
  font-size: 200%;
  text-transform: uppercase;
}`

let example3 = `.first_line::first-line {
  color: red;
  font-weight: bold;
  text-transform: uppercase;
}`

let example4 = `.selection::selection {
  background-color: pink;
}`

  return (
    <>
      <h2>
        Psuedo-Elements
      </h2>

      <section>
        <h3>::before & ::after</h3>
        <p>these <q>arrows</q> were created with css targeting the q tag</p>
        <code>
          {example1}
        </code>
      </section>

      <section>
        <h3>::first-letter</h3>
        <p className='first_letter'>applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content</p>
        <code>
          {example2}
        </code>
      </section>

      <section>
        <h3>::first-line</h3>
        <p className='first_line'>applies styles to the first line of a block-level element. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra mollis tortor, id auctor erat rhoncus vitae. Etiam iaculis hendrerit maximus. Nullam tempor, nulla a accumsan gravida, ipsum libero gravida dui, vel scelerisque mi orci sed sapien. Cras in velit dapibus, molestie ex pulvinar, varius dolor. Proin non vehicula metus. Curabitur tortor mi, tincidunt vitae gravida a, dictum eget nunc. Duis vel euismod velit, sit amet auctor est. Aliquam maximus tortor in tincidunt aliquam. Aliquam sollicitudin turpis vitae turpis porttitor commodo. Phasellus in fringilla lacus. In cursus purus libero, sit amet tincidunt nunc ullamcorper non.</p>
        <code>
          {example3}
        </code>
      </section>

      <section>
        <h3>::selection</h3>
        <p className='selection'>applies styles to the part of a document that has been highlighted by the user. Selecting this text should turn the background color pink</p>
        <code>
          {example4}
        </code>
      </section>
    </>
  );
}

export default PsuedoElements;
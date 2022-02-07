import './BasicConcepts.scss';

function BasicConcepts() {
let example1 = `.inheritance { 
  color: red; 
}
.inheritance { 
  color: blue; 
}`

let example2 = `.specificity { 
  color: red; 
}
      
h4 { 
  color: blue; 
}`

let example3 = `.styling_inline strong {
  display: inline;
}

.styling_block strong {
  display: block;
}

.styling_inline_block strong {
  display: inline flow-root;
}`

  return (
    <>
      <h2>
        Basic Concepts
      </h2>

      <section>
        <h3>Cascade Inheritance</h3>
        <p className="inheritance">I was originally assigned red but then later assigned blue</p>
        <code>
          {example1}
        </code>
      </section>

      <section>
        <h3>Specificity and Order</h3>
        <h4 className='specificity'>The more specific a selector is the higher it's score will be.</h4>
        <code>
          {example2}
        </code>
      </section>

      <section>
        <h3>Box Model</h3>
        <img src='https://www.w3.org/TR/CSS2/images/boxdim.png' alt='diagram of box model' />
      </section>

      <section>
        <h3>Inline vs block vs inline block</h3>
        <p className='styling_inline'>I am <strong>inline-block</strong> styling.</p>
        <p className='styling_block'>I am <strong>block</strong> styling</p>
        <p className='styling_inline_block'>I am <strong>inline-block</strong> styling. Legacy. Equivalent to inline flow-root.</p>
        <code>
          {example3}
        </code>
      </section>
    </>
  );
}

export default BasicConcepts;
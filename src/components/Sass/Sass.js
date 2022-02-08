import './Sass.scss';

let exampleOne = `.sass_variables {
  background-color: $primary-color;
}`

let exampleTwo = `.sass_nesting {
  p {
    background-color: $primary-color;
  }
}`

let exampleThree = `a {
  color: blue;

  &:hover { 
    color: orange; 
  }
}`

let exampleFour = `@import '../../styles/_variables.scss'
.sass_partial {
  background-color: $primary-color;
  color: $blue-light;
}`

let exampleFive = `@mixin flexy($justify-direction) {
  display: flex;
  justify-content: $justify-direction;
}

.sass_mixin {
  @include flexy(center);
}`

let exampleSix = `@function invert($color, $amount: 100%) {
  $inverse: change-color($color, $hue: hue($color) + 180);
  @return mix($inverse, $color, $amount);
}

.sass_function {
  background-color: invert($primary-color, 60%);
}`

let exampleSeven = `.sass {
  border: 1px #f00;
  background-color: yellow;
}

.sass-extended {
  @extend .sass;
  border-width: 5px;
  border-style: dashed;
}`

function Sass() {
  return (
    <>
      <h2 id="sass">
        Sass
      </h2>

      <h3>
        Using variables
      </h3>
      <section>
        <p className='sass_variables'>$primary-color: lime;</p>
        <code>
          {exampleOne}
        </code>
      </section>

      <h3>
        Nesting
      </h3>
      <section className='sass_nesting'>
        <p>$secondary-color: red;</p>
        <code>
          {exampleTwo}
        </code>
      </section>

      <h3>
        Nesting & Psuedo-selectors
      </h3>
      <section>
        <a href='https://sass-lang.com/guide'>I am a link</a>
        <code>
          {exampleThree}
        </code>
      </section>

      <h3>
        Partials
      </h3>
      <section>
        <p className='sass_partial'>This is using an imported partial file</p>
        <code>
          {exampleFour}
        </code>
      </section>

      <h3>
        Mixins
      </h3>
      <section>
        <p className='sass_mixin'>This is using a mixin to dynamically flex the container</p>
        <code>
          {exampleFive}
        </code>
      </section>

      <h3>
        Functions
      </h3>
      <section>
        <div className='sass_function'>
          <p>This is using a function to dynamically inverts color</p>
        </div>
        <code>
          {exampleSix}
        </code>
      </section>

      <h3>
        Extending
      </h3>
      <section>
        <div className='sass-extended'>
          <p>This classname extends another</p>
        </div>
        <code>
          {exampleSeven}
        </code>
      </section>
    </>
  );
}

export default Sass;
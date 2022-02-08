import './PsuedoClasses.scss';

function PsuedoClasses() {
let example1 = `.hover:hover {
  background-color: orange;
}`

let example2 = `.active:active {
  background-color: blue;
}`

let example3 = `.focus:focus {
  background-color: yellow;
}`

let example4 = `.optional input:optional {
  background-color: pink;
}`

let example5 = `.required input:required {
  background-color: pink;
}`

let example6 = `.enabled input:enabled {
  background-color: pink;
}`

let example7 = `.disabled input:disabled {
  background-color: pink;
}`

let example8 = `.checked input:checked + label {
  color: red;
}

.checked2 input[type="checkbox"]:checked {
  box-shadow: 0 0 0 16px hotpink;
}`

let example9 = `.valid input + span {
  position: relative;
}

.valid input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

.valid input:valid {
  background-color: lime;
}

.valid input:invalid {
  border: 2px solid red;
  background-color: pink;
}

.valid input:invalid + span::before {
  content: '✖';
  color: red;
}

.valid input:valid + span::before {
  content: '✓';
  color: green;
}`

let example10 = `.in-range input + span {
  position: relative;
}

.in-range input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

.in-range input:in-range {
  background-color: lime;
}

.in-range input:out-of-range {
  border: 2px solid red;
  background-color: pink;
}

.in-range input:out-of-range + span::before {
  content: '✖';
  color: red;
}

.in-range input:in-range + span::before {
  content: '✓';
  color: green;
}`

let example11 = `.read-only input:read-only {
  background-color: pink;
}

.read-only input:read-write {
  background-color: lime;
}`

  return (
    <>
      <h2>
        Psuedo-Classes
      </h2>

      <section>
        <h3>:hover</h3>
        <p className='hover'>Hover over me</p>
        <code>
          {example1}
        </code>
      </section>

      <section>
        <h3>:active</h3>
        <p className='active'>Click on me</p>
        <code>
          {example2}
        </code>
      </section>

      <section>
        <h3>:focus</h3>
        <button className='focus'>
          Focus (click or tab) on me
        </button>
        <code>
          {example3}
        </code>
      </section>

      <section>
        <h3>:optional</h3>
        <form className='optional'>
          <div>
            <label for="url_input">I am an optional field and I should be pink</label>
            <input id="url_input" />
          </div>

          <div>
            <label for="email_input">I am a required field</label>
            <input id="email_input" required />
          </div>
        </form>
        <code>
          {example4}
        </code>
      </section>

      <section>
        <h3>:required</h3>
        <form className='required'>
          <div>
            <label for="url_input">I am an optional field</label>
            <input id="url_input" />
          </div>

          <div>
            <label for="email_input">I am a required field and I should be pink</label>
            <input id="email_input" required />
          </div>
        </form>
        <code>
          {example5}
        </code>
      </section>

      <section>
        <h3>:enabled</h3>
        <form className='enabled'>
          <div>
            <label for="aaa">I am not disabled which means I can be "enabled" by being focused on and I should be pink</label>
            <input id="aaa" />
          </div>

          <div>
            <label for="bbb">I am a disabled field</label>
            <input id="bbb" disabled="disabled" />
          </div>
        </form>
        <code>
          {example6}
        </code>
      </section>

      <section>
        <h3>:disabled</h3>
        <form className='disabled'>
          <div>
            <label for="aaa">I am not disabled which means I can be "enabled" by being focused on</label>
            <input id="aaa" />
          </div>

          <div>
            <label for="bbb">I am a disabled field and I should be pink</label>
            <input id="bbb" disabled="disabled" />
          </div>
        </form>
        <code>
          {example7}
        </code>
      </section>

      <section>
        <h3>:checked</h3>
        <div className='checked'>
          <input type="radio" id="radio" />
          <label for="radio">Yes</label>
        </div>

        <div className='checked checked2'>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">Check me!</label>
        </div>
        <code>
          {example8}
        </code>
      </section>

      <section>
        <h3>:valid & :invalid</h3>
        <form className='valid'>
          <div>
            <label for="email">email</label>
            <input id="email" type="email" required />
            <span></span>
          </div>

          <div>
            <label for="number">number</label>
            <input id="number" type="number" required />
            <span></span>
          </div>

          <div>
            <label for="number">number using regex</label>
            <input id="number" type="text" pattern='[0-9]+' required />
            <span></span>
          </div>

          <div>
            <label for="text">text</label>
            <input id="text" type="text" required />
            <span></span>
          </div>
        </form>
        <code>
          {example9}
        </code>
      </section>

      <section>
        <h3>:in-range and :out-of-range</h3>
        <form className='in-range'>
          <div>
            <label for="number">I am in range between 1 and 10</label>
            <input id="number" type="number" min="1" max="10" />
            <span></span>
          </div>
        </form>
        <code>
          {example10}
        </code>
      </section>

      <section>
        <h3>:read-only and :read-write</h3>
        <form className='read-only'>
          <div>
            <label for="aaa">I am a read only field</label>
            <input id="aaa" value="Alex K" readOnly />
          </div>

          <div>
            <label for="bbb">I am not a read only field. I can be edited.</label>
            <input id="bbb" placeholder='123 address Drive'/>
          </div>
        </form>
        <code>
          {example11}
        </code>
      </section>
    </>
  );
}

export default PsuedoClasses;
import './Math.scss';

function Math() {
  return (
    <>
      <h2 id="math_functions">
        Math Functions
      </h2>

      <section>
        <h3>calc</h3>
        <p className='calc1'>I am 1rem</p>
        <p className='calc2'>I am 1rem + 1 vw</p>
      </section>

      <section>
        <h3>clamp</h3>
        <p className='clamp'>minimum value (1rem), preferred value (2vw), maximum value (3rem)</p>
      </section>

      <section>
        <h3>min</h3>
        <p className='min'>min(2rem, 2em, 2vw, 20px)</p>
      </section>

      <section>
        <h3>max</h3>
        <p className='max'>max(2rem, 2em, 2vw, 20px)</p>
      </section>

      <section>
        <h3>abs</h3>
        <p className='abs'>abs(-20px)</p>
      </section>
    </>
  );
}

export default Math;
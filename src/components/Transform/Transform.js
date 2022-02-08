import './Transform.scss';

function Transform() {
let example1 = `.Xrotated {
  transform: rotateX(45deg);
}

.Yrotated {
  transform: rotateY(45deg);
}

.Zrotated {
  transform: rotateZ(45deg);
}

.rotate3d {
  transform: rotate3d(1, 1, 1, 45deg);
}`

let example2 = `.skew {
  transform: skew(15deg, 15deg);
}`

let example3 = `.Xscaled {
  transform: scaleX(2);
}

.Yscaled {
  transform: scaleY(2);
}

.Zscaled {
  transform: scaleZ(2);
}

.scale3d {
  transform: scale3d(2, 2, 2);
}`

let example4 = `.Xtranslated {
  transform: translateX(200px);
}

.Ytranslated {
  transform: translateY(200px);
}

.Ztranslated {
  transform: translateZ(200px);
}

.translate3d {
  transform: translate3d(200px, 200px, 200px);
}`

  return (
    <>
      <h2 id="transform_functions">
        Transform Functions
      </h2>

      <section className='rotate'>
        <h3>Rotate</h3>
        <div class="Xrotated">X Rotated</div>
        <div class="Yrotated">Y Rotated</div>
        <div class="Zrotated">Z Rotated</div>
        <div class="rotate3d">Rotated 3d</div>
        <code>
          {example1}
        </code>
      </section>

      <section className='rotate'>
        <h3>Skew</h3>
        <div class="skew">Skewed</div>
        <code>
          {example2}
        </code>
      </section>

      <section className='rotate'>
        <h3>Scale</h3>
        <div class="Xscaled">X Scaled</div>
        <div class="Yscaled">Y Scaled</div>
        <div class="Zscaled">Z Scaled</div>
        <div class="scale3d">Scaled 3d</div>
        <code>
          {example3}
        </code>
      </section>

      <section className='rotate'>
        <h3>Translate</h3>
        <div class="Xtranslated">X Translated</div>
        <div class="Ytranslated">Y Translated</div>
        <div class="Ztranslated">Z Translated</div>
        <div class="translate3d">Translated 3d</div>
        <code>
          {example4}
        </code>
      </section>
    </>
  );
}

export default Transform;
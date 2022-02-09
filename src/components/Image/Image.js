import './Image.scss';

function Image() {
let example1 = `.image {
  background-image: image-set(
    url("http://download.opencontent.netflix.com.s3.amazonaws.com/AV1/Chimera/AVIF/Chimera-AV1-10bit-1280x720-2380kbps-100.avif") 2x,
    url("https://upload.wikimedia.org/wikipedia/commons/d/d7/Sky.jpg") 2x,
    url("https://img.lovepik.com/free-png/20210924/lovepik-good-night-night-sky-png-image_401329739_wh1200.png") 2.8x,
    url("https://svgsilh.com/svg/312449.svg") 3x);
}`

let example2 = `.conic-wheel {
  background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
  );
}

.conic-gradient {
  background: conic-gradient(red, orange, yellow, green, blue);
}

.conic-pie {
  background: conic-gradient( 
    red 45deg, orange 45deg 90deg, yellow 90deg 135deg, 
    green 135deg 180deg, blue 180deg 225deg, purple 225deg);
}`

let example3 = `.linear1 {
  background: linear-gradient(#e66465, #9198e5);
}

.linear2 {
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}

.linear3 {
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
}`

let example4 = `.radial_gradient {
  background: radial-gradient(red, yellow);
}`

let example5 = `.repeating-conic-wheel {
  background: repeating-conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%) 33%
  );
}

.repeating-conic-gradient {
  background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    green, blue 2deg 5deg, green, yellow 15deg 18deg, green 20deg);
}

.repeating-conic-pie {
  background: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}`

let example6 = `.repeating-linear1 {
  background: repeating-linear-gradient(#e66465, #9198e5 25%);
}

.repeating-linear2 {
  background: repeating-linear-gradient(45deg, #e66465, #9198e5 25%);
}

.repeating-linear3 {
  background: repeating-linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c 25%);
}`

let example7 = `.repeating-radial_gradient {
  background: repeating-radial-gradient(red, yellow 20%);
}`

  return (
    <>
      <h2 id="image_functions">
        Image Functions
      </h2>

      <section className="image_set">
        <h3>image-set()</h3>
        <div className='image'></div>
        <code>
          {example1}
        </code>
      </section>

      <section className='conic_section'>
        <h3>conic-gradient</h3>
        <div className='conic-wheel'></div>
        <div className='conic-gradient'></div>
        <div className='conic-pie'></div>
        <code>
          {example2}
        </code>
      </section>

      <section className='conic_section'>
        <h3>linear-gradient</h3>
        <div className='linear1'></div>
        <div className='linear2'></div>
        <div className='linear3'></div>
        <code>
          {example3}
        </code>
      </section>

      <section className='conic_section'>
        <h3>radial-gradient</h3>
        <div className='radial_gradient'></div>
        <code>
          {example4}
        </code>
      </section>

      <section className='conic_section'>
        <h3>repeating-conic-gradient</h3>
        <div className='repeating-conic-wheel'></div>
        <div className='repeating-conic-gradient'></div>
        <div className='repeating-conic-pie'></div>
        <code>
          {example5}
        </code>
      </section>

      <section className='conic_section'>
        <h3>repeating-linear-gradient</h3>
        <div className='repeating-linear1'></div>
        <div className='repeating-linear2'></div>
        <div className='repeating-linear3'></div>
        <code>
          {example6}
        </code>
      </section>

      <section className='conic_section'>
        <h3>repeating-radial-gradient</h3>
        <div className='repeating-radial_gradient'></div>
        <code>
          {example7}
        </code>
      </section>
    </>
  );
}

export default Image;
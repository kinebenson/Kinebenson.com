import "./Hero.css"
export default function Hero (){

return (
  <section id="hero-section">
    <div className="container hero">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <h1>Home page</h1>
            <p>This is a home page of my portfolio website</p>
            <button className="btn btn-primary">click</button>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </section>
);

}
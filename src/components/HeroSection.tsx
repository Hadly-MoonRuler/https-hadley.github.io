import heroImage from '../img/hero-image.jpeg'

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hadley Yuu</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Developer</span>{" "}
                        <br/>
                        Researcher
                    </h1>
                    <p className="hero--section-description">
                        Can really develop software independently
                        <br/> And have ability of scientific research
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src={heroImage} alt="Hero Section"/>
            </div>
        </section>
    );
}

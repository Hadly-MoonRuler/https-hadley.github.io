import heroImage from '../img/hero-image.jpeg'

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">于海涛</p>
                    <h1 className="hero--section--title">
                        {/*<span className="hero--section-title--color">全栈开发</span>{" "}*/}
                        {/*<br/>*/}
                        中国农业大学
                    </h1>
                    <p className="hero--section-description">
                        {/*Can really develop software independently*/}
                        农业工程与信息技术
                        <br/> 致力于农机自动驾驶研究
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src={heroImage} alt="Hero Section"/>
            </div>
        </section>
    );
}

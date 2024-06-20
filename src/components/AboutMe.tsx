import AboutMeImage from '../img/about-me.jpeg'

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src={AboutMeImage} alt="About Me"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    {/*<p className="section--title">关于我</p>*/}
                    <h1 className="skills-section--heading">关于我</h1>
                    <p className="hero--section-description">
                        性格开朗、乐观向上，具有较强的责任心和团队合作精神。在学习和研究中，我始终保持积极的态度，努力追求卓越。
                        我将会专注于农业机械自动驾驶技术的研究，努力掌握专业知识和技能。我相信只有不断学习和探索，才能在自己的领域内取得突破。积极交流并汲取新的知识和见解。
                        </p>
                    <p className="hero--section-description">
                        我的目标是通过扎实的学习和实践，为未来打下坚实的基础，并为行业的发展贡献自己的力量。我坚信，只要保持对学习的热爱和对工作的认真态度，一定能实现自己的梦想和目标。
                    </p>
                </div>
            </div>
        </section>
    );
}

import Image1 from '../img/placeholder-image.png';
import Image2 from '../img/placeholder-image-1.png';
import Image3 from '../img/placeholder-image-2.png';

export default function MyPortfolio() {
    const portfolio = [
        {
            "id": "1",
            "src": Image1,
            "title": "Ahuse",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
            "link": "View In Github"
        },
        {
            "id": "2",
            "src": Image2,
            "title": "App Dashboard",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
            "link": "View In Github"
        },
        {
            "id": "3",
            "src": Image3,
            "title": "Easy Rentn",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
            "link": "View In Github"
        }
    ]

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <p className="text-sm portfolio--link">
                                {item.link}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
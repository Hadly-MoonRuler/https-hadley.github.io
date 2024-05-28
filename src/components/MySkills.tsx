import Image1 from '../img/product-chain-1.png';
import Image2 from '../img/tag-1.png';
import Image3 from '../img/feather-pen-2.png';
import Image4 from '../img/feather-pen-1.png';

export default function MySkills() {
    const data =  [
        {
            "id": "1",
            "src": Image1,
            "title": "AI",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
        },
        {
            "id": "2",
            "src": Image2,
            "title": "SB?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
        },
        {
            "id": "3",
            "src": Image3,
            "title": "UI & UX Design",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
        },
        {
            "id": "4",
            "src": Image4,
            "title": "Coding",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
        }
    ];

    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

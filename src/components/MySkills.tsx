import Image1 from '../img/product-chain-1.png';
import Image2 from '../img/tag-1.png';
import Image3 from '../img/feather-pen-2.png';
import Image4 from '../img/feather-pen-1.png';
import React from "react";

export default function MySkills() {
    const data =  [
        {
            "id": "1",
            "src": Image4,
            "title": "开发技能",
            "description": "能够独立完成后端与前端的架构设计，技术栈为：React、Typescript、HTML/CSS、Java、Spring Framework、MySQL、Kafka、Docker、Git、Gradle"
        },
        {
            "id": "2",
            "src": Image3,
            "title": "教育背景",
            "description": "中国农业大学-农业工程与信息技术\n大连外国语大学-网络工程"
        },
        {
            "id": "3",
            "src": Image2,
            "title": "竞赛奖项",
            "description": "蓝桥杯JAVA-B组国家三等奖\nKaggle铜牌\n大学生数学竞赛省二等奖\n辽宁省一带一路创新创业大赛银奖\n"
        },
        // {
        //     "id": "4",
        //     "src": Image4,
        //     "title": "Coding",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
        // }
    ];

    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="sub--title">My Skills</p>
                <h2 className="section--heading">我的技能</h2>
                {/*<p className="section--title">My Skills</p>*/}
                {/*<h2 className="section--title">Skills</h2>*/}
                {/*<h2 className="skills--section--heading">My Expertise</h2>*/}
            </div>
            <div className="skills--section--container">
                {data?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            {item.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

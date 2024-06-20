import Image1 from '../img/placeholder-image.png';
import Image2 from '../img/placeholder-image-1.png';
import Image3 from '../img/placeholder-image-2.jpg';
import React from "react";

export default function MyPortfolio() {
    const portfolio = [
        {
            "id": "1",
            "src": Image1,
            "title": "五子棋AI对战",
            "description": "利用Python编写的五子棋AI对战系统采用了minimax算法和alpha-beta剪枝优化技术；AI方评估棋盘状态并进行最优决策，minimax算法计算每一步的最大最小值，通过alpha-beta剪枝效减少了计算量，使AI能够更快做出决策",
            "link": "https://github.com/HadleyYu/GomokuAI"
        },
        {
            "id": "2",
            "src": Image2,
            "title": "基于深度学习的图像识别实践",
            "description": "项目实现VGG和ResNet架构，深化了对卷积网络和深度学习训练机制的理解。学习过程中手动推导神经网络算法，包括前向传播和反向传播，掌握了模型搭建和优化过程。学会利用TensorFlow的Keras框架和OpenCV进行图像处理，显著提升识别效率",
            "link": "View In Github"
        },
        {
            "id": "3",
            "src": Image3,
            "title": "懂车王手机应用",
            "description": "是一个专注于汽车领域的综合性平台，提供汽车资讯、评测、导购、用车指南等服务。用户可以通过懂车帝了解最新的汽车动态、专业评测和购车建议，帮助用户做出更明智的购车决策。平台还提供车主经验分享和互动社区，提升用户的用车体验",
            "link": "View In Github"
        }
    ]

    const handleClick = (link: string) => {
        window.open(link, '_blank');
        // window.location.href = link;
    };

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">项目经历</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card" onClick={() => handleClick(item.link)}>
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">
                                    {item.description.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br/>
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                            <p className="text-sm portfolio--link">
                                View In Github
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

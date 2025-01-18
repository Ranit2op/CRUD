import React, { useState } from "react";
import CardDetails from "./Child";


interface Card {
    id: number;
    name: string;
    loc: string;
    image: string;
}

const CardLayout: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const cards: Card[] = [
        { id: 1, name: "Rohit sharma", loc: "Mumbai Indians  ", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg" },
        { id: 2, name: "Hardik pandya", loc: "Mumbai Indians", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT54wh1Zy6WDtfVeSMrNoRpbfbuwRSXEevLA3bNExYLEbX0cQHQCaL-lLKqJGvWvJJYDBpMauizaalxNZ6HcK65GMtNTX8TalJsprLW5yo" },
        { id: 3, name: "Jasprit Bumrah", loc: "Mumbai Indians", image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg" },
        { id: 4, name: "Suryakumar Yadav", loc: "Mumbai Indians", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwVL8dLfPbPVfUmZP1UxeUoAMGuEI-owJRFGX5lJcWsZzc81Gwluk84N6kLv9d5MhRi5RXNOc899YCpSYicW_TZw" },
        { id: 5, name: "Trent Boult", loc: "Mumbai Indians", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQMQ9npL3DoExILmmkjfyuVn4T1X676CzppF7Iy51Waa3Zqo7YZVfEhT2Chml7oE-EcrI45BjmywPu45J0" },
        { id: 6, name: "Tilak varma", loc: "Mumbai Indians", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/391000/391039.jpg" },
        { id: 9, name: "Robin minz", loc: "Mumbai Indians", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR63nksMYJUhpMd7iVsvbymHOK0Elc9D7XTkXD3xaOVpFrCIsNDq0w6Jto_WQ2ZhMOi89tnsdLUloHervAID_JKf-ZlaoHmJNc-FEostw" },
        { id: 10, name: "Ryan Rickelton", loc: "Mumbai Indians", image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/ryan-rickelton.png" },
        { id: 11, name: "Deepak Chahar", loc: "Mumbai Indians", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQx1nAV0HEdZw6XADbsJSWDRprC7A4PdOGJsPDqO8O6WtPhecbYo5QYM1uFlE0mr9YBZAU3TBeX1DXa58FeYiY-Up-4sIAlY6ElXKmNFw" },
        { id: 12, name: "Allah Ghazanfar", loc: "Mumbai Indians", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoUtrJlN01qYBaRXT9MHByHKJZPidYzVkSA&s" },
        { id: 13, name: "will jacks", loc: "Mumbai Indians", image: "https://www.pretoria-capitals.com/static-assets/images/players/66927.png?v=2.42" },

    ];

    return (
        <div className="container mt-4">
            <div className="row g-3">
                {
                    cards.map((item) => (
                        <div key={item.id} className="col-md-3">
                            <div className="card-text-center">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p>{item.loc}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setSelectedCard(item)}
                                    >Show Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CardDetails card={selectedCard} />
        </div>
    );
}

export default CardLayout;
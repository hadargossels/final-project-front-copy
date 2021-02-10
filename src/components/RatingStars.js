export default function RatingStars(num) {

    const stars = {0: <span>Unrated</span>,
                    1.0: <span className="text-warning"><i className="fas fa-star"></i></span>,
                    2.0: <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                    3.0: <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                    4.0: <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                    5.0: <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                };
    
    return stars[num];
}

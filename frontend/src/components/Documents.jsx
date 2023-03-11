export const ProjectCard = ({ title, imgUrl}) => {
    return (
        <div sm={6} md={4}>
            <div className="card-box" data-aos="flip-left" data-aos-duration="1000">
                <a><img src={imgUrl} alt='Project Image'/></a>
                <div className="projectCard-text">
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}
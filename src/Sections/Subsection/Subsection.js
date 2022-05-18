import React from "react";
import {Carousel} from '3d-react-carousal';

class SubSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: this.props.header,
            sub_header: this.props.subHeader,
            titles: this.props.titles,
            type: this.props.type,
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        let project_images = [];
        this.state.titles.map((item, i) => {

            if (this.state.width >= 991) {
                project_images.push(
                    <div className="each-projects-desktop">
                        <span className="project-title">{item}</span>
                        <div className="card" style={{ width: "100%", borderRadius: '20px', border: '0', boxShadow: '4px -2px 4px 0px #DCDCDC' }}>
                            <img className="image-project" src={(this.props.type).concat("/" + (parseInt(i) + 1) + ".svg")} alt={item} />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                project_images.push(
                    <div className="each-projects-mobile">
                        <div class="card" style={{ width: "18rem", borderRadius: '20px', border: '0', boxShadow: '4px -2px 4px 0px #DCDCDC' }}>
                            <img className="image-project" src={(this.props.type).concat("/" + (parseInt(i) + 1) + ".svg")} alt={item} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="project-title">{item}</span> </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>);
            }

        });
        return (
            <div>
                <div className="header-my-works">
                    <h1>{this.state.header}</h1>
                    <p>{this.state.sub_header}</p>
                </div>
                <div className="content">
                    {(this.state.width >= 991) ? (<div className="content-projects-desktop">
                        {project_images}
                    </div>) : (<Carousel className="content-projects-mobile" slides={project_images} autoplay={true} interval={5000} arrows={false}/> )}

                </div>
            </div>
        );
    }

}

export default SubSection;
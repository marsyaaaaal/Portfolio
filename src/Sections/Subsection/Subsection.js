import React from "react";


class SubSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: this.props.header,
            sub_header: this.props.subHeader,
            titles: this.props.titles,
            type: this.props.type
        };

    }

    render() {
        let project_images = [];
        this.state.titles.map((item, i) => {

            project_images.push(
                <div className="each-projects">
                    <span className="project-title">{item}</span>
                    <img src={(this.props.type).concat("/"+(parseInt(i)+1)+".svg")} />
                </div>

            );
        });
        return (
            <div>
                <div className="header-my-works">
                    <h1>{this.state.header}</h1>
                    <p>{this.state.sub_header}</p>
                </div>
                <div className="content">
                    <div className="content-projects">
                        {project_images}
                    </div>
                </div>
            </div>
        );
    }

}

export default SubSection;
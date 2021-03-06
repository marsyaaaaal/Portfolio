import React from "react";
import { useState } from "react";
import { Carousel } from '3d-react-carousal';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";




const Item = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(true);
    const toggleClose = () => setIsOpen(false);


    const actionToOpen = () => {
        window.open(props.data.link, '_blank').focus();
    }

    return (
        <motion.div type="button" layout onClick={actionToOpen} whileHover={toggleOpen} onHoverEnd={toggleClose} initial={{ borderRadius: 10 }}>
            <div className="card" style={{ width: "100%", borderRadius: '10px', border: '0'}}>
                <img className="image-project" src={(props.type).concat("/" + (parseInt(props.ctr) + 1) + ".svg")} alt={props.data.title} />
            </div>

            <AnimatePresence>{isOpen && <Content description={props.data.description} />}</AnimatePresence>


        </motion.div>
    );
}

const Content = (props) => {
    //card body of projects (descriptions)
    return (
        <motion.div class="card-body"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="card-text">
                {props.description}
            </div>
        </motion.div >
    );
}

class SubSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: this.props.header,
            sub_header: this.props.subHeader,
            type: this.props.type,
            width: 0,
            height: 0,
            data: props.data
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
        this.state.data.map((item, i) => {
            if (this.state.width >= 991) {
                project_images.push(
                    <div className="each-projects-desktop" >
                        <span className="project-title">{item.title}</span>
                        <Item data={item} ctr={i} type={this.props.type} />
                    </div>
                );
            }
            else {
                project_images.push(
                    <div className="each-projects-mobile">
                        <div class="card" style={{ width: "18rem", borderRadius: '20px', border: '0', boxShadow: '4px -2px 4px 0px #DCDCDC' }}>
                            <img className="image-project" src={(this.props.type).concat("/" + (parseInt(i) + 1) + ".svg")} alt={item.title} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="project-title">{item.title}</span> </h5>
                                <p class="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>);
            }

        });
        return (
            <div>
                <motion.div className="header-my-works">
                    <h1 type="button" onClick={() => { window.open(this.props.link, "_blank").focus() }}>{this.state.header}</h1>
                    <p>{this.state.sub_header}</p>
                </motion.div>
                <div className="content">
                    {(this.state.width >= 991) ? (
                        <AnimateSharedLayout>
                            <div className="content-projects-desktop">
                                {project_images}
                            </div>
                        </AnimateSharedLayout>

                    ) : (<Carousel className="content-projects-mobile" slides={project_images} autoplay={true} interval={5000} arrows={false}
                    />)}

                </div>
            </div>
        );
    }

}

export default SubSection;


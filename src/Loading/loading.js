import './loading.css';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// const override = css`
//   display: block;
//   margin: 2;
//   border-color: white;
// `;

const Loading = () => {

    return (
        <div>
            <div className='main-loading'>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <div className="gif-div"> 
                        <img className='gif' src='../logo-black.gif' />
                    </div>
                    <div  className="">
                        <BeatLoader color="white" />
                    </div>
                </div>
            </div>

        </div >

    );


}
export default Loading;
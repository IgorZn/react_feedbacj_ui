import React, {useContext} from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes} from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({item, setFeedback}) {
    const {handleClose} = useContext(FeedbackContext);

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleClose(item.id)}>
                <FaTimes color={"purple"} />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.prototype = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
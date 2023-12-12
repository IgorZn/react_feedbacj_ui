import React, {useContext} from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({item}) {
    const {handleClose, editFeedback} = useContext(FeedbackContext);

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleClose(item.id)}>
                <FaTimes color={"purple"} />
            </button>
            <button className="edit" onClick={()=> editFeedback(item)}><FaEdit color={'purple'}/> </button>
            <div className="text-display" onClick={()=> editFeedback(item)}>{item.text}</div>
        </Card>
    );
}

FeedbackItem.prototype = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
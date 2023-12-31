import React from 'react';
import FeedbackItem from "./FeedbackItem";
import {motion, AnimatePresence} from "framer-motion";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";
import MySpinner from "./shared/MySpinner";

function FeedBackList() {
    const {feedback, isLoading} = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }

    return isLoading ? <MySpinner /> : (
        <div className={"feedback-list"}>
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <FeedbackItem key={item.id} item={item}/>
                    </motion.div>
                ))}

            </AnimatePresence>
        </div>
    )
}

//     return <div className={"feedback-list"}>
//         {feedback.map(item => (
//             <FeedbackItem key={item.id} item={item} setFeedback={setFeedback}/>
//         ))}
//     </div>
// }

// FeedBackList.prototype = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             ration: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedBackList;
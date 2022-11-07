import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option =>
        <Button
            type='button'
            name={option}
            onClick={onLeaveFeedback}
            key={option}>            
            {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>);
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
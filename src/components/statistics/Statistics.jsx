import PropTypes from 'prop-types';
import { StatisticsSection, StatisticsTitle, StatisticsText } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <StatisticsSection>        
            <StatisticsTitle>Statistics</StatisticsTitle>
            <StatisticsText>Good: {good}</StatisticsText>
            <StatisticsText>Neutral: {neutral}</StatisticsText>
            <StatisticsText>Bad: {bad}</StatisticsText>
            <StatisticsText>Total: {total}</StatisticsText>
            <StatisticsText>Positive feedback: {positivePercentage && positivePercentage !== 0
            ? `${positivePercentage}%` : 0 }</StatisticsText>      
        </StatisticsSection>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
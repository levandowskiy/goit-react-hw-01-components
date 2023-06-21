import PropTypes from "prop-types";

import {
  Section,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired, 
  ).isRequired,
};

import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Name,
  Text,
  Stats,
  StatsItem,
  Fhoto,
  StatsInfo,
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Fhoto src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsItem>
          <Text>Followers</Text>
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <Text>Views</Text>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <Text>Likes</Text>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired, 
}

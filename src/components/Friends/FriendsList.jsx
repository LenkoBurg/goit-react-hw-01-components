import s from './FriendsList.module.css'
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem/FriendsItem'

function FriendsList({friends}) {
    return <ul className={s.list}>
        <FriendsItem friends = {friends} />
    </ul>
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default FriendsList
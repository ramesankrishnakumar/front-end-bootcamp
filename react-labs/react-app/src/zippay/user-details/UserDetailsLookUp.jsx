import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { users } from '../../../data/users.json';
import UserDetails from './UserDetails';
import './UserDetails.css';

function UserDetailsLookUp() {
	let params = useParams();
	let userId = params.userId;

	let user = getUserById(userId);
	let navigate = useNavigate();

	function getUserById(userId) {
		return users.find((user) => user.userId === userId);
	}

	return (
		<div>
			<UserDetails user={user} />
			<button
				onClick={() => navigate(-1)}
				className="btn btn-primary"
			>
				back
			</button>
		</div>
	);
}

export default UserDetailsLookUp;

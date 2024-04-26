import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetails from './UserDetails';
import './UserDetails.css';

function UserDetailsLookUp() {
	const [users, setUsers] = useState({});

	useEffect(() => {
		async function getData() {
			let url = 'http://localhost:8006/users';
			console.log('creating users store');
			try {
				let response = await fetch(url);
				if (response.ok) {
					let results = await response.json();
					let userDictionary = {};
					results.forEach((user) => {
						userDictionary[user.userId] = user;
					});
					setUsers(userDictionary);
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			} catch (error) {
				console.error('async-await: Could not fetch data:', error);
			}
		}

		getData();
	}, []);

	let params = useParams();
	let userId = params.userId;

	let user = getUserById(userId);
	let navigate = useNavigate();

	function getUserById(userId) {
		return users[userId];
	}

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<UserDetails user={user} />
			&nbsp;
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

import React from 'react';

function UserDetails({ user }) {
	if (typeof user === 'undefined') {
		return (
			<>
				<div>user not found</div>
			</>
		);
	}

	return (
		<div>
			<div className="profile-top">
				<h1>
					{user.firstName} {user.lastName}
				</h1>
				<div className="profileImage">
					<img
						src={`https://robohash.org/${user.userId}`}
						alt="Profile Picture"
					/>
				</div>
			</div>

			<div>
				<ul>
					<li>Username: {user.userId}</li>
					<li>Email: {user.email}</li>
					<li>City: {user.city}</li>
					<li>PostalCode: {user.postalCode}</li>
					<li>Province: {user.province}</li>
				</ul>
			</div>
		</div>
	);
}

export default UserDetails;

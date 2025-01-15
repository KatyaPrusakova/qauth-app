import { useAuth } from '@quorini/ui-react'

function EventPage() {
	const { user, logout } = useAuth()

	return (
		<div>
			<p>{user.username}</p>
			<button onClick={logout}>Log out</button>
    </div>
	)
}
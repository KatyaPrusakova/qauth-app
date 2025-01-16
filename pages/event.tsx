import React, { useEffect } from 'react';
import { useAuth } from '@quorini/ui-react'
import { listEvents, listEventsResponse } from './src/quorini-queries'
import { query } from '@quorini/core'

const About = () => {
	const { user, logout } = useAuth()
	const [events, setEvents] = React.useState({});
  
	// console.log(user, "user")
	const fetchEvents = async () => {
		try {
		  const response: listEventsResponse = await query(listEvents);
		  console.log("Fetched events:", response);
		  setEvents(response.listEvents || []);

		} catch (error) {
		  console.error("Error fetching events:", error);
		}
	  };

	useEffect(() => {
		fetchEvents(); // Fetch events when the component mounts
	  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page.</p>
	
	  <p>{user.username}</p>
			<button onClick={logout}>Log out</button>
      {/* Events list */}
      <h2>Upcoming Events</h2>
      {/* {events && events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong> - {event.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available at the moment.</p>
      )} */}
    </div>
  );
};

export default About;
import { useRouter } from "next/router";
import { useState } from "react";

const EventsListingPage = ({ eventsList = [] }) => {
  const [events, setEvents] = useState(eventsList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events/?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Fetch Sports events</button>
      <h1>Events Listing Page</h1>
      {events?.map(({ id, title, description, category, date }) => (
        <div key={id}>
          <h2>
            {id} {title} {date} | {category}
          </h2>
          <p>{description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default EventsListingPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `?category=${category}` : "";
  const response = await fetch(`http://localhost:4000/events/${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventsList: data,
    },
  };
}

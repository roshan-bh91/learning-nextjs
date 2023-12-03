const UserList = ({ users }) => {
  return (
    <div>
      <h1>Users list page</h1>
      <ol>
        {users.map((user) => (
          <li key={user?.id}>
            <p>
              {user.name}: {user.email}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonFormattedResponse = await apiResponse.json();
  return {
    props: {
      users: jsonFormattedResponse,
    },
  };
}

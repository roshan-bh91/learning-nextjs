const User = ({ userInfo }) => {
  return (
    <>
      <p>
        {userInfo.name}: {userInfo.email}
      </p>
    </>
  );
};

export default User;

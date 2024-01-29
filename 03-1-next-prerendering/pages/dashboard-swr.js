import useSwr from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const apiData = await response.json();
  return apiData;
};

const DashboardSWR = () => {
  const {
    data: dashboardData,
    isLoading,
    error,
  } = useSwr("dashboard", fetcher);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>An error occured</h2>;
  }

  return (
    <div>
      <h2>Dashboard Data</h2>
      <p>Posts: {dashboardData.posts}</p>
      <p>Likes: {dashboardData.likes}</p>
      <p>Following: {dashboardData.following}</p>
      <p>Followers: {dashboardData.followers}</p>
    </div>
  );
};
export default DashboardSWR;

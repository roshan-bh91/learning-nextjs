import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const apiData = await response.json();
      setIsLoading(false);
      setDashboardData(apiData);
    })();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard data</h2>
      <p>Posts: {dashboardData.posts}</p>
      <p>Likes: {dashboardData.likes}</p>
      <p>Followers: {dashboardData.followers}</p>
      <p>Following: {dashboardData.following}</p>
    </div>
  );
};

export default DashboardPage;

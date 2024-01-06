const NewsArticlesList = ({ articles = [] }) => {
  return (
    <>
      <h1>News Articles List</h1>
      {articles.map(({ id, title, category }) => {
        return (
          <p key={id}>
            {title}: {category}
          </p>
        );
      })}
    </>
  );
};

export default NewsArticlesList;

export async function getServerSideProps() {
  const apiResponse = await fetch("http://localhost:4000/news");
  const data = await apiResponse.json();
  return {
    props: {
      articles: data,
    },
  };
}

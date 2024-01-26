const NewsArticlesListByCategory = ({ articles = [], category }) => {
  return (
    <div>
      <h1>News category: {category}</h1>
      {articles.map(({ id, title, category }) => (
        <p key={id}>
          {title}: {category}
        </p>
      ))}
    </div>
  );
};

export default NewsArticlesListByCategory;

export async function getServerSideProps(context) {
  const { req, res, query } = context;
  const { category } = context.params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const articlesList = await response.json();
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Vishwas"]);

  console.log(query);

  console.log(`Pre rendering news articles for ${category}`);
  return {
    props: {
      articles: articlesList,
      category,
    },
  };
}

import { useRouter } from "next/router";

const DocsPage = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <h1>
        Docs Page loaded in case of Concept {params[1]} for feature {params[0]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Docs Page loaded in case of Feature {params[0]}</h1>;
  }
  return <h1>Docs Page loaded</h1>;
};

export default DocsPage;

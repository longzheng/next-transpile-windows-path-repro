import getConfig from "next/config";

export const getServerSideProps = async () => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  return { props: {} };
};

export default function Page() {
  return <>hello world</>;
}

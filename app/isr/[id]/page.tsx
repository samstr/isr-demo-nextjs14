export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export default async function ISRPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Post with id {id}</h1>
      <h2>using NextJS 14.2.17 (react: 18.3.1)</h2>
      <div>
        When constantly refreshing the page, this number should be cached for 10
        seconds and then revalidate in the following refresh:
      </div>
      <div>
        <strong>{Math.random()}</strong>
      </div>
      <div>in NextJS 14 this works as expected</div>
    </main>
  );
}

import Track from "../track/track";

export default async function FeatureBlock( {sectionTitle, items} ) {

  return (
    <main>
      <h1>{sectionTitle}</h1>
      <Track items={items} />
    </main>
  );
}
import Track from "../track/track";

export default async function FeatureBlock( {sectionTitle, items, type} ) {
  return (
    <div>
      <h1>{sectionTitle}</h1>
      <Track items={items} />
    </div>
  );
}
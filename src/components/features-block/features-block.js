import Track from "../track/track";

export default function FeatureBlock( {sectionTitle, items} ) {
  return (
    <div>
      <h1>{sectionTitle}</h1>
      <Track items={items} />
    </div>
  );
}
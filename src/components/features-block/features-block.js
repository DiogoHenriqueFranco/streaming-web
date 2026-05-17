import './feature-block.css'
import Track from "../track/track";

export default function FeatureBlock( {sectionTitle, items} ) {
  return (
    <div className="feature-block">
      <h1>{sectionTitle}</h1>
      <Track items={items} />
    </div>
  );
}
import './CoreConcepts.css';

export default function CoreConcepts({image, title, description}) {
  return (
    // no longer using the 'img' prop, using 'image' instead
    <li>
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p> {description} </p>
    </li>
  );
}
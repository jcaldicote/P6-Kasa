import './DevDump.scss';
/**
 * JSX Component to display in formatted JSON in a PRE for dev
 */

export default function DevDump({ name, data }) {
  return (
    <details className="dev-dump">
      <summary>{name}</summary>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </details>
  );
}

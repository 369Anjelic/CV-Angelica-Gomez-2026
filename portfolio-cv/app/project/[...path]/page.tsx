export default function ProjectPage({ params }: { params: { path: string[] } }) {
  const projectPath = params.path.join('/');
  const fullPath = `/${projectPath}`;

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src={fullPath}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  );
}

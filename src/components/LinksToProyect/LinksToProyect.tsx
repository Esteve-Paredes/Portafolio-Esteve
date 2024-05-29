type PropsLinksToProyect = {
  name: string;
  url: string;
  label: string;
};

function LinksToProyect({ name, url, label }: PropsLinksToProyect) {
  return (
    <div>
      <h2 className="font-poppins text-lg font-bold">{name}</h2>
      <a
        className="font-semibold text-blue-800 hover:text-blue-500"
        href={url}
        target="_blank"
      >
        {label}
      </a>
    </div>
  );
}

export default LinksToProyect;

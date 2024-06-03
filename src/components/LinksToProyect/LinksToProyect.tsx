type PropsLinksToProyect = {
  name: string;
  url: string;
  label: string;
};

function LinksToProyect({ name, url, label }: PropsLinksToProyect) {
  return (
    <div>
      <h2 className="font-poppins text-base font-bold sm:text-lg">{name}</h2>
      <a
        className="text-sm font-semibold text-blue-800 hover:text-blue-500 sm:text-base"
        href={url}
        target="_blank"
      >
        {label}
      </a>
    </div>
  );
}

export default LinksToProyect;

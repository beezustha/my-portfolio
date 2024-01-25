const Spotify = () => {
  return (
    <div className="w-[1/2]">
      <iframe
        className="w-[1/2] p-2"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/5nk27uSTrxWQ0bkR9FCRsn?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;

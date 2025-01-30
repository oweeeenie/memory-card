function Memorycard() {
  const array = [
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "1",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "2",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "3",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "4",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "5",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "6",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "7",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "8",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "9",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "10",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "11",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "12",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "13",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "14",
    },
    {
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
      id: "15",
    },
  ];

  return (
    <>
      <div className='flex justify-center'>
        <div className='memory-card-wrapper gap-8 grid grid-cols-5 grid-rows-3'>
          {array.map((array) => (
            <div
              className='memory-card rounded-xl p-1 cursor-pointer text-center bg-[var(--main-text)] w-[280px] h-[350px]'
              key={array.id}
            >
              <img className='h-auto rounded-xl bg-black' src={array.image} />
              <p className='py-2 text-2xl italic'>{array.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Memorycard;

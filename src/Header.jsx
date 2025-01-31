function Header({ score, bestScore }) {
  return (
    <>
      <div className='header-container flex justify-between p-4 text-[var(--main-text)]'>
        <div className='left-header'>
          <h1 className='game-name text-3xl'>Pokemon Memory Game</h1>
          <p className='game-rules text-xl py-4'>
            Get points by clicking an image but don&apos;t click on any image
            more than once!
          </p>
        </div>
        <div className='right-header'>
          <p className='best-score'>Best Score: {bestScore}</p>
          <p className='score'>Score: {score}</p>
        </div>
      </div>
    </>
  );
}

export default Header;

export default function Navbar({ firstName }) {
  return (
    <>
      {firstName ? (
        <>
          <button>Sign Out</button>
        </>
      ) : (
        <>
          <button>Sign In</button>
        </>
      )}
    </>
  );
}

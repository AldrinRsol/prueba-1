import Image from "next/image";

const name = "ldrin";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form>
        <label htmlFor="nombre">nombre</label>
        <input
          type="text"
          id="nombre"
          className="text-black"
          name="nombre"
          placeholder="nombre"
        />
      </form>
      <h1>{name}</h1>
      <h2>mi segundo heading</h2>
      <h3>mi tercer heading</h3>
      <h4>mi cuarto heading</h4>
      <h5>mi quinto heading</h5>
      <h6>chachito feliz</h6>
      <p>chanchito eliz está muy feliz</p>
      <p>chanchito triste está muy trsite</p>
    </div>
  );
}

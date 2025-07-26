export default function Footer() {
  return (
    <footer className="py-3 text-center text-white bg-gray-950 fixed bottom-0 w-full">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500  bg-clip-text text-transparent font-semibold">
          Shereen Shawky
        </span>. All rights reserved.
      </p>
    </footer>
  );
}

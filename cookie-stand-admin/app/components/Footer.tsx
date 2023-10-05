export default function Footer() {
    return (
      <footer className="bg-green-500 py-4 text-left  ">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} </p>
      </footer>
    );
  }
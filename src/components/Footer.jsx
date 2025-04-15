export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-6 py-2 text-center">
        {/* Copyright */}
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Jason Sullano
        </p>
      </div>
    </footer>
  );
}

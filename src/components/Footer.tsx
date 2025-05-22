import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full text-center py-4 mt-12 bg-gray-900 text-gray-400 text-sm">
    © {new Date().getFullYear()} Papa THIAM. Tous droits réservés.
  </footer>
);

export default Footer;
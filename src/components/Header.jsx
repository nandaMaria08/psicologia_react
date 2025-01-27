import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Lógica do logout
    console.log("Usuário saiu");
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white py-4 px-6 flex justify-between items-center">
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-yellow-300">Sobre nós</Link>
        <Link to="/atendentes" className="hover:text-yellow-300">Atendentes</Link>
        <Link to="/" className="hover:text-yellow-300">Sobre mim</Link>
      </nav>
      <div className="relative">
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded"
          onClick={toggleDropdown}
        >
          Nome
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

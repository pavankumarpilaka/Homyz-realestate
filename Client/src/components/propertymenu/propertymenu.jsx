import React, { useState } from 'react';
import { Avatar, Menu, MantineProvider } from "@mantine/core";
import "./propertymenu.css";
import { useNavigate } from 'react-router-dom';

const Propertymenu = ({ user, logout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
 const navigate=useNavigate()
  return (
    <div className="custom-dropdown"> {/* Add custom-dropdown class here */}
      <Menu>
        <Menu.Target>
          <div className='avatar-menu'>
            
            <div>hello {user.name}</div>
          </div>

        </Menu.Target>
        <Menu.Dropdown opened={menuOpen.toString()} onClose={() => setMenuOpen(false)} className="menu-dropdown"> {/* Add class name to the Dropdown component */}
          <Menu.Item className="menu-item" onClick={()=>navigate("./favourites",{replace:true})}>Favorites</Menu.Item> {/* Add class name to each menu item */}
          <Menu.Item className="menu-item" onClick={()=>navigate("./booking",{replace:true})}>Bookings</Menu.Item>
          <Menu.Item
            onClick={() => {
              localStorage.clear();
              logout();
            }}
            className="menu-item logout" // Add class name to the logout menu item
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Propertymenu;

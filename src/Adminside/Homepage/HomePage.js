// <!DOCTYPE html>
//   <!-- Coding by CodingLab | www.codinglabweb.com -->
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
//     <!----======== CSS ======== -->
//     <link rel="stylesheet" href="style.css">
    
//     <!----===== Boxicons CSS ===== -->
//     <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    
//     <!--<title>Dashboard Sidebar Menu</title>--> 
// </head>

import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
      <div>
         <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="logo.png" alt=""/>
                </span>

                <div class="text logo-text">
                    <span class="name">Codinglab</span>
                    <span class="profession">Web developer</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..." />
                </li>

                <ul class="menu-links">
                    <li class="nav-link">
                        <Link to="#">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                        </Link>
                    </li>

                    <li class="nav-link">
                        <Link to="#">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Revenue</span>
                        </Link>
                    </li>

                    <li class="nav-link">
                        <Link to="#">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notifications</span>
                        </Link>
                    </li>

                    <li class="nav-link">
                        <Link to="#">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">Analytics</span>
                        </Link>
                    </li>

                    <li class="nav-link">
                        <Link to="#">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">Likes</span>
                        </Link>
                    </li>

                    <li class="nav-link">
                        <Link to="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Wallets</span>
                        </Link>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <Link to="#">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </Link>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <section class="home">
        <div class="text">Dashboard Sidebar</div>
    </section> 
    </div>
  )
}

export default HomePage

    
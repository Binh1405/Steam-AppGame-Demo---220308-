import React from 'react'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <span id="logo_holder">
                    <a href="/">
                        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" height="44" width="auto"/>
                    </a>
                </span>
            </div>
            <div className='supernav-container'>
                <a className='menuitem supernav' href="https://store.steampowered.com/">STORE</a>
                <a className='menuitem supernav' href="https://store.steampowered.com/">COMMUNITY</a>
                <a className='menuitem supernav' href="https://store.steampowered.com/">ABOUT</a>
                <a className='menuitem supernav' href="https://store.steampowered.com/">SUPPORT</a>
            </div>
            <div id="global_actions">
                <div id="global_action_menu">
                    <div className='header_installstream_btn header_installstream_btn_green'>
                        <a className='header_installstream_btn_content' href="https://store.steampowered.com/about/">Install Steam</a>
                    </div>
                    <a className='global_action_link' href="https://store.steampowered.com/login/?redir=remoteplay_together%3Fsnr%3D1_4_4__118&redir_ssl=1&snr=1_5_9__global-header">login</a>
                    &nbsp;|&nbsp;
                    <span className='pulldown global_action_link' id="language_pulldown">language</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
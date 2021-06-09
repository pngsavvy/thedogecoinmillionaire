import React, {useState, useEffect} from "react"
import "./Navbar.css"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function Navbar() {
    return (
        <div class = "nav">
            <ul id="list">
                <li id="li"><a target="_blank" href="https://www.thedogecoinmillionaire.com/">Merch</a></li>
                <li id="li"><a target="_blank" href="https://www.instagram.com/prothedoge/?hl=en">Instagram</a></li>
                <li id="li"><a target="_blank" href="https://twitter.com/ProTheDoge">Twitter</a></li>
                <li id="li"><a target="_blank" href="https://www.snapchat.com/add/prothedoge">Snapchat</a></li>
                <li id="li"><a target="_blank" href="https://www.tiktok.com/@thedogecoinmillionaire?lang=en&is_copy_url=1&is_from_webapp=v1">TikTok</a></li>
                <li id="li"><a target="_blank" href="https://www.facebook.com/thedogecoinmillionaire">Facebook</a></li>
            </ul>
        </div>
    )
}

export default Navbar;



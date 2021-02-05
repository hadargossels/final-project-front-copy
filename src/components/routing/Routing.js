import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "../layout/home/Home";
import Body from '../layout/product/Body'
import Catalog from "../layout/home/Catalog";
import AboutUs from "../layout/AboutUs"
import ContactUs from "../layout/ContactUs"
import Blog from "../layout/Blog"
import LogIn from "../layout/LogIn"
import Register from "../layout/Register"

import img1 from '../../imgs/Samsung_S20-2.jpg';
import img2 from '../../imgs/Samsung_S21-1.png';
import img3 from '../../imgs/Samsung_Z-1.jpg';
import img4 from '../../imgs/Iphone_12proMax-1.jpg';
import img5 from '../../imgs/Iphone_12-1.jpg';
import img6 from '../../imgs/Iphone_SE-1.jpg';
import img7 from '../../imgs/Nokia_1.4-1.jpg';
import img8 from '../../imgs/Huawei_Mate40Pro-1.jpg';
import img9 from '../../imgs/Google_Pixel5-1.jpg';

import Aimg1 from '../../imgs/Samsung_charger-1.jpg';
import Aimg2 from '../../imgs/Lenovo-PowerBank-1.jpg';
import Aimg3 from '../../imgs/Samsung_Headphone-1.jpg';
import Aimg4 from '../../imgs/Rose_iPhoneCharger-1.jpg';
import Aimg5 from '../../imgs/Iphone_charger-1.png';
import Aimg6 from '../../imgs/Iphone_Headphone-1.jpg';
import Aimg7 from '../../imgs/Iphone_12proCase-1.jpeg';
import Aimg8 from '../../imgs/Samsung_S20ultraCase-1.jpg';
import Aimg9 from '../../imgs/SelfieStick-1.jpg';



export default class Routing extends Component {
    render() {
        const _mobilesData = [{ img: img1, title: 'Samsung Galaxy S20 Ultra 5G', type: 'android', stars: 4, desc: 'Meet Galaxy S20 Ultra 5G. With revolutionary 8K Video Snap, 5G connectivity and Space Zoom up to 100x, the way you capture and share your life will never be the same.', price: 950 },
        { img: img2, title: 'Samsung Galaxy S21 Ultra 5G', type: 'android', stars: 5, desc: 'The highest resolution photos and video on a smartphone. Galaxy`s fastest processor yet. A battery that goes all-day—and then some. First ever S Pen compatibility. A striking new design.', price: 1199 },
        { img: img3, title: 'Samsung Galaxy Z Fold 2 5G', type: 'android', stars: 5, desc: 'A mind-bending glass screen that folds like a book. A hands-free camera that shoots when you wave. A precision crafted hinge that transforms a cutting-edge smartphone into something much more.', price: 2899 },
        { img: img4, title: 'Apple iPhone 12 Pro Max', type: 'iphone', stars: 5, desc: 'A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance.', price: 1099 },
        { img: img5, title: 'Apple iPhone 12', type: 'iphone', stars: 4, desc: 'A14 Bionic, the fastest chip in a smartphone.An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all in a perfect size.', price: 829 },
        { img: img6, title: 'Apple iPhone SE(2020)', type: 'iphone', stars: 3, desc: 'iPhone SE packs a powerful A13 Bionic chip into the most popular size at the most affordable price. It’s just what you’ve been waiting for.', price: 399 },
        { img: img7, title: 'Nokia 1.4', type: 'android', stars: 2, desc: 'Make the most of learning and playtime on the beautiful 6.51” HD+ edge-to-edge screen – there’s plenty of room for both. Plus, have fun and stay safe with the whole family thanks to built-in parental controls.', price: 100 },
        { img: img8, title: 'Huawei Mate 40 Pro', type: 'android', stars: 4, desc: 'See beyond the horizon, explore the unknown, and leap boldly into the future, with unprecedented power, speed and imagination. Embrace the intelligence and live an intimate life with innovative technology on the HUAWEI Mate 40 Pro.', price: 1218 },
        { img: img9, title: 'Google Pixel 5', type: 'android', stars: 3, desc: 'The Google Pixel 5 is a charming and reasonably-priced premium phone with an amazing camera and good battery life.', price: 699 },];

        const _accessoriesData = [{ img: Aimg1, title: 'Samsung fast charger USB type C', type: 'android', stars: 4, desc: 'This Samsung Fast Charge AC Charger can be used to charge your USB Type-C devices. It comes with an AC plug which you can easily connect to any available wall socket and a USB Type-A to Type-C cable for connecting your devices.', price: 27 },
        { img: Aimg2, title: 'Power Bank 14000mAh Lenovo', type: 'android', stars: 5, desc: 'Lenovo USB-C Laptop Power Bank 14000mAh with Round-Tip Dongle, Slim-Tip Dongle and USB-C Cable', price: 120 },
        { img: Aimg3, title: 'Original Samsung Headphone with Remote and Microphone', type: 'android', stars: 3, desc: 'The Samsung EO-EG920BW Portable Hands-free headset makes it easy to make private voice and video calls.', price: 3.65 },
        { img: Aimg4, title: 'Rose gold iPhone charger kit', type: 'iphone', stars: 4, desc: 'The car charger sits flush to your dash when plugged in, while the compact home charger fits even in crowded outlets. Both chargers have a USB port that accommodates the included lightning-to-USB cable.', price: 36.35 },
        { img: Aimg5, title: 'Apple iPhone Charger (Lightning Cable & 5W EU Adapter Bundle)', type: 'iphone', stars: 5, desc: 'An Apple Lightning Cable together with a 5w Power Adapter to create this handy Lighting Charger Combo.', price: 38 },
        { img: Aimg6, title: 'Original Headphone for iPhone', type: 'iphone', stars: 3, desc: 'Lightning iPhone Headphones Earphones Earbuds with Volume Buttons & Microphone for iPhone 7 8 Plus X 11 12 Pro Max', price:  28.59},
        { img: Aimg7, title: 'Silicone Case with MagSafe for iPhone 12 Pro Max', type: 'iphone', stars: 4, desc: 'This silicone case with MagSafe is specially designed by Apple to protect your iPhone 12 Pro Max.', price:  55},
        { img: Aimg8, title: 'Samsung Galaxy S20 Ultra Silicone Cover Case', type: 'android', stars: 4, desc: 'Protect your Samsung Galaxy S20 Ultra with this Official silicone case in navy. Simple yet stylish, this case is the perfect accessory for your Galaxy S20 Ultra.', price: 22.99 },
        { img: Aimg9, title: 'K07 Bluetooth Selfie Stick Shutter', type: 'android', stars: 4, desc: 'K07 Bluetooth Selfie Stick Wireless Shutter Bluetooth 4.0 Mobile Phone Self-Timer Artifact For SamSung HuaWei Xiaomi Nokia', price: 7.89 },];

        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mobiles">
                    <Catalog _data={_mobilesData} title="Mobile Phones" />
                </Route>
                <Route exact path="/accessories">
                    <Catalog _data={_accessoriesData} title="Accessories" />
                </Route>    
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/blog" component={Blog} />
                <Route path="/login" component={LogIn} />
                {/* //! Products pages */}
                {_mobilesData.map((mobile, index) => (
                    <Route path={"/product/"+mobile.title.replace(/\s/g, '')} key={index}>
                        <Body mobileData={mobile} />
                    </Route>
                ))}
                {_accessoriesData.map((accesory, index) => (
                    <Route path={"/product/"+accesory.title.replace(/\s/g, '')} key={index}>
                        <Body accesoryData={accesory} />
                    </Route>
                ))}

                <Route path="" component={Register}/>
            </Switch>
        )
    }
}
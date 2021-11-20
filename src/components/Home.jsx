import React from 'react';
import styled from 'styled-components';
import ProductComp from './ProductComp';
function Home() {
    return (
        <Product>
            <ProductComp
                id= '1'
                title ='Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard'
                price = {612}
                img="https://m.media-amazon.com/images/I/81cpLDD+SPL._AC_UY218_.jpg"
                star = {5}
            />
            <ProductComp
                id= '2'
                title ='Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 
                15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard'
                price = {812}
                img="https://images-na.ssl-images-amazon.com/images/I/71m03KItMZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                star = {3}
            />
            <ProductComp
                id= '3'
                title ='Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU 
                | 15.6" Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard'
                price = {492}
                img="https://m.media-amazon.com/images/I/71Nly9vPapL._AC_UY218_.jpg"
                star = {5}
            />
            <ProductComp
                id= '4'
                title ='Lenovo Legion 5 15 Gaming Laptop, 15.6" FHD (1920 x 1080) Display, AMD Ryzen 7 5800H Processor, 
                16GB DDR4 RAM, 512GB NVMe SSD, NVIDIA GeForce RTX 3050Ti, Windows 10H, 82JW0012US, Phantom Blue'
                price = {580}
                img="https://m.media-amazon.com/images/I/71fzx0pGY5L._AC_UY218_.jpg"
                star = {2}
            />
            <ProductComp
                id= '5'
                title ='ASUS ROG Strix G15 (2021) Gaming Laptop, 15.6” 300Hz IPS Type FHD Display, 
                NVIDIA GeForce RTX 3060, AMD Ryzen 9 5900HX, 16GB DDR4, 512GB PCIe NVMe SSD, RGB Keyboard, Windows 10, G513QM-EB94'
                price = {280}
                img="https://m.media-amazon.com/images/I/71n0k0TSRwS._AC_UY218_.jpg"
                star = {5}
            />
            <ProductComp
                id= '6'
                title ='ASUS ROG Strix G15 (2021) Gaming Laptop, 15.6” 300Hz IPS Type FHD Display,Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core 
                i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6" Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6, DTS X Ultra,Backlit Keyboard,AN515-55-59KS'
                price = {880}
                img="https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_UY218_.jpg"
                star = {4}
            />
        </Product>
    )
}

export default Home

const Product= styled.div`
    margin: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(250px, 1fr));
    gap: 1rem;
`
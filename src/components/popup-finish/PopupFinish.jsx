import React from 'react'
import '../../assets/styles/popup-finish.css'
import BtnSend from '../buttons/BtnSend'
import { useState } from 'react'

const PopupFinish = () => {

    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);

    return (
        <div className='bg-popup-finish'>
            <div className='popup-finish'>
                <h1 className='title-popup-finish'>Valora la entrega</h1>
                <div className='stars'>



                    {star1 ? <svg onClick={() => setStar1(false)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#FABF35" stroke="#FABF35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.9968 21.3886C18.6212 21.3886 19.1274 20.8823 19.1274 20.2578C19.1274 19.6332 18.6212 19.127 17.9968 19.127C17.3724 19.127 16.8662 19.6332 16.8662 20.2578C16.8662 20.8823 17.3724 21.3886 17.9968 21.3886Z" fill="#BB8300" />
                        <path d="M25.9123 21.3886C26.5368 21.3886 27.043 20.8823 27.043 20.2578C27.043 19.6332 26.5368 19.127 25.9123 19.127C25.2879 19.127 24.7817 19.6332 24.7817 20.2578C24.7817 20.8823 25.2879 21.3886 25.9123 21.3886Z" fill="#BB8300" />
                        <path d="M17.4959 30.215C17.1655 30.2062 16.9717 29.8886 16.9717 29.0331C16.9717 26.192 21.1387 26.1036 21.9485 26.1133C22.7242 26.1025 26.9388 26.1764 26.9388 29.0329C26.9388 29.8621 26.7567 30.186 26.4446 30.2131" fill="#BB8300" />
                    </svg> : <svg onClick={() => setStar1(true)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#E8E8E8" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.9968 21.3886C18.6212 21.3886 19.1274 20.8823 19.1274 20.2578C19.1274 19.6332 18.6212 19.127 17.9968 19.127C17.3724 19.127 16.8662 19.6332 16.8662 20.2578C16.8662 20.8823 17.3724 21.3886 17.9968 21.3886Z" fill="#C6C6C6" />
                        <path d="M25.9123 21.3886C26.5368 21.3886 27.043 20.8823 27.043 20.2578C27.043 19.6332 26.5368 19.127 25.9123 19.127C25.2879 19.127 24.7817 19.6332 24.7817 20.2578C24.7817 20.8823 25.2879 21.3886 25.9123 21.3886Z" fill="#C6C6C6" />
                        <path d="M17.4959 30.215C17.1655 30.2062 16.9717 29.8886 16.9717 29.0331C16.9717 26.192 21.1387 26.1036 21.9485 26.1133C22.7242 26.1025 26.9388 26.1764 26.9388 29.0329C26.9388 29.8621 26.7567 30.186 26.4446 30.2131" fill="#C6C6C6" />
                    </svg>}



                    {star2 ? <svg onClick={() => setStar2(false)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#FABF35" stroke="#FABF35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.671 21.6174C18.3586 21.6174 18.9161 21.0599 18.9161 20.3722C18.9161 19.6844 18.3586 19.127 17.671 19.127C16.9833 19.127 16.4258 19.6844 16.4258 20.3722C16.4258 21.0599 16.9833 21.6174 17.671 21.6174Z" fill="#BB8300" />
                        <path d="M26.3878 21.6174C27.0754 21.6174 27.6329 21.0599 27.6329 20.3722C27.6329 19.6844 27.0754 19.127 26.3878 19.127C25.7001 19.127 25.1426 19.6844 25.1426 20.3722C25.1426 21.0599 25.7001 21.6174 26.3878 21.6174Z" fill="#BB8300" />
                        <path d="M17.0233 29.3106C17.0286 29.2875 17.03 29.2787 17.0321 29.2671L17.0381 29.2351L17.049 29.1769C17.0564 29.1391 17.0645 29.1041 17.0722 29.0684C17.0886 28.9989 17.1083 28.931 17.1283 28.864C17.1696 28.7323 17.2184 28.6031 17.2743 28.4769C17.3868 28.2253 17.5251 27.9861 17.6869 27.763C18.017 27.313 18.4293 26.9296 18.9019 26.6328C19.1363 26.4864 19.382 26.359 19.6367 26.2517C19.8872 26.1477 20.1452 26.0625 20.4083 25.9968C20.9173 25.8705 21.4397 25.8064 21.9641 25.8058C22.4816 25.8001 22.998 25.8541 23.5032 25.9666L23.6965 26.013C23.7607 26.0283 23.8249 26.0494 23.8891 26.0675C24.0173 26.1027 24.1441 26.1493 24.2711 26.1947C24.5264 26.2902 24.7738 26.4058 25.0107 26.5405C25.2508 26.6767 25.4787 26.8335 25.6917 27.009C25.905 27.1862 26.1009 27.3832 26.2768 27.5975C26.4521 27.8115 26.6042 28.0436 26.7304 28.2898C26.7941 28.4137 26.8502 28.5414 26.8984 28.6721C26.9216 28.7384 26.9448 28.8058 26.9652 28.8758C26.9751 28.9117 26.9849 28.9453 26.9944 28.9845L27.0081 29.0432L27.0155 29.0756C27.0185 29.0881 27.0199 29.0958 27.0268 29.1203C27.0603 29.2078 27.0759 29.3011 27.0726 29.3947C27.0693 29.4883 27.0473 29.5803 27.0079 29.6653C26.9684 29.7502 26.9123 29.8264 26.8429 29.8892C26.7735 29.9521 26.6922 30.0004 26.6037 30.0313C26.5153 30.0622 26.4216 30.075 26.3281 30.069C26.2347 30.063 26.1434 30.0383 26.0596 29.9963C25.9759 29.9544 25.9014 29.8961 25.8406 29.8248C25.7798 29.7536 25.7339 29.6709 25.7056 29.5816C25.7077 29.5932 25.7042 29.5881 25.7022 29.5879C25.7001 29.5876 25.6971 29.5844 25.694 29.5821C25.691 29.5798 25.6825 29.5716 25.6755 29.5647L25.6354 29.5239C25.6069 29.4949 25.5784 29.465 25.548 29.4356C25.4891 29.376 25.4247 29.3178 25.361 29.2613C25.2333 29.1493 25.098 29.0463 24.9563 28.9528C24.8171 28.8604 24.6721 28.7773 24.5221 28.7038C24.3721 28.6315 24.2182 28.5676 24.0611 28.5121L23.9424 28.4716L23.821 28.4356C23.7816 28.4222 23.7396 28.4125 23.6983 28.4018C23.6571 28.3911 23.6172 28.3786 23.5748 28.3705C23.4907 28.3527 23.4081 28.332 23.3217 28.3181C23.2788 28.3105 23.2371 28.3012 23.1935 28.2949L23.063 28.2757C22.7027 28.2261 22.3392 28.2029 21.9755 28.2062C21.2363 28.2096 20.5497 28.31 19.9422 28.5539C19.6357 28.6771 19.3465 28.8395 19.0818 29.0371C18.9453 29.14 18.8157 29.2517 18.6938 29.3714C18.6333 29.4323 18.5721 29.4947 18.5153 29.5587L18.4726 29.6064L18.4319 29.6528L18.3931 29.6973C18.3864 29.7047 18.3806 29.7105 18.3751 29.7163C18.3728 29.719 18.3701 29.7213 18.3672 29.7232C18.3649 29.7232 18.3616 29.7288 18.363 29.7188C18.3089 29.8965 18.1865 30.0453 18.0227 30.1327C17.8589 30.2201 17.667 30.2388 17.4894 30.1847C17.3118 30.1307 17.1629 30.0082 17.0755 29.8444C16.9881 29.6806 16.9694 29.4887 17.0235 29.3111L17.0233 29.3106Z" fill="#BB8300" />
                    </svg> :
                        <svg onClick={() => setStar2(true)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#E8E8E8" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.671 21.6174C18.3586 21.6174 18.9161 21.0599 18.9161 20.3722C18.9161 19.6844 18.3586 19.127 17.671 19.127C16.9833 19.127 16.4258 19.6844 16.4258 20.3722C16.4258 21.0599 16.9833 21.6174 17.671 21.6174Z" fill="#C6C6C6" />
                            <path d="M26.3878 21.6174C27.0754 21.6174 27.6329 21.0599 27.6329 20.3722C27.6329 19.6844 27.0754 19.127 26.3878 19.127C25.7001 19.127 25.1426 19.6844 25.1426 20.3722C25.1426 21.0599 25.7001 21.6174 26.3878 21.6174Z" fill="#C6C6C6" />
                            <path d="M17.0233 29.3106C17.0286 29.2875 17.03 29.2787 17.0321 29.2671L17.0381 29.2351L17.049 29.1769C17.0564 29.1391 17.0645 29.1041 17.0722 29.0684C17.0886 28.9989 17.1083 28.931 17.1283 28.864C17.1696 28.7323 17.2184 28.6031 17.2743 28.4769C17.3868 28.2253 17.5251 27.9861 17.6869 27.763C18.017 27.313 18.4293 26.9296 18.9019 26.6328C19.1363 26.4864 19.382 26.359 19.6367 26.2517C19.8872 26.1477 20.1452 26.0625 20.4083 25.9968C20.9173 25.8705 21.4397 25.8064 21.9641 25.8058C22.4816 25.8001 22.998 25.8541 23.5032 25.9666L23.6965 26.013C23.7607 26.0283 23.8249 26.0494 23.8891 26.0675C24.0173 26.1027 24.1441 26.1493 24.2711 26.1947C24.5264 26.2902 24.7738 26.4058 25.0107 26.5405C25.2508 26.6767 25.4787 26.8335 25.6917 27.009C25.905 27.1862 26.1009 27.3832 26.2768 27.5975C26.4521 27.8115 26.6042 28.0436 26.7304 28.2898C26.7941 28.4137 26.8502 28.5414 26.8984 28.6721C26.9216 28.7384 26.9448 28.8058 26.9652 28.8758C26.9751 28.9117 26.9849 28.9453 26.9944 28.9845L27.0081 29.0432L27.0155 29.0756C27.0185 29.0881 27.0199 29.0958 27.0268 29.1203C27.0603 29.2078 27.0759 29.3011 27.0726 29.3947C27.0693 29.4883 27.0473 29.5803 27.0079 29.6653C26.9684 29.7502 26.9123 29.8264 26.8429 29.8892C26.7735 29.9521 26.6922 30.0004 26.6037 30.0313C26.5153 30.0622 26.4216 30.075 26.3281 30.069C26.2347 30.063 26.1434 30.0383 26.0596 29.9963C25.9759 29.9544 25.9014 29.8961 25.8406 29.8248C25.7798 29.7536 25.7339 29.6709 25.7056 29.5816C25.7077 29.5932 25.7042 29.5881 25.7022 29.5879C25.7001 29.5876 25.6971 29.5844 25.694 29.5821C25.691 29.5798 25.6825 29.5716 25.6755 29.5647L25.6354 29.5239C25.6069 29.4949 25.5784 29.465 25.548 29.4356C25.4891 29.376 25.4247 29.3178 25.361 29.2613C25.2333 29.1493 25.098 29.0463 24.9563 28.9528C24.8171 28.8604 24.6721 28.7773 24.5221 28.7038C24.3721 28.6315 24.2182 28.5676 24.0611 28.5121L23.9424 28.4716L23.821 28.4356C23.7816 28.4222 23.7396 28.4125 23.6983 28.4018C23.6571 28.3911 23.6172 28.3786 23.5748 28.3705C23.4907 28.3527 23.4081 28.332 23.3217 28.3181C23.2788 28.3105 23.2371 28.3012 23.1935 28.2949L23.063 28.2757C22.7027 28.2261 22.3392 28.2029 21.9755 28.2062C21.2363 28.2096 20.5497 28.31 19.9422 28.5539C19.6357 28.6771 19.3465 28.8395 19.0818 29.0371C18.9453 29.14 18.8157 29.2517 18.6938 29.3714C18.6333 29.4323 18.5721 29.4947 18.5153 29.5587L18.4726 29.6064L18.4319 29.6528L18.3931 29.6973C18.3864 29.7047 18.3806 29.7105 18.3751 29.7163C18.3728 29.719 18.3701 29.7213 18.3672 29.7232C18.3649 29.7232 18.3616 29.7288 18.363 29.7188C18.3089 29.8965 18.1865 30.0453 18.0227 30.1327C17.8589 30.2201 17.667 30.2388 17.4894 30.1847C17.3118 30.1307 17.1629 30.0082 17.0755 29.8444C16.9881 29.6806 16.9694 29.4887 17.0235 29.3111L17.0233 29.3106Z" fill="#C6C6C6" />
                        </svg>}



                    {star3 ? <svg onClick={() => setStar3(false)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#FABF35" stroke="#FABF35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.232 21.6174C17.9197 21.6174 18.4772 21.0599 18.4772 20.3722C18.4772 19.6844 17.9197 19.127 17.232 19.127C16.5443 19.127 15.9868 19.6844 15.9868 20.3722C15.9868 21.0599 16.5443 21.6174 17.232 21.6174Z" fill="#BB8300" />
                        <path d="M26.6964 21.6174C27.3841 21.6174 27.9416 21.0599 27.9416 20.3722C27.9416 19.6844 27.3841 19.127 26.6964 19.127C26.0087 19.127 25.4512 19.6844 25.4512 20.3722C25.4512 21.0599 26.0087 21.6174 26.6964 21.6174Z" fill="#BB8300" />
                        <path d="M16.7456 28.4176C16.9666 28.3607 17.1873 28.3169 17.4082 28.2746C17.6292 28.2324 17.8499 28.1979 18.0708 28.1647C18.5125 28.0992 18.9542 28.0504 19.3958 28.0086C20.2794 27.9284 21.1627 27.8911 22.0463 27.8848C22.9299 27.8785 23.8132 27.9067 24.6965 27.9767C24.9175 27.994 25.1382 28.0139 25.3592 28.0383C25.5801 28.0628 25.8008 28.0887 26.0218 28.1181C26.2428 28.1476 26.4635 28.182 26.6844 28.2215C26.9054 28.2611 27.1261 28.3033 27.347 28.3585C27.5011 28.397 27.6379 28.4859 27.7357 28.6111C27.8334 28.7363 27.8865 28.8906 27.8865 29.0494C27.8865 29.2082 27.8334 29.3625 27.7357 29.4877C27.6379 29.6129 27.5011 29.7018 27.347 29.7403C27.1261 29.7954 26.9051 29.8385 26.6844 29.8772C26.4637 29.916 26.2428 29.9494 26.0218 29.9807C25.8008 30.0119 25.5801 30.0375 25.3592 30.0604C25.1382 30.0833 24.9175 30.1047 24.6965 30.1223C23.8132 30.192 22.9296 30.2195 22.0463 30.2139C21.163 30.2084 20.2794 30.1707 19.3958 30.0904C18.9542 30.0486 18.5125 29.9995 18.0708 29.9343C17.8499 29.9009 17.6289 29.8659 17.4082 29.8241C17.1875 29.7823 16.9666 29.7383 16.7456 29.6812C16.6056 29.645 16.4815 29.5633 16.393 29.4489C16.3044 29.3346 16.2563 29.194 16.2563 29.0494C16.2563 28.9047 16.3044 28.7642 16.393 28.6498C16.4815 28.5355 16.6056 28.4538 16.7456 28.4176Z" fill="#BB8300" />
                    </svg>
                        :
                        <svg onClick={() => setStar3(true)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#E8E8E8" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.232 21.6174C17.9197 21.6174 18.4772 21.0599 18.4772 20.3722C18.4772 19.6844 17.9197 19.127 17.232 19.127C16.5443 19.127 15.9868 19.6844 15.9868 20.3722C15.9868 21.0599 16.5443 21.6174 17.232 21.6174Z" fill="#C6C6C6" />
                            <path d="M26.6964 21.6174C27.3841 21.6174 27.9416 21.0599 27.9416 20.3722C27.9416 19.6844 27.3841 19.127 26.6964 19.127C26.0087 19.127 25.4512 19.6844 25.4512 20.3722C25.4512 21.0599 26.0087 21.6174 26.6964 21.6174Z" fill="#C6C6C6" />
                            <path d="M16.7456 28.4176C16.9666 28.3607 17.1873 28.3169 17.4082 28.2746C17.6292 28.2324 17.8499 28.1979 18.0708 28.1647C18.5125 28.0992 18.9542 28.0504 19.3958 28.0086C20.2794 27.9284 21.1627 27.8911 22.0463 27.8848C22.9299 27.8785 23.8132 27.9067 24.6965 27.9767C24.9175 27.994 25.1382 28.0139 25.3592 28.0383C25.5801 28.0628 25.8008 28.0887 26.0218 28.1181C26.2428 28.1476 26.4635 28.182 26.6844 28.2215C26.9054 28.2611 27.1261 28.3033 27.347 28.3585C27.5011 28.397 27.6379 28.4859 27.7357 28.6111C27.8334 28.7363 27.8865 28.8906 27.8865 29.0494C27.8865 29.2082 27.8334 29.3625 27.7357 29.4877C27.6379 29.6129 27.5011 29.7018 27.347 29.7403C27.1261 29.7954 26.9051 29.8385 26.6844 29.8772C26.4637 29.916 26.2428 29.9494 26.0218 29.9807C25.8008 30.0119 25.5801 30.0375 25.3592 30.0604C25.1382 30.0833 24.9175 30.1047 24.6965 30.1223C23.8132 30.192 22.9296 30.2195 22.0463 30.2139C21.163 30.2084 20.2794 30.1707 19.3958 30.0904C18.9542 30.0486 18.5125 29.9995 18.0708 29.9343C17.8499 29.9009 17.6289 29.8659 17.4082 29.8241C17.1875 29.7823 16.9666 29.7383 16.7456 29.6812C16.6056 29.645 16.4815 29.5633 16.393 29.4489C16.3044 29.3346 16.2563 29.194 16.2563 29.0494C16.2563 28.9047 16.3044 28.7642 16.393 28.6498C16.4815 28.5355 16.6056 28.4538 16.7456 28.4176Z" fill="#C6C6C6" />
                        </svg>}



                    {star4 ? <svg onClick={() => setStar4(false)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7184 27.726 13.7194C28.0135 14.3048 28.5101 14.8305 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3256L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2392 33.3578 39.6526C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C24.1971 35.7497 24.197 35.7496 24.1969 35.7496C23.558 35.371 22.7618 35.2049 22.0067 35.2049C21.2509 35.2049 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0778 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3256C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26991 19.4801 7.26971 19.4802 7.26952C20.306 5.62697 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#FABF35" stroke="#FABF35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.8194 21.6174C18.5071 21.6174 19.0646 21.0599 19.0646 20.3722C19.0646 19.6844 18.5071 19.127 17.8194 19.127C17.1317 19.127 16.5742 19.6844 16.5742 20.3722C16.5742 21.0599 17.1317 21.6174 17.8194 21.6174Z" fill="#BB8300" />
                        <path d="M26.2745 21.6174C26.9622 21.6174 27.5197 21.0599 27.5197 20.3722C27.5197 19.6844 26.9622 19.127 26.2745 19.127C25.5868 19.127 25.0293 19.6844 25.0293 20.3722C25.0293 21.0599 25.5868 21.6174 26.2745 21.6174Z" fill="#BB8300" />
                        <path d="M26.8643 26.8556C26.8589 26.8781 26.8576 26.8866 26.8554 26.8981L26.8495 26.9293L26.8387 26.9857C26.8311 27.0224 26.823 27.0561 26.8149 27.0907C26.7987 27.1582 26.7791 27.2238 26.7596 27.2888C26.7185 27.4161 26.6702 27.5409 26.615 27.6627C26.5044 27.9055 26.3687 28.136 26.2103 28.3507C25.8871 28.7822 25.4856 29.1491 25.0268 29.4323C24.7995 29.5712 24.5617 29.6923 24.3157 29.7943C24.0736 29.893 23.8247 29.9738 23.5708 30.036C23.0799 30.1554 22.5766 30.2158 22.0714 30.2159C21.5726 30.2211 21.0748 30.1698 20.5875 30.063L20.4011 30.0194C20.3391 30.0052 20.277 29.9848 20.2154 29.9677C20.1538 29.9506 20.0918 29.9335 20.0304 29.911L19.8465 29.8467C19.5999 29.7558 19.3607 29.6458 19.1313 29.5176C18.8987 29.3878 18.6778 29.2384 18.4708 29.0708C18.2636 28.901 18.0727 28.7122 17.9006 28.5069C17.8577 28.4557 17.8174 28.4017 17.7765 28.3496C17.7356 28.2974 17.6973 28.2416 17.6603 28.1861C17.5859 28.0748 17.5177 27.9595 17.4559 27.8408C17.3931 27.7213 17.3379 27.5981 17.2904 27.4718C17.2679 27.4078 17.2443 27.3426 17.2243 27.2749C17.2144 27.2398 17.2047 27.2074 17.1953 27.1694L17.1816 27.1125L17.1742 27.0811C17.1712 27.0687 17.1699 27.0615 17.1629 27.0372C17.1028 26.8675 17.1127 26.6808 17.1902 26.5183C17.2678 26.3558 17.4067 26.2307 17.5765 26.1706C17.7463 26.1105 17.9329 26.1204 18.0955 26.1979C18.258 26.2755 18.383 26.4144 18.4431 26.5842C18.4409 26.5725 18.4445 26.5775 18.4463 26.5777C18.4481 26.5779 18.4512 26.5808 18.4539 26.5831C18.4566 26.5853 18.4654 26.5927 18.4721 26.5993L18.5108 26.6379C18.5384 26.6654 18.5661 26.6939 18.5955 26.7218C18.6529 26.7787 18.7151 26.8342 18.7772 26.8877C18.9013 26.994 19.0325 27.0917 19.17 27.18C19.3054 27.2675 19.4461 27.3464 19.5913 27.4163C19.7372 27.4848 19.8867 27.5454 20.0392 27.5977C20.1941 27.6508 20.3517 27.6959 20.5113 27.7326C20.5929 27.7499 20.6732 27.7691 20.7571 27.7823C20.7986 27.7895 20.8389 27.7985 20.8814 27.8048L21.008 27.8232C21.3572 27.8701 21.7092 27.8921 22.0615 27.8891C22.4078 27.8898 22.7536 27.8634 23.0957 27.81C23.2582 27.7845 23.4193 27.7509 23.5785 27.7092C23.7347 27.6677 23.886 27.6171 24.0351 27.5613C24.332 27.4448 24.6128 27.2908 24.8705 27.1029C25.0028 27.0052 25.1286 26.8991 25.2471 26.7852C25.306 26.727 25.3654 26.6676 25.4207 26.6067L25.4621 26.5617L25.5016 26.5167L25.539 26.4745C25.5457 26.4673 25.5511 26.4619 25.5565 26.4565C25.5586 26.4539 25.5612 26.4517 25.5641 26.45C25.5664 26.45 25.5695 26.4448 25.568 26.4549C25.5943 26.3697 25.6371 26.2905 25.694 26.2219C25.7509 26.1532 25.8208 26.0964 25.8997 26.0548C25.9785 26.0131 26.0648 25.9874 26.1536 25.9791C26.2424 25.9708 26.3319 25.9801 26.4172 26.0064C26.5024 26.0327 26.5816 26.0755 26.6502 26.1324C26.7189 26.1894 26.7756 26.2592 26.8173 26.3381C26.8589 26.4169 26.8847 26.5032 26.893 26.592C26.9013 26.6808 26.892 26.7704 26.8657 26.8556H26.8643Z" fill="#BB8300" />
                    </svg>
                        :
                        <svg onClick={() => setStar4(true)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7184 27.726 13.7194C28.0135 14.3048 28.5101 14.8305 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3256L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2392 33.3578 39.6526C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C24.1971 35.7497 24.197 35.7496 24.1969 35.7496C23.558 35.371 22.7618 35.2049 22.0067 35.2049C21.2509 35.2049 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0778 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3256C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26991 19.4801 7.26971 19.4802 7.26952C20.306 5.62697 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#E8E8E8" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.8194 21.6174C18.5071 21.6174 19.0646 21.0599 19.0646 20.3722C19.0646 19.6844 18.5071 19.127 17.8194 19.127C17.1317 19.127 16.5742 19.6844 16.5742 20.3722C16.5742 21.0599 17.1317 21.6174 17.8194 21.6174Z" fill="#C6C6C6" />
                            <path d="M26.2745 21.6174C26.9622 21.6174 27.5197 21.0599 27.5197 20.3722C27.5197 19.6844 26.9622 19.127 26.2745 19.127C25.5868 19.127 25.0293 19.6844 25.0293 20.3722C25.0293 21.0599 25.5868 21.6174 26.2745 21.6174Z" fill="#C6C6C6" />
                            <path d="M26.8643 26.8556C26.8589 26.8781 26.8576 26.8866 26.8554 26.8981L26.8495 26.9293L26.8387 26.9857C26.8311 27.0224 26.823 27.0561 26.8149 27.0907C26.7987 27.1582 26.7791 27.2238 26.7596 27.2888C26.7185 27.4161 26.6702 27.5409 26.615 27.6627C26.5044 27.9055 26.3687 28.136 26.2103 28.3507C25.8871 28.7822 25.4856 29.1491 25.0268 29.4323C24.7995 29.5712 24.5617 29.6923 24.3157 29.7943C24.0736 29.893 23.8247 29.9738 23.5708 30.036C23.0799 30.1554 22.5766 30.2158 22.0714 30.2159C21.5726 30.2211 21.0748 30.1698 20.5875 30.063L20.4011 30.0194C20.3391 30.0052 20.277 29.9848 20.2154 29.9677C20.1538 29.9506 20.0918 29.9335 20.0304 29.911L19.8465 29.8467C19.5999 29.7558 19.3607 29.6458 19.1313 29.5176C18.8987 29.3878 18.6778 29.2384 18.4708 29.0708C18.2636 28.901 18.0727 28.7122 17.9006 28.5069C17.8577 28.4557 17.8174 28.4017 17.7765 28.3496C17.7356 28.2974 17.6973 28.2416 17.6603 28.1861C17.5859 28.0748 17.5177 27.9595 17.4559 27.8408C17.3931 27.7213 17.3379 27.5981 17.2904 27.4718C17.2679 27.4078 17.2443 27.3426 17.2243 27.2749C17.2144 27.2398 17.2047 27.2074 17.1953 27.1694L17.1816 27.1125L17.1742 27.0811C17.1712 27.0687 17.1699 27.0615 17.1629 27.0372C17.1028 26.8675 17.1127 26.6808 17.1902 26.5183C17.2678 26.3558 17.4067 26.2307 17.5765 26.1706C17.7463 26.1105 17.9329 26.1204 18.0955 26.1979C18.258 26.2755 18.383 26.4144 18.4431 26.5842C18.4409 26.5725 18.4445 26.5775 18.4463 26.5777C18.4481 26.5779 18.4512 26.5808 18.4539 26.5831C18.4566 26.5853 18.4654 26.5927 18.4721 26.5993L18.5108 26.6379C18.5384 26.6654 18.5661 26.6939 18.5955 26.7218C18.6529 26.7787 18.7151 26.8342 18.7772 26.8877C18.9013 26.994 19.0325 27.0917 19.17 27.18C19.3054 27.2675 19.4461 27.3464 19.5913 27.4163C19.7372 27.4848 19.8867 27.5454 20.0392 27.5977C20.1941 27.6508 20.3517 27.6959 20.5113 27.7326C20.5929 27.7499 20.6732 27.7691 20.7571 27.7823C20.7986 27.7895 20.8389 27.7985 20.8814 27.8048L21.008 27.8232C21.3572 27.8701 21.7092 27.8921 22.0615 27.8891C22.4078 27.8898 22.7536 27.8634 23.0957 27.81C23.2582 27.7845 23.4193 27.7509 23.5785 27.7092C23.7347 27.6677 23.886 27.6171 24.0351 27.5613C24.332 27.4448 24.6128 27.2908 24.8705 27.1029C25.0028 27.0052 25.1286 26.8991 25.2471 26.7852C25.306 26.727 25.3654 26.6676 25.4207 26.6067L25.4621 26.5617L25.5016 26.5167L25.539 26.4745C25.5457 26.4673 25.5511 26.4619 25.5565 26.4565C25.5586 26.4539 25.5612 26.4517 25.5641 26.45C25.5664 26.45 25.5695 26.4448 25.568 26.4549C25.5943 26.3697 25.6371 26.2905 25.694 26.2219C25.7509 26.1532 25.8208 26.0964 25.8997 26.0548C25.9785 26.0131 26.0648 25.9874 26.1536 25.9791C26.2424 25.9708 26.3319 25.9801 26.4172 26.0064C26.5024 26.0327 26.5816 26.0755 26.6502 26.1324C26.7189 26.1894 26.7756 26.2592 26.8173 26.3381C26.8589 26.4169 26.8847 26.5032 26.893 26.592C26.9013 26.6808 26.892 26.7704 26.8657 26.8556H26.8643Z" fill="#C6C6C6" />
                        </svg>}



                    {star5 ? <svg onClick={() => setStar5(false)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#FABF35" stroke="#FABF35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.1114 21.6174C18.7991 21.6174 19.3566 21.0599 19.3566 20.3722C19.3566 19.6844 18.7991 19.127 18.1114 19.127C17.4237 19.127 16.8662 19.6844 16.8662 20.3722C16.8662 21.0599 17.4237 21.6174 18.1114 21.6174Z" fill="#BB8300" />
                        <path d="M26.0265 21.6174C26.7142 21.6174 27.2716 21.0599 27.2716 20.3722C27.2716 19.6844 26.7142 19.127 26.0265 19.127C25.3388 19.127 24.7812 19.6844 24.7812 20.3722C24.7812 21.0599 25.3388 21.6174 26.0265 21.6174Z" fill="#BB8300" />
                        <path d="M17.4959 26.1115C17.1655 26.1204 16.9717 26.4379 16.9717 27.2934C16.9717 30.1346 21.1387 30.2229 21.9485 30.2133C22.7242 30.224 26.9388 30.1501 26.9388 27.2936C26.9388 26.4644 26.7567 26.1406 26.4446 26.1134" fill="#BB8300" />
                    </svg>
                        :
                        <svg onClick={() => setStar5(true)} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 7.26729L24.5007 7.2687L27.7246 13.7165C27.7251 13.7175 27.7256 13.7186 27.7261 13.7196C28.0136 14.3049 28.5102 14.8306 29.0483 15.2276C29.5878 15.6257 30.2369 15.9445 30.8782 16.0514L30.8786 16.0515L36.7265 17.0231C38.4672 17.3132 39.2845 18.0433 39.5114 18.7495C39.7379 19.4539 39.5 20.5193 38.2463 21.7645L38.2445 21.7663L33.6978 26.313C33.2004 26.8103 32.8494 27.4977 32.6523 28.186C32.4552 28.8747 32.3899 29.6424 32.543 30.3257L32.543 30.3257L32.5441 30.3306L33.8457 35.9584C34.3444 38.1226 33.9249 39.2393 33.3578 39.6527C32.7894 40.067 31.5933 40.1256 29.6779 38.9942L24.1972 35.7497C23.5582 35.3711 22.7619 35.205 22.0067 35.205C21.2509 35.205 20.4528 35.3713 19.8077 35.7467L19.8077 35.7467L19.8028 35.7496L14.3211 38.9946L14.3204 38.995C12.4179 40.1241 11.2208 40.0632 10.649 39.646C10.0777 39.2291 9.6561 38.1101 10.1539 35.959L10.1539 35.9589L11.4555 30.3306L11.4556 30.3306L11.4567 30.3257C11.6098 29.6424 11.5445 28.8747 11.3473 28.186C11.1503 27.4977 10.7992 26.8103 10.3018 26.313L5.75516 21.7663C4.50983 20.521 4.27002 19.4543 4.49554 18.7481C4.72083 18.0426 5.53324 17.3131 7.27313 17.0231L13.1211 16.0515L13.1237 16.051C13.7567 15.9436 14.4009 15.6239 14.9367 15.2266C15.4716 14.83 15.9679 14.3046 16.2553 13.7195L19.48 7.2701C19.4801 7.26989 19.4802 7.26968 19.4803 7.26947C20.306 5.62696 21.261 5.05704 21.9975 5.05704C22.7328 5.05704 23.6833 5.62544 24.5 7.26729Z" fill="#E8E8E8" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.1114 21.6174C18.7991 21.6174 19.3566 21.0599 19.3566 20.3722C19.3566 19.6844 18.7991 19.127 18.1114 19.127C17.4237 19.127 16.8662 19.6844 16.8662 20.3722C16.8662 21.0599 17.4237 21.6174 18.1114 21.6174Z" fill="#C6C6C6" />
                            <path d="M26.0265 21.6174C26.7142 21.6174 27.2716 21.0599 27.2716 20.3722C27.2716 19.6844 26.7142 19.127 26.0265 19.127C25.3388 19.127 24.7812 19.6844 24.7812 20.3722C24.7812 21.0599 25.3388 21.6174 26.0265 21.6174Z" fill="#C6C6C6" />
                            <path d="M17.4959 26.1115C17.1655 26.1204 16.9717 26.4379 16.9717 27.2934C16.9717 30.1346 21.1387 30.2229 21.9485 30.2133C22.7242 30.224 26.9388 30.1501 26.9388 27.2936C26.9388 26.4644 26.7567 26.1406 26.4446 26.1134" fill="#C6C6C6" />
                        </svg>}
                </div>
                <div>
                    <textarea className='text-area' placeholder='Déjanos tu comentario'></textarea>
                </div>
                <BtnSend />
            </div>
        </div>
    )
}

export default PopupFinish
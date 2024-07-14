import React from "react";
import Styles from "./Home.module.css";
import imgIcon from "../../Imges/social1.svg";

export default function Home() {
  return (
    <>
      {/* ----------------------  section Home  ---------------------- */}
      <section className={`${Styles.bgImg}`} id="Home">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-7 col-12 ">
            <div
              className={`${Styles.welcomeHome} bgColor  d-flex justify-content-center align-items-center`}
            >
              <div className={`${Styles.captionHome} w-50 mx-auto text-white`}>
                <h1 className={`${Styles.captionText} p-2`}>Tasty pastries</h1>
                <h5>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </h5>
                <div className="btn-Recipes d-flex justify-content-center w-100">
                  <button className="btn btn-warning rounded-5 text-white mt-3 ">
                    SEE MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-12">
            <div className="imgBread d-flex align-items-center justify-content-center  h-100">
              <img
                className={`${Styles.imgBread} w-100 `}
                src="https://s3-alpha-sig.figma.com/img/5cb1/3ccb/193a314d247081af73c5061e38d7c33f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KeeE5Ko61jaAto3VUrvAq-fHmZ1XnefmnfKwuXZNJnIvILEZYthXGjszLX0W41J39r0f~0XjJSJLXH6jG4w~rOodNP-T5pqruyM~gJdxi2FJwStRFuoA0TmxNsM504BpXt5gOniQsJZh6BTnsvEQKMwtyHOe~SowKJGed~dzSd22SLsqb5g1kz7scMzzkDTIVpzkJBRSuPBbjygSiZFd2Qoe79raZktBoVW5KmGBlM0FlExp9p1rGWYKrCoebf4XiIWpb9DdwZeeyUE5JAE862Jc4zxq3ZQvcUPWemF-8sRk~Z1xVhhq8C4-2O6rnQNTBakygiKnEi1zfYyEQxfBUA__"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-8 col-md-7 col-12 ">
            <div className="item d-flex ">
              <div className="bg-transparent w-50 d-flex justify-content-end">
                <div className="socail mainColor">
                  <img src={imgIcon} alt="" />
                  <p>
                    <i className="fa-brands fa-facebook"></i>
                  </p>
                  <p>
                    <i className="fa-brands fa-instagram"></i>
                  </p>
                  <p>
                    <i className="fa-brands fa-twitter"></i>
                  </p>
                </div>
              </div>
              <div className="bgColor w-50 text-white d-flex align-items-end">
                <p className="p-2">
                  Telephone:
                  <span className={`${Styles.homeTel}`}>+7 700 000 00 00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- section How we work  ---------------------- */}
      <section className={`${Styles.bgImg} `} id="work">
        <div className={`row position-relative vh-100`}>
          <div className="col-lg-5 col-md-5 col-12">
            <div className={`${Styles.changeHWork} h-50`}>
              <div
                className={`${Styles.contantWork} d-flex justify-content-end align-items-center h-100 mainColor`}
              >
                <p className={`w-50`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-12">
            <div className={` bgColor text-white text-center h-100`}>
              <h2 className="p-1">How we </h2>
              <h2 className="px-1">work</h2>
              <div
                className={` row d-flex justify-content-center align-items-center d-md-none p-3`}
              >
                <div className="col-6 mt-5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2a45/eab0/51cd4212eec579fc8770c6cd0fd8d975?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CCpPSk3dpE-gLwBT-wmwpQYms-oF3Tgo-hRCa-RchwPYIAkRnEjhxXJ3XywOQzzayMuDjlUbGXAloLWB6M5sCLIf7tXt8s3axxzUQJkAYRKsnFypMmTPaOZX6nPoCz2ZFyOFrdQZNdblk5YQQ058pBeMptgc0Y6MWTqlD8BkrFu3HMFj5G3bJNjNxpdijuABsDT5m19tdlBJ4989S4CoYpKolt01DPjZL16DrmZLX9hUjh8BdJKFdww-Yzvuq16Z~2Su~u5z6l6wQB~ehP2ES9ume2gGyOUy2T-cd2QEyGmfYTBO3eQh2wGOjrejiPj4jLoQJjNeObbnpPV7Gz3Dfw__"
                    className="img-fluid rounded-3"
                    alt=""
                  />
                </div>
                <div className="col-6 mt-5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/52f9/ed29/7a8b4f38c597291c7093c26cc05578c2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hrxgpVOQUIhmEHU8fsgU8YsWM~3Uo6f47zB49jxb-rRg30aCwJYPhHH4KTyMfHjdYxeti4Ezv34sa4SZ7K2040ohm2ISQI~ZAs5Q5xQnvP3v6h73zxze-JMTMh~ubqvq1jOEVOxqtIYHCwYz3BlBx3qbpym8j7NIAKYXKEFmFog8WCo0UVXrjUJJGImKFm8Rh0NW3gD7iDgqKbSW7oaugNjefAr7WQZi9MXFEe6D3uAMJKUCd152v-YJa9hTtui0xhJhyr96~a8SESQTmReTM44rQJRw1Pgsas2Jgn1uzb6O8JKTKmYMyLA622Ijgudt-DTmjtnzH5xAcJXv30yhmg__"
                    className="img-fluid rounded-3"
                    alt=""
                  />
                </div>
                <div className="col-6 mt-5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0bc6/3387/8bbcd8c4d757e7ec96748b4863ecadc5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xfdz8VHJzQupwhPKGqifXDVrA7l1UOZiBLhqqGXB-5NsgTTmQIUchlFwovf1q9Z3i-R54BgCKdFIEKpYFhLn9yiWmYg0FJ0kcVKLzfXcIj8rEgl2jDFtQx7Sw3UuHK-PpJqhddoIsBaHTlJxBdCooZK9IV5bp0xoclWfYH3zCZqp86qG8MH9GaEALyF9BJAzCqCmhG0tYG4NESG11FyHtJpzwhkLTltYwEGnKcdiiXh3qOMsTjAyy~DAwaeVrFLhwDBy8g4XMid8phGXyF5foTNL-cVAY4-VABj-9EFLCaY-BY5EVuUeIggPzWwGygUWjE3poPW1JdxjSGiG8wgcsA__"
                    className="img-fluid rounded-3"
                    alt=""
                  />
                </div>
                <div className="col-6 mt-5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/318d/939a/6e0ba6d49ba5b8333514ccb99ae3b563?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g54exDBzACRYsai1NNhX~rcMadRmFwDKK3MiwIa4yO87nwXUTSKkjftc5swJ24koDbwQIa3YRSLO~Ow0veLyrhpgBD~V0c0e6Aanhe10vLFXD3~IvfddjyHf7Y9dpx95PTEADH9rCBvv5txqECx~CS-wmYA7MPgMHw-OID6zsk8PBK~TdmtASJEp-19X2Sa2CRF4PmfTykZ9QLjZgfHW2tT5FmmzsskQdnfr9x3iZ1OMEa7QF9nLHJBMD4SCSd8~iOT04rMqL-TzsemXnTRw5B1BY~i3dkDks3LeHE33aSE93CliVNVu91fetGvA9yjQIMKmCL8snGVw9y1m9wNXEg__"
                    className="img-fluid rounded-3"
                    alt=""
                  />
                </div>
                <div className="btn-contect d-flex justify-content-center align-items-center">
                  <button className="btn bg-warning rounded-5 mt-5 text-white">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`container d-none d-md-flex d-xl-flex d-xxl-flex w-100 justify-content-center align-items-center position-absolute top-50 start-50 translate-middle`}
          >
            <div
              className={`row mt-8 d-flex justify-content-center align-items-center`}
            >
              <div className="col-lg-2 col-md-3 col-6 mt-5">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2a45/eab0/51cd4212eec579fc8770c6cd0fd8d975?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CCpPSk3dpE-gLwBT-wmwpQYms-oF3Tgo-hRCa-RchwPYIAkRnEjhxXJ3XywOQzzayMuDjlUbGXAloLWB6M5sCLIf7tXt8s3axxzUQJkAYRKsnFypMmTPaOZX6nPoCz2ZFyOFrdQZNdblk5YQQ058pBeMptgc0Y6MWTqlD8BkrFu3HMFj5G3bJNjNxpdijuABsDT5m19tdlBJ4989S4CoYpKolt01DPjZL16DrmZLX9hUjh8BdJKFdww-Yzvuq16Z~2Su~u5z6l6wQB~ehP2ES9ume2gGyOUy2T-cd2QEyGmfYTBO3eQh2wGOjrejiPj4jLoQJjNeObbnpPV7Gz3Dfw__"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5">
                <img
                  src="https://s3-alpha-sig.figma.com/img/52f9/ed29/7a8b4f38c597291c7093c26cc05578c2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hrxgpVOQUIhmEHU8fsgU8YsWM~3Uo6f47zB49jxb-rRg30aCwJYPhHH4KTyMfHjdYxeti4Ezv34sa4SZ7K2040ohm2ISQI~ZAs5Q5xQnvP3v6h73zxze-JMTMh~ubqvq1jOEVOxqtIYHCwYz3BlBx3qbpym8j7NIAKYXKEFmFog8WCo0UVXrjUJJGImKFm8Rh0NW3gD7iDgqKbSW7oaugNjefAr7WQZi9MXFEe6D3uAMJKUCd152v-YJa9hTtui0xhJhyr96~a8SESQTmReTM44rQJRw1Pgsas2Jgn1uzb6O8JKTKmYMyLA622Ijgudt-DTmjtnzH5xAcJXv30yhmg__"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0bc6/3387/8bbcd8c4d757e7ec96748b4863ecadc5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xfdz8VHJzQupwhPKGqifXDVrA7l1UOZiBLhqqGXB-5NsgTTmQIUchlFwovf1q9Z3i-R54BgCKdFIEKpYFhLn9yiWmYg0FJ0kcVKLzfXcIj8rEgl2jDFtQx7Sw3UuHK-PpJqhddoIsBaHTlJxBdCooZK9IV5bp0xoclWfYH3zCZqp86qG8MH9GaEALyF9BJAzCqCmhG0tYG4NESG11FyHtJpzwhkLTltYwEGnKcdiiXh3qOMsTjAyy~DAwaeVrFLhwDBy8g4XMid8phGXyF5foTNL-cVAY4-VABj-9EFLCaY-BY5EVuUeIggPzWwGygUWjE3poPW1JdxjSGiG8wgcsA__"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5">
                <img
                  src="https://s3-alpha-sig.figma.com/img/318d/939a/6e0ba6d49ba5b8333514ccb99ae3b563?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g54exDBzACRYsai1NNhX~rcMadRmFwDKK3MiwIa4yO87nwXUTSKkjftc5swJ24koDbwQIa3YRSLO~Ow0veLyrhpgBD~V0c0e6Aanhe10vLFXD3~IvfddjyHf7Y9dpx95PTEADH9rCBvv5txqECx~CS-wmYA7MPgMHw-OID6zsk8PBK~TdmtASJEp-19X2Sa2CRF4PmfTykZ9QLjZgfHW2tT5FmmzsskQdnfr9x3iZ1OMEa7QF9nLHJBMD4SCSd8~iOT04rMqL-TzsemXnTRw5B1BY~i3dkDks3LeHE33aSE93CliVNVu91fetGvA9yjQIMKmCL8snGVw9y1m9wNXEg__"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              <div className="btn-contect d-flex justify-content-center align-items-center">
                <button className="btn bg-warning rounded-5 mt-5 text-white">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

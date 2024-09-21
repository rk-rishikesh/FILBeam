"use client";
import { useEffect, useState, useRef } from "react";
import {
  DynamicWidget,
  useDynamicContext,
} from "../lib/dynamic";
import { CONTRACTABI, CONTRACTADDRESS_LINEA } from "./contractDetails";
// import { useWriteContract } from 'wagmi'
import { ethers } from 'ethers';

export default function SectionUploadFile() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export function Hero() {
  const { sdkHasLoaded } = useDynamicContext();
  const [category, setCategory] = useState("Rabbit");

  const [step, setStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (isCameraOpen) {
      openCamera();
    } else {
      closeCamera();
    }
    return () => {
      closeCamera();
    };
  }, [isCameraOpen]);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream as MediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        setPhoto(canvasRef.current.toDataURL('image/png'));
        closeCamera()
        setStep(1)
      }
    }
  };

  const handleHeaderOptionChange = () => {
    setIsCameraOpen(false);
  };

  const selectRabbit = () => {
    setCategory("Rabbit");
  }

  const selectDog = () => {
    setCategory("Dog");
  }

  const selectCat = () => {
    setCategory("Cat");
  }

  const back = () => {
    setStep(0);
  }

  const uploadFile = async () => {
    setStep(1);
    uploadToFilecoin()
  }
  const capture = () => {
    openCamera()
    setStep(3);
  }

  const finish = () => {
    setStep(2);
  }

  useEffect(() => {
    if (!sdkHasLoaded) return;
  }, [sdkHasLoaded]);


  const uploadToFilecoin = async () => {
    // if (window.ethereum) {
    //   await window.ethereum.request({ method: 'eth_requestAccounts' });
    // }

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(CONTRACTADDRESS_LINEA, CONTRACTABI, signer);

    // const tx = await contract.offerData(0, ["0x62616761366561347365617170693735756d6573616435766c797a7966363676627a6e746f617665346265626d6b6371753466366e7136726368687833636b71", 8388608, "https://data-depot.lighthouse.storage/api/download/download_car?fileId=5633792f-20b2-46f4-bcaa-7747889c3c62.car", 100, "0xb4f9b6b019e75cbe51af4425b2fc12797e2ee2a1"], "filecoin-2"
    //   , "0x3df116c1ed8038646480bac8a6e835b0e7c51261");
    // await tx.wait();

    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACTADDRESS_LINEA, CONTRACTABI, signer);

      const tx = await contract.offerData(["0x62616761366561347365617170693735756d6573616435766c797a7966363676627a6e746f617665346265626d6b6371753466366e7136726368687833636b71", 8388608, "https://data-depot.lighthouse.storage/api/download/download_car?fileId=5633792f-20b2-46f4-bcaa-7747889c3c62.car", 100, "0xb4f9b6b019e75cbe51af4425b2fc12797e2ee2a1"], "filecoin-2"
        , "0x3df116c1ed8038646480bac8a6e835b0e7c51261");
      await tx.wait(); // Wait for the transaction to be mined
      }

    }

    return (
      <div className="min-h-screen bg-black flex flex-col text-white justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full p-3">

                  {/* Cover Section */}

                  {step == 0 && <>
                    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 ">
                      <div className="px-6 py-8 sm:p-10 sm:pb-6">
                        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
                          <div>
                            <h2 className="text-black font-bold text-lg lg:text-3xl justify-center flex items-center"> Upload to Earn</h2>
                            <p className="text-black tracking-tight xl:text-2xl mt-5 justify-center flex items-center">
                              Select Pet Category
                            </p>
                          </div>

                        </div>
                      </div>
                      <div className="flex flex-col flex-1 justify-between w-full">
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2" href="#">
                            <div className="py-3 flex gap-1 rounded-md justify-between">

                              <div className="group relative px-4 cursor-pointer">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                                  <img onClick={selectDog} src="https://cdn-icons-png.flaticon.com/512/91/91544.png" />
                                </div>

                              </div>
                              <div className="group relative px-4 cursor-pointer">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                                  <img onClick={selectRabbit} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNK92pvMzmmiSMCpYlHOaGGhuOgZvpP-rdWw&s" />
                                </div>

                              </div>
                              <div className="group relative px-4 cursor-pointer">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                                  <img onClick={selectCat} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RN0albjGGE6-xDPF0z0DV0rtnOeK22KBGd8kCpjgknPNHEckmqrNUn3aBYmegAdfmUE&usqp=CAU" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mt-4 relative h-48 rounded-lg  bg-yellow-200 flex justify-center items-center transition-shadow duration-300 ease-in-out">
                          <div className="flex flex-col items-center">
                            <img
                              alt="File Icon"
                              className="mb-3 w-20"
                              src="/upload.png"
                            />
                            <span className="block text-gray-500 font-semibold">
                              Upload {category}
                            </span>
                          </div>

                          <input
                            name=""
                            className="h-full w-full opacity-0 cursor-pointer"
                            type="file"
                            onChange={uploadFile}
                          />
                        </div>
                        <div className="mt-4 relative rounded-lg  bg-yellow-200 flex justify-center items-center transition-shadow duration-300 ease-in-out">
                          <div className="flex flex-col items-center">
                            <img
                              alt="File Icon"
                              className="mb-3 w-20"
                              onClick={capture}
                              src="https://cdn-icons-png.flaticon.com/512/5904/5904483.png"
                            />
                            <span className="block text-gray-500 font-semibold">
                              Capture {category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div></>}
                  {step == 1 && <>
                    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 ">
                      <div className="px-6 py-8 sm:p-10 sm:pb-6">
                        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
                          <div>
                            <h2 className="text-black font-bold text-lg lg:text-3xl justify-center flex items-center">Storing your labelled Data on Filecoin</h2>
                          </div>

                        </div>
                      </div>
                      <img onClick={finish} className="rounded-lg" src="https://media2.giphy.com/media/3oKIPtaS9TtrmIzXRm/200w.gif?cid=6c09b952241q6i69e0rwek48avhmkw45kft87q8v3q4dkjo6&ep=v1_gifs_search&rid=200w.gif&ct=g" />
                    </div>
                  </>}
                  {step == 3 && <>
                    {/* <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 "> */}
                    <div className="px-6 py-8 sm:p-10 sm:pb-6">
                      <div className="flex flex-col h-96 bg-[#E0E0E2] relative">
                        <div className="flex-grow relative">
                          <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                          {photo && (
                            <div className="absolute bottom-4 left-4 w-24 h-auto rounded-md border border-gray-300 shadow-lg z-10">
                              <img src={photo} alt="Captured" className="w-full h-full object-cover rounded-md" />
                            </div>
                          )}
                          <canvas ref={canvasRef} className="hidden" width={640} height={480}></canvas>
                          <div className="flex flex-row justify-between ">
                            <div className="absolute bottom-4 left-[20%] transform -translate-x-1/2 flex items-center justify-center">
                              <div
                                className="w-20 h-20 bg-white rounded-full shadow-lg -mt-12 border border-8 border-[#E0E0E2]"
                                onClick={back}
                              >
                                <img className="rounded-full" src="https://dictionary.cambridge.org/images/thumb/cross_noun_002_09265.jpg?version=6.0.31" />
                              </div>
                            </div>
                            <div className="absolute bottom-4 -right-[5%] transform -translate-x-1/2 flex items-center justify-center">
                              <div
                                className="w-20 h-20 bg-white rounded-full shadow-lg -mt-12 border border-8 border-[#E0E0E2]"
                                onClick={capturePhoto}
                              ></div>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </>}
                  {step == 2 && <>
                    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 ">
                      <div className="px-6 py-8 sm:p-10 sm:pb-6">
                        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
                          <div>
                            <h2 className="text-black font-bold text-lg lg:text-3xl justify-center flex items-center">Your data is now securely stored on Filecoin</h2>
                          </div>

                        </div>
                      </div>
                      <img className="rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Green_tick.png" />
                    </div>
                  </>}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Header() {

    return (
      <div className="flex justify-end items-end mt-4">
        <div>
          <DynamicWidget />
        </div>
      </div>
    )
  }

"use client";
import { useEffect, useState } from "react";
import {
    DynamicWidget,
    useTelegramLogin,
    useDynamicContext,
} from "../lib/dynamic";

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

    useEffect(() => {
        if (!sdkHasLoaded) return;
    }, [sdkHasLoaded]);

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center justify-center">
              <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                  <div className="w-full p-3">
                    <div className="relative h-48 rounded-lg border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <div className="absolute flex flex-col items-center">
                        <img
                          alt="File Icon"
                          className="mb-3"
                          src="https://img.icons8.com/dusk/64/000000/file.png"
                        />
                        <span className="block text-gray-500 font-semibold">
                          Drag &amp; drop your files here
                        </span>
                        <span className="block text-gray-400 font-normal mt-1">
                          or click to upload
                        </span>
                      </div>

                      <input
                        name=""
                        className="h-full w-full opacity-0 cursor-pointer"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    );
}

function Header() {
    const { setShowAuthFlow } = useDynamicContext();

    function handleConnect() {
        setShowAuthFlow(true);
    }

    return (
        <div className="flex justify-end items-end mt-4">
            <button
                onClick={handleConnect}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Connect Wallet
            </button>
        </div>
    )
}

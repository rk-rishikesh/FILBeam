"use client";
import { useEffect, useState } from "react";
import {
  DynamicWidget,
  useTelegramLogin,
  useDynamicContext,
} from "../lib/dynamic";
import SectionUploadFile from "./hero";
import Spinner from "./Spinner";

export default function Main() {
  const { sdkHasLoaded, user, setShowAuthFlow } = useDynamicContext();
  const { telegramSignIn } = useTelegramLogin();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!sdkHasLoaded) {
      return;
    }

    const signIn = async () => {
      if (!user) {
        await telegramSignIn({ forceCreateUser: true });
      }
      setIsLoading(false);
    };

    signIn();
  }, [sdkHasLoaded, user, telegramSignIn]);

  console.log(user);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center">
        {user ? (
          <SectionUploadFile />
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center">
                <img src="/logo.png" alt="logo" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Connecting Chains</h1>
            <p className="text-lg mb-16">
              Decentralized Data Storage for{" "}
              <span className="text-blue-400">everychain</span>.
            </p>

            {isLoading ? <Spinner /> : <DynamicWidget />}
          </>
        )}
      </div>
    </div>
  );
}

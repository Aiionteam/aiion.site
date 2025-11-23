"use client";

import { useState } from 'react';
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <HomePage />;
}

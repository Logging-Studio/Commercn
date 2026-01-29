"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import BoxIcon from "@/components/dotLottie/Box-Icon";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

// Tech Stack Data
const techStack = [
  {
    name: "Vercel",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 76 65" fill="currentColor">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
        <path d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392" />
      </svg>
    ),
  },
  { name: "Stripe", icon: null },
  {
    name: "Radix UI",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 25 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12.5 2L22 7.5V17.5L12.5 23L3 17.5V7.5L12.5 2Z" />
        <path d="M12.5 12L22 7.5M12.5 12L3 7.5M12.5 12V23" />
      </svg>
    ),
  },
  {
    name: "shadcn/ui",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 256 256" fill="none">
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// Blocks Data
const blocks = [
  {
    name: "Checkouts",
    description: "Streamlined payment flows",
    href: "/docs/checkouts/checkout-01",
    image: "/assets/Checkouts-light.png",
    imageDark: "/assets/Checkouts.png",
  },
  {
    name: "Carts",
    description: "Cart interactions & logic",
    href: "/docs/carts/cart-item-01",
    image: "/assets/Carts-light.png",
    imageDark: "/assets/Carts.png",
  },
  {
    name: "Reviews",
    description: "Social proof elements",
    href: "/docs/reviews/review-01",
    image: "/assets/Reviews-light.png",
    imageDark: "/assets/Reviews.png",
  },
  {
    name: "Orders",
    description: "Tracking and history",
    href: "/docs/orders/order-01",
    image: "/assets/Orders-light.png",
    imageDark: "/assets/Orders.png",
  },
  {
    name: "Categories",
    description: "Browse navigation",
    href: "/docs/categories",
    image: "/assets/Categories-light.png",
    imageDark: "/assets/Categories.png",
  },
  {
    name: "Product Details",
    description: "Hero sections & specs",
    href: "/docs/product-details/product-details-01",
    image: "/assets/Product-Details-light.png",
    imageDark: "/assets/Product-Details.png",
  },
  {
    name: "Products",
    description: "Product display cards",
    href: "/docs/products/product-card-01",
    image: "/assets/Products-light.png",
    imageDark: "/assets/Products.png",
  },
  {
    name: "Promo Banners",
    description: "Marketing banners",
    href: "/docs/promo-banners/promo-banner-01",
    image: "/assets/Promo-Banners-light.png",
    imageDark: "/assets/Promo-Banners.png",
  },
];

export default function HomePage() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const dotLottieRefCallback = useCallback((dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  }, []);

  const handleButtonMouseEnter = () => {
    if (dotLottie) {
      dotLottie.setFrame(0);
      dotLottie.play();
    }
  };

  const handleButtonMouseLeave = () => {
    if (dotLottie) {
      dotLottie.pause();
      dotLottie.setFrame(0);
    }
  };

  return (
    <main className="w-full text-black dark:text-white overflow-hidden home-bg-pattern">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-12 mx-auto md:mx-8 lg:mx-32 border-x-0 md:border-x-2 max-w-full min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center items-center bg-white dark:bg-black">
        <div className="flex flex-col justify-center text-center py-8 md:py-12 relative z-10">
          <div className="inline-flex items-center justify-center mb-6 md:mb-8">
            <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              V1.0 NEW RELEASED
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 font-bold leading-tight tracking-tight bg-linear-to-t from-primary via-black dark:via-white to-black dark:to-white bg-clip-text text-transparent">
            Shadcn UI Blocks for <br />
            E-commerce Websites
          </h1>

          <p className="text-muted mb-8 md:mb-10 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            Ship you e-commerce website fast with pre-built UI Blocks.
            <br className="hidden md:block" /> Built with React, Tailwind CSS,
            and Shadcn UI.
          </p>

          <div className="flex gap-3 md:gap-4 mx-auto flex-wrap justify-center px-4 md:px-0">
            <Button
              asChild
              size="lg"
              className="group bg-black dark:bg-white text-white dark:text-black gap-2 rounded-full text-sm md:text-base font-bold px-4 md:px-6 transition-all duration-300 hover:scale-105"
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              <Link
                href="/docs/carts/cart-item-01"
                className="inline-flex items-center justify-center gap-2"
              >
                Browse Components
                <BoxIcon dotLottieRefCallback={dotLottieRefCallback} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group gap-2 rounded-full hover:text-black dark:hover:text-white text-sm md:text-base font-bold px-4! md:px-6! bg-black/5 dark:bg-white/5 backdrop-blur-lg hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link
                href="https://github.com/Logging-Studio/commercn"
                target="_blank"
              >
                <Star
                  size={18}
                  className="transition-all duration-300 group-hover:fill-yellow-400 group-hover:text-yellow-400"
                />
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <section className="py-8 md:py-12 border-y-2 bg-white dark:bg-black overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-8 md:gap-16 px-4 md:px-8 text-black/50 dark:text-white/50"
              >
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 md:gap-2.5 shrink-0"
                  >
                    {tech.icon}
                    <span className="text-sm md:text-lg font-bold">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 lg:px-12 max-w-full mx-auto md:mx-8 lg:mx-32 py-12 md:py-24 border-x-0 md:border-x-2 bg-white dark:bg-black">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Everything you need to ship.
          </h2>
          <p className="text-muted text-sm md:text-base">
            Detailed attention to developer experience, accessibility, and
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col md:col-span-2 gap-4">
            {/* Copy & Paste Card */}
            <div className="group feature-card flex-1 rounded-2xl p-6 relative overflow-hidden border-2 border-[rgba(196,161,255,0.20)] dark:border-[rgba(196,161,255,0.10)] bg-card/30 backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(196,161,255,0.50)] dark:hover:border-[rgba(196,161,255,0.30)] hover:shadow-[0_8px_32px_rgba(196,161,255,0.25)] dark:hover:shadow-[0_8px_32px_rgba(196,161,255,0.15)] hover:-translate-y-1">
              <div className="size-10 bg-card rounded-lg border dark flex items-center justify-center mb-4 relative z-10">
                <svg
                  className="size-5 text-black dark:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <h3 className="text-black dark:text-white font-semibold text-lg mb-2 relative z-10">
                Copy & Paste
              </h3>
              <p className="text-muted text-sm mb-6 relative z-10">
                No npm install required. Just copy the code and own it forever.
              </p>

              <div className="bg-white dark:bg-black rounded-xl p-4 border relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-3 rounded-full bg-[#ff5f56]" />
                  <div className="size-3 rounded-full bg-[#ffbd2e]" />
                  <div className="size-3 rounded-full bg-[#27ca40]" />
                </div>
                <div className="flex items-center justify-between bg-border/50 rounded-lg px-4 py-3 group cursor-pointer hover:bg-border/80 transition-colors">
                  <code className="text-muted text-sm font-mono">
                    npx shadcn-ui@latest add @commercn/cart
                  </code>
                  <Copy
                    size={16}
                    className="text-muted/30 hover:text-black dark:hover:text-white transition-colors"
                  />
                </div>
              </div>
              <div className="absolute -right-16 -bottom-16 w-56 h-80 -rotate-22 opacity-10 pointer-events-none bg-[url('/assets/clipboard.png')] bg-contain bg-no-repeat bg-center transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105 brightness-0 dark:brightness-100" />
            </div>

            {/* Type Safe & Accessible Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group feature-card rounded-2xl p-6 relative overflow-hidden border-2 border-[rgba(196,161,255,0.20)] dark:border-[rgba(196,161,255,0.10)] bg-card/30 backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(196,161,255,0.50)] dark:hover:border-[rgba(196,161,255,0.30)] hover:shadow-[0_8px_32px_rgba(196,161,255,0.25)] dark:hover:shadow-[0_8px_32px_rgba(196,161,255,0.15)] hover:-translate-y-1">
                <div className="size-10 bg-card rounded-lg border dark flex items-center justify-center mb-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M1.5625 0H18.4375C19.3005 0 20 0.699531 20 1.5625V18.4375C20 19.3005 19.3005 20 18.4375 20H1.5625C0.699531 20 0 19.3005 0 18.4375V1.5625C0 0.699531 0.699531 0 1.5625 0Z"
                      fill="white"
                    />
                    <path
                      d="M11.7592 15.6621V17.8199C12.1102 17.9998 12.5252 18.1346 13.0044 18.2245C13.4835 18.3144 13.9886 18.3594 14.5195 18.3594C15.0368 18.3594 15.5284 18.3099 15.994 18.211C16.4596 18.1121 16.8679 17.9492 17.2188 17.7222C17.5698 17.4952 17.8476 17.1984 18.0523 16.832C18.257 16.4657 18.3594 16.0128 18.3594 15.4734C18.3594 15.0822 18.3009 14.7394 18.1839 14.445C18.0681 14.1526 17.8962 13.8857 17.6777 13.6595C17.4573 13.4302 17.193 13.2245 16.8848 13.0424C16.5767 12.8603 16.2291 12.6884 15.8421 12.5266C15.5587 12.4097 15.3045 12.2962 15.0795 12.1861C14.8546 12.076 14.6634 11.9636 14.5059 11.8489C14.3484 11.7343 14.227 11.6129 14.1415 11.4848C14.056 11.3566 14.0133 11.2116 14.0133 11.0498C14.0133 10.9015 14.0515 10.7678 14.128 10.6487C14.2045 10.5295 14.3125 10.4272 14.452 10.3419C14.5914 10.2565 14.7624 10.1902 14.9648 10.1429C15.1673 10.0957 15.3922 10.0721 15.6397 10.0721C15.8197 10.0721 16.0098 10.0856 16.2099 10.1126C16.4101 10.1395 16.6115 10.1811 16.814 10.2373C17.0158 10.2934 17.2132 10.3644 17.4045 10.4498C17.5899 10.5319 17.7672 10.6313 17.9342 10.7464V8.73023C17.6058 8.60435 17.247 8.51107 16.8578 8.45039C16.4686 8.38971 16.0221 8.35937 15.5182 8.35938C15.0053 8.35938 14.5195 8.41445 14.0605 8.52461C13.6016 8.63471 13.1978 8.80664 12.8491 9.04039C12.5005 9.27425 12.2249 9.57208 12.0224 9.93391C11.82 10.2958 11.7188 10.7285 11.7188 11.232C11.7188 11.8748 11.9043 12.4232 12.2755 12.8773C12.6467 13.3313 13.2102 13.7157 13.966 14.0303C14.245 14.144 14.5218 14.2631 14.7961 14.3877C15.0526 14.5046 15.2741 14.626 15.4609 14.7518C15.6476 14.8776 15.7949 15.0147 15.9029 15.1631C16.0109 15.3115 16.0648 15.4801 16.0648 15.6689C16.0657 15.8048 16.0308 15.9385 15.9636 16.0566C15.8961 16.1758 15.7938 16.2791 15.6566 16.3668C15.5193 16.4545 15.3484 16.523 15.1437 16.5724C14.939 16.6218 14.6994 16.6466 14.4249 16.6466C13.9571 16.6466 13.4937 16.5646 13.0348 16.4005C12.5759 16.2364 12.1507 15.9902 11.7592 15.6621ZM8.16266 10.2923H10.9375V8.51562H3.20312V10.2923H5.96445V18.2031H8.16266V10.2923Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h3 className="text-black dark:text-white font-semibold mb-2 relative z-10">
                  Type Safe
                </h3>
                <p className="text-muted text-sm relative z-10">
                  Written in TypeScript. Complete type definitions for every
                  prop and event.
                </p>
                <div className="absolute -right-13 -bottom-13 w-52 h-52 opacity-10 pointer-events-none bg-[url('/assets/ts.png')] bg-contain bg-no-repeat bg-bottom-right transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105 brightness-0 dark:brightness-100" />
              </div>

              <div className="group feature-card rounded-2xl p-6 relative overflow-hidden border-2 border-[rgba(196,161,255,0.20)] dark:border-[rgba(196,161,255,0.10)] bg-card/30 backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(196,161,255,0.50)] dark:hover:border-[rgba(196,161,255,0.30)] hover:shadow-[0_8px_32px_rgba(196,161,255,0.25)] dark:hover:shadow-[0_8px_32px_rgba(196,161,255,0.15)] hover:-translate-y-1">
                <div className="size-10 bg-card rounded-lg border dark flex items-center justify-center mb-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12.3403 15.8334C11.9698 15.8334 11.6528 15.7015 11.3895 15.4376C11.1262 15.1737 10.9942 14.857 10.9937 14.4876V13.8784C10.9937 13.7601 11.0337 13.6612 11.1137 13.5817C11.1937 13.5023 11.2928 13.4623 11.4112 13.4617C11.5295 13.4612 11.6284 13.5012 11.7078 13.5817C11.7873 13.6623 11.827 13.7612 11.827 13.8784V14.4867C11.827 14.6367 11.875 14.7598 11.9712 14.8559C12.0673 14.952 12.1903 15.0001 12.3403 15.0001H13.2537C13.3714 15.0001 13.4703 15.0401 13.5503 15.1201C13.6303 15.2001 13.6703 15.2992 13.6703 15.4176C13.6703 15.5359 13.6303 15.6348 13.5503 15.7142C13.4703 15.7937 13.3714 15.8334 13.2537 15.8334H12.3403ZM16.0737 15.8334C15.9559 15.8334 15.857 15.7934 15.777 15.7134C15.697 15.6334 15.6573 15.5342 15.6578 15.4159C15.6584 15.2976 15.6981 15.1987 15.777 15.1192C15.8559 15.0398 15.955 15.0001 16.0745 15.0001H16.987C17.137 15.0001 17.26 14.952 17.3562 14.8559C17.4523 14.7598 17.5003 14.637 17.5003 14.4876V13.8784C17.5003 13.7601 17.5403 13.6612 17.6203 13.5817C17.7003 13.5023 17.7995 13.4623 17.9178 13.4617C18.0362 13.4612 18.135 13.5012 18.2145 13.5817C18.2939 13.6623 18.3337 13.7612 18.3337 13.8784V14.4867C18.3337 14.8573 18.2017 15.1745 17.9378 15.4384C17.6739 15.7023 17.3573 15.834 16.9878 15.8334H16.0737ZM11.4103 6.53841C11.292 6.53841 11.1928 6.49869 11.1128 6.41925C11.0328 6.3398 10.9931 6.24064 10.9937 6.12175V5.51341C10.9937 5.14286 11.1256 4.82591 11.3895 4.56258C11.6534 4.29925 11.97 4.1673 12.3395 4.16675H13.2537C13.3714 4.16675 13.4703 4.20675 13.5503 4.28675C13.6303 4.36675 13.6703 4.46591 13.6703 4.58425C13.6703 4.70258 13.6303 4.80147 13.5503 4.88091C13.4703 4.96036 13.3714 5.00008 13.2537 5.00008H12.3403C12.1903 5.00008 12.0673 5.04814 11.9712 5.14425C11.875 5.24036 11.827 5.36341 11.827 5.51341V6.12175C11.827 6.24008 11.787 6.33897 11.707 6.41841C11.627 6.49841 11.5281 6.53841 11.4103 6.53841ZM17.9162 6.53841C17.7984 6.53841 17.6995 6.49841 17.6195 6.41841C17.5395 6.33841 17.4998 6.2398 17.5003 6.12258V5.51425C17.5003 5.36425 17.4523 5.24119 17.3562 5.14508C17.26 5.04897 17.1373 5.00064 16.9878 5.00008H16.0745C15.9562 5.00008 15.857 4.96008 15.777 4.88008C15.697 4.80008 15.6573 4.70091 15.6578 4.58258C15.6584 4.46425 15.6981 4.36536 15.777 4.28591C15.8559 4.20647 15.9553 4.16675 16.0753 4.16675H16.9887C17.3587 4.16675 17.6753 4.29869 17.9387 4.56258C18.202 4.82647 18.3337 5.14314 18.3337 5.51258V6.12175C18.3337 6.24008 18.2937 6.33925 18.2137 6.41925C18.1337 6.49925 18.0345 6.53897 17.9162 6.53841ZM14.3495 12.3017C14.2717 12.3762 14.1745 12.4151 14.0578 12.4184C13.9406 12.4217 13.8412 12.3829 13.7595 12.3017C13.6712 12.2129 13.627 12.1145 13.627 12.0067C13.627 11.899 13.6714 11.8006 13.7603 11.7117L15.082 10.4167H5.40116C5.28283 10.4167 5.18394 10.3767 5.10449 10.2967C5.02505 10.2167 4.98505 10.1176 4.98449 9.99925C4.98394 9.88091 5.02394 9.78203 5.10449 9.70258C5.18505 9.62314 5.28394 9.58341 5.40116 9.58341H15.082L13.7553 8.28841C13.6664 8.21286 13.622 8.11869 13.622 8.00591C13.622 7.89314 13.6664 7.7923 13.7553 7.70341C13.8364 7.6223 13.9337 7.58175 14.047 7.58175C14.1603 7.58175 14.2612 7.62064 14.3495 7.69841L16.1953 9.52841C16.3303 9.66341 16.3978 9.82064 16.3978 10.0001C16.3978 10.1795 16.3306 10.3365 16.1962 10.4709L14.3495 12.3017ZM3.01366 15.8334C2.6431 15.8334 2.32616 15.7015 2.06283 15.4376C1.79949 15.1737 1.66755 14.8573 1.66699 14.4884V5.51258C1.66699 5.14258 1.79894 4.82591 2.06283 4.56258C2.32671 4.29925 2.6431 4.1673 3.01199 4.16675H7.65949C8.03005 4.16675 8.34699 4.29869 8.61033 4.56258C8.87366 4.82647 9.0056 5.14314 9.00616 5.51258V7.59591H4.34366C3.9731 7.59591 3.65616 7.72786 3.39283 7.99175C3.12949 8.25564 2.99755 8.5723 2.99699 8.94175V11.0584C2.99699 11.4284 3.12894 11.7451 3.39283 12.0084C3.65671 12.2717 3.97338 12.4037 4.34283 12.4042H9.00699V14.4876C9.00699 14.8576 8.87505 15.1742 8.61116 15.4376C8.34727 15.7009 8.0306 15.8329 7.66116 15.8334H3.01366Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-black dark:text-white font-semibold mb-2 relative z-10">
                  Accessible & Adaptive
                </h3>
                <p className="text-muted text-sm relative z-10">
                  WAI-ARIA compliant components that look great in both dark and
                  light modes out of the box.
                </p>
                <div className="absolute -right-13 -bottom-13 w-52 h-52 opacity-10 pointer-events-none bg-[url('/assets/settings.png')] bg-contain bg-no-repeat bg-bottom-right transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105 brightness-0 dark:brightness-100" />
              </div>
            </div>
          </div>

          {/* Fully Customizable Card */}
          <div className="group feature-card min-h-[300px] md:min-h-[400px] rounded-2xl p-6 relative overflow-hidden border-2 border-[rgba(196,161,255,0.20)] dark:border-[rgba(196,161,255,0.10)] bg-card/30 backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(196,161,255,0.50)] dark:hover:border-[rgba(196,161,255,0.30)] hover:shadow-[0_8px_32px_rgba(196,161,255,0.25)] dark:hover:shadow-[0_8px_32px_rgba(196,161,255,0.15)] hover:-translate-y-1">
            <div className="size-10 bg-card rounded-lg border dark flex items-center justify-center mb-4 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.0003 18.3334C8.90598 18.3334 7.82234 18.1179 6.8113 17.6991C5.80025 17.2803 4.88159 16.6665 4.10777 15.8926C2.54497 14.3298 1.66699 12.2102 1.66699 10.0001C1.66699 7.78994 2.54497 5.67033 4.10777 4.10752C5.67057 2.54472 7.79019 1.66675 10.0003 1.66675C14.5837 1.66675 18.3337 5.00008 18.3337 9.16675C18.3337 10.4928 17.8069 11.7646 16.8692 12.7023C15.9315 13.64 14.6597 14.1667 13.3337 14.1667H11.8337C11.5837 14.1667 11.417 14.3334 11.417 14.5834C11.417 14.6667 11.5003 14.7501 11.5003 14.8334C11.8337 15.2501 12.0003 15.7501 12.0003 16.2501C12.0837 17.4167 11.167 18.3334 10.0003 18.3334ZM10.0003 3.33341C8.23222 3.33341 6.53652 4.03579 5.28628 5.28604C4.03604 6.53628 3.33366 8.23197 3.33366 10.0001C3.33366 11.7682 4.03604 13.4639 5.28628 14.7141C6.53652 15.9644 8.23222 16.6667 10.0003 16.6667C10.2503 16.6667 10.417 16.5001 10.417 16.2501C10.417 16.0834 10.3337 16.0001 10.3337 15.9167C10.0003 15.5001 9.83366 15.0834 9.83366 14.5834C9.83366 13.4167 10.7503 12.5001 11.917 12.5001H13.3337C14.2177 12.5001 15.0656 12.1489 15.6907 11.5238C16.3158 10.8986 16.667 10.0508 16.667 9.16675C16.667 5.91675 13.667 3.33341 10.0003 3.33341ZM5.41699 8.33341C6.08366 8.33341 6.66699 8.91675 6.66699 9.58341C6.66699 10.2501 6.08366 10.8334 5.41699 10.8334C4.75033 10.8334 4.16699 10.2501 4.16699 9.58341C4.16699 8.91675 4.75033 8.33341 5.41699 8.33341ZM7.91699 5.00008C8.58366 5.00008 9.16699 5.58341 9.16699 6.25008C9.16699 6.91675 8.58366 7.50008 7.91699 7.50008C7.25033 7.50008 6.66699 6.91675 6.66699 6.25008C6.66699 5.58341 7.25033 5.00008 7.91699 5.00008ZM12.0837 5.00008C12.7503 5.00008 13.3337 5.58341 13.3337 6.25008C13.3337 6.91675 12.7503 7.50008 12.0837 7.50008C11.417 7.50008 10.8337 6.91675 10.8337 6.25008C10.8337 5.58341 11.417 5.00008 12.0837 5.00008ZM14.5837 8.33341C15.2503 8.33341 15.8337 8.91675 15.8337 9.58341C15.8337 10.2501 15.2503 10.8334 14.5837 10.8334C13.917 10.8334 13.3337 10.2501 13.3337 9.58341C13.3337 8.91675 13.917 8.33341 14.5837 8.33341Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="text-black dark:text-white font-semibold text-lg mb-2 relative z-10">
              Fully Customizable
            </h3>
            <p className="text-muted text-sm relative z-10 max-w-xs">
              Built entirely on Tailwind CSS utility classes. Change colors,
              spacing, and typography to match your brand instantly.
            </p>
            <div className="absolute right-0 -bottom-1/5 scale-125 -rotate-22 w-full h-full opacity-10 pointer-events-none bg-[url('/assets/customize.png')] bg-contain bg-no-repeat bg-bottom-right transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-150 brightness-0 dark:brightness-100" />
          </div>
        </div>
      </section>

      {/* Blocks Grid Section */}
      <section className="px-4 md:px-8 lg:px-12 max-w-full mx-auto md:mx-8 lg:mx-32 py-12 md:py-24 border-x-0 md:border-x-2 bg-white dark:bg-black border-t-2">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Pre-built Commerce Blocks
          </h2>
          <p className="text-muted text-sm md:text-base">
            Start with these foundational elements and extend them to fit your
            specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-0">
          {blocks.map((block) => (
            <Link
              key={block.name}
              href={block.href}
              className="feature-card rounded-2xl overflow-hidden border-2 border-[rgba(196,161,255,0.20)] dark:border-[rgba(196,161,255,0.10)] bg-card/30 backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(196,161,255,0.50)] dark:hover:border-[rgba(196,161,255,0.30)] hover:shadow-[0_8px_32px_rgba(196,161,255,0.25)] dark:hover:shadow-[0_8px_32px_rgba(196,161,255,0.15)] hover:-translate-y-1 group"
            >
              <div className="h-40 md:h-48 p-4 flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-transparent">
                <Image
                  src={block.image}
                  alt={block.name}
                  width={200}
                  height={150}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 dark:hidden"
                />
                <Image
                  src={block.imageDark}
                  alt={block.name}
                  width={200}
                  height={150}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 hidden dark:block"
                />
              </div>
              <div className="p-4 border-t border-[rgba(196,161,255,0.20)] dark:border-[rgba(196,161,255,0.10)]">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {block.name}
                </h3>
                <p className="text-muted text-sm group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">
                  {block.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative -mt-32 md:-mt-48 pt-32 md:pt-48 bg-linear-to-t from-white dark:from-black from-20% via-white/50 dark:via-black/50 via-50% to-transparent">
          <div className="flex justify-center pt-6 md:pt-8">
            <Button
              asChild
              className="bg-black dark:bg-white text-white dark:text-black font-bold rounded-full px-4 md:px-6 text-sm md:text-base transition-all duration-300 hover:scale-105"
            >
              <Link href="/docs/carts/cart-item-01">View All Blocks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 lg:px-12 max-w-full py-16 md:py-32 text-center border-x-0 md:border-x-2 border-t-2 bg-white dark:bg-black">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
          Ready to ship your next <br />
          <span className="text-primary">e-commerce project?</span>
        </h2>
        <p className="text-muted text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed px-4 md:px-0">
          Join thousands of developers building faster, accessible,
          <br className="hidden md:block" />
          and better looking stores with CommerCN.
        </p>

        <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4 md:px-0">
          <Button
            asChild
            size="lg"
            className="bg-black dark:bg-white text-white dark:text-black rounded-full px-4 md:px-6 text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105"
          >
            <Link href="/docs/carts/cart-item-01">Get Started Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full px-4! md:px-6! text-sm md:text-base font-semibold hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 backdrop-blur-lg hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Link
              href="https://github.com/Logging-Studio/commercn"
              target="_blank"
            >
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

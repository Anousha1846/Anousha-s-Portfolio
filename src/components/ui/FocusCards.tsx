"use client";
import React from "react";

export const Card = React.memo(
  ({ card }: { card: Card }) => (
    <div className="relative group rounded-lg bg-gray-100 dark:bg-neutral-900 overflow-hidden p-6 w-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border-sky-600 border-x-2 ">
      <div className="text-xl md:text-2xl pb-4 font-serif font-semibold text-sky-700 dark:text-neutral-50 mb-2">
        {card.title}
      </div>
      <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 mb-4">
        {card.description}
      </p>
      
      {/* Hover Overlay with Buttons */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="flex gap-4">
          <a
            href={card.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white px-4 py-2 rounded-md text-sm font-medium transition hover:bg-neutral-300 dark:hover:bg-neutral-700"
          >
            GitHub
          </a>
          <a
            href={card.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm font-medium transition hover:bg-sky-600"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  );
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number, currency = "USD") => {
  const rates: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 150 };
  const symbol: Record<string, string> = { USD: "$", EUR: "€", GBP: "£", JPY: "¥" };
  
  const converted = amount * (rates[currency] || 1);
  return `${symbol[currency] || "$"}${converted.toFixed(2)}`;
};

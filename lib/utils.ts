import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  const h = parseInt(hours);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

export function generateWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function getWhatsAppBookingMessage(
  name: string,
  service: string,
  date: string,
): string {
  return `Hi Savannah Events, I'm ${name}. I'm interested in booking your ${service} for ${date}. Please get back to me with more details.`;
}

export const eventCategories = [
  { value: "WEDDING", label: "Weddings" },
  { value: "CORPORATE", label: "Corporate Events" },
  { value: "MC_EVENTS", label: "MC Services" },
  { value: "OUTSIDE_GATHERINGS", label: "Outside Gatherings" },
  { value: "BIRTHDAY", label: "Birthday Parties" },
  { value: "CONFERENCE", label: "Conferences" },
  { value: "OTHER", label: "Other Events" },
];

export const bookingStatuses = [
  { value: "PENDING", label: "Pending", color: "yellow" },
  { value: "CONFIRMED", label: "Confirmed", color: "green" },
  { value: "CANCELLED", label: "Cancelled", color: "red" },
  { value: "COMPLETED", label: "Completed", color: "blue" },
];

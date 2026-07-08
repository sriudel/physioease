export const availableDates = [
  "Mon, Jul 13",
  "Tue, Jul 14",
  "Wed, Jul 15",
  "Thu, Jul 16",
  "Fri, Jul 17",
];

export const timeSlotsByDate: Record<string, { time: string; available: boolean }[]> = {
  "Mon, Jul 13": [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "1:00 PM", available: true },
    { time: "3:30 PM", available: true },
  ],
  "Tue, Jul 14": [
    { time: "9:00 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "2:00 PM", available: true },
    { time: "4:00 PM", available: true },
  ],
  "Wed, Jul 15": [
    { time: "9:30 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "2:30 PM", available: false },
    { time: "4:30 PM", available: true },
  ],
  "Thu, Jul 16": [
    { time: "10:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "1:30 PM", available: true },
    { time: "3:00 PM", available: false },
  ],
  "Fri, Jul 17": [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "1:00 PM", available: false },
    { time: "2:30 PM", available: true },
  ],
};

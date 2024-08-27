import { Cabin } from './cabin';

export type Booking = {
  id: number;
  guestId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: Date;
  cabins: { name: string; image: string };
};

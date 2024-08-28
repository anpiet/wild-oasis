import { eachDayOfInterval } from 'date-fns';
import { Country } from '../types/country';
import { Booking, Guest, PrismaClient } from '@prisma/client';
/////////////
// GET
export const dbClient = new PrismaClient();

export async function getCabin(id: number) {
  try {
    const cabin = await dbClient.cabin.findFirst({
      where: {
        id,
      },
    });
    return cabin;
  } catch (e) {
    throw new Error('error with getting cabin by id');
  }
}

export const getCabins = async function () {
  try {
    const cabins = await dbClient.cabin.findMany();
    return cabins;
  } catch (e) {
    throw new Error('Error while getting cabins');
  }
};

// Guests are uniquely identified by their email address
export async function getGuest(email: string) {
  try {
    const guest = await dbClient.guest.findFirst({
      where: {
        email,
      },
    });
    return guest;
  } catch (e) {
    throw new Error('Error getting guest by email');
  }
}

export async function getBooking(id: number) {
  try {
    const booking = await dbClient.booking.findFirst({
      where: {
        id,
      },
      include: { cabin: true },
    });
    return booking;
  } catch (e) {
    throw new Error('Error getting booking');
  }
}

export async function getBookings(guestId: number) {
  try {
    const bookings = await dbClient.booking.findMany({
      where: {
        guestId,
      },
      include: {
        cabin: true,
      },
    });
    return bookings;
  } catch (e) {
    throw new Error('Error getting guest bookings');
  }
}

export async function getSettings() {
  try {
    const settings = await dbClient.settings.findFirst();
    return settings;
  } catch (e) {
    throw new Error('Error getting settings');
  }
}

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(
      'https://restcountries.com/v2/all?fields=name,flag'
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error('Could not fetch countries');
  }
}

/////////////
// CREATE

export async function createGuest(newGuest: Guest) {
  try {
    const guest = await dbClient.guest.create({
      data: newGuest,
    });
    return guest;
  } catch (e) {
    throw new Error('Error adding new guest');
  }
}

export async function createBooking(newBooking: Booking) {
  try {
    const booking = await dbClient.booking.create({
      data: newBooking,
    });
    return booking;
  } catch (e) {
    throw new Error('Error creating new booking');
  }
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id: number, updatedFields: Partial<Guest>) {
  try {
    const guest = await dbClient.guest.update({
      where: {
        id,
      },
      data: {
        ...updatedFields,
      },
    });
    return guest;
  } catch (e) {
    throw new Error('Error updating guest');
  }
}

export async function updateBooking(
  id: number,
  updatedFields: Partial<Booking>
) {
  try {
    const booking = await dbClient.booking.update({
      where: {
        id,
      },
      data: {
        ...updatedFields,
      },
    });
  } catch (e) {
    throw new Error('Error updating booking');
  }
}

/////////////
// DELETE

export async function deleteBooking(id: number) {
  try {
    const deletedBooking = await dbClient.booking.delete({
      where: {
        id,
      },
    });
    return deleteBooking;
  } catch (e) {
    throw new Error('Error deleting booking');
  }
}

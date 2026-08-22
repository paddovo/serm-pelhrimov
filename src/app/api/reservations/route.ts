import { NextResponse } from 'next/server';
import { getReservations, saveReservation, updateReservationStatus, deleteReservation } from '@/lib/db';

function isAuthenticated(req: Request): boolean {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  const adminPassword = process.env.ADMIN_PASSWORD || 'serm2025';
  return token === Buffer.from(adminPassword).toString('base64');
}

export async function GET(req: Request) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Neautorizovaný přístup k údajům.' }, { status: 401 });
  }
  const data = getReservations();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { scheduleId, scheduleTitle, date, time, firstName, lastName, email, phone, age, note, gdprConsent } = body;

    if (!firstName || !lastName || !email || !phone || !gdprConsent) {
      return NextResponse.json(
        { error: 'Chybí povinná pole formuláře nebo GDPR souhlas.' },
        { status: 400 }
      );
    }

    const newRes = saveReservation({
      scheduleId: scheduleId || 'generic',
      scheduleTitle: scheduleTitle || 'Trénink šermu',
      date: date || 'Semestr 2025',
      time: time || '19:00',
      firstName,
      lastName,
      email,
      phone,
      age: Number(age) || 18,
      note,
      gdprConsent: true,
    });

    return NextResponse.json({ success: true, reservation: newRes });
  } catch (err) {
    return NextResponse.json(
      { error: 'Chyba při zpracování rezervace.' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Neautorizovaný přístup.' }, { status: 401 });
  }
  try {
    const { id, status } = await req.json();
    if (!id || !['Nová', 'Potvrzená', 'Zrušená'].includes(status)) {
      return NextResponse.json({ error: 'Neplatná data' }, { status: 400 });
    }
    const success = updateReservationStatus(id, status);
    return NextResponse.json({ success });
  } catch {
    return NextResponse.json({ error: 'Chyba' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Neautorizovaný přístup.' }, { status: 401 });
  }
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID missing' }, { status: 400 });
    const success = deleteReservation(id);
    return NextResponse.json({ success });
  } catch {
    return NextResponse.json({ error: 'Chyba' }, { status: 500 });
  }
}

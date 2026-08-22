import { NextResponse } from 'next/server';
import { getApplications, saveApplication, updateApplicationStatus } from '@/lib/db';

function isAuthenticated(req: Request): boolean {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  const adminPassword = process.env.ADMIN_PASSWORD || 'serm2025';
  return token === Buffer.from(adminPassword).toString('base64');
}

export async function GET(req: Request) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Neautorizovaný přístup k osobním údajům.' }, { status: 401 });
  }
  const data = getApplications();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      address,
      selectedCourse,
      experience,
      healthNotes,
      emergencyContact,
      note,
      gdprConsent,
    } = body;

    if (!firstName || !lastName || !birthDate || !email || !phone || !address || !emergencyContact || !gdprConsent) {
      return NextResponse.json(
        { error: 'Chybí povinná pole přihlášky.' },
        { status: 400 }
      );
    }

    const newApp = saveApplication({
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      address,
      selectedCourse: selectedCourse || 'Šerm dlouhým mečem',
      experience,
      healthNotes,
      emergencyContact,
      note,
      gdprConsent: true,
    });

    return NextResponse.json({ success: true, application: newApp });
  } catch (err) {
    return NextResponse.json(
      { error: 'Chyba při zpracování přihlášky.' },
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
    if (!id || !['Nová', 'Vyřízená', 'Zrušená'].includes(status)) {
      return NextResponse.json({ error: 'Neplatná data' }, { status: 400 });
    }
    const success = updateApplicationStatus(id, status);
    return NextResponse.json({ success });
  } catch {
    return NextResponse.json({ error: 'Chyba' }, { status: 500 });
  }
}

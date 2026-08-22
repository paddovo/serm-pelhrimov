import { NextResponse } from 'next/server';
import { getReservations, getApplications } from '@/lib/db';

function isAuthenticated(req: Request): boolean {
  const { searchParams } = new URL(req.url);
  const tokenParam = searchParams.get('token');
  const authHeader = req.headers.get('authorization');
  const token = tokenParam || (authHeader ? authHeader.replace('Bearer ', '') : null);

  if (!token) return false;
  const adminPassword = process.env.ADMIN_PASSWORD || 'serm2025';
  return token === Buffer.from(adminPassword).toString('base64');
}

export async function GET(req: Request) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Neautorizovaný přístup k exportu.' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || 'reservations';

  if (type === 'applications') {
    const apps = getApplications();
    const headers = 'ID,Jmeno,Prijmeni,Email,Telefon,Adresa,Kurz,Stav,DatumVytvoreni\n';
    const rows = apps
      .map(
        (a) =>
          `"${a.id}","${a.firstName}","${a.lastName}","${a.email}","${a.phone}","${a.address}","${a.selectedCourse}","${a.status}","${a.createdAt}"`
      )
      .join('\n');

    return new NextResponse(headers + rows, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="prihlasky.csv"',
      },
    });
  } else {
    const res = getReservations();
    const headers = 'ID,Trenink,Jmeno,Prijmeni,Email,Telefon,Vek,Stav,DatumVytvoreni\n';
    const rows = res
      .map(
        (r) =>
          `"${r.id}","${r.scheduleTitle}","${r.firstName}","${r.lastName}","${r.email}","${r.phone}","${r.age}","${r.status}","${r.createdAt}"`
      )
      .join('\n');

    return new NextResponse(headers + rows, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="rezervace.csv"',
      },
    });
  }
}

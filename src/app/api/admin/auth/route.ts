import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD || 'serm2025';

    if (password === adminPassword) {
      return NextResponse.json({ success: true, token: Buffer.from(adminPassword).toString('base64') });
    }

    return NextResponse.json({ error: 'Neplatné přístupové heslo.' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Chyba autentizace.' }, { status: 500 });
  }
}

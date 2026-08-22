import test from 'node:test';
import assert from 'node:assert';
import { siteConfig } from '../src/config/site.ts';
import { getReservations, saveReservation } from '../src/lib/db.ts';

test('Site config values', () => {
  assert.strictEqual(siteConfig.domain, 'www.sermpelhrimov.cz');
  assert.strictEqual(siteConfig.schedules.length, 3);
});

test('Database reservation flow', () => {
  const initial = getReservations().length;
  const newRes = saveReservation({
    scheduleId: 'test',
    scheduleTitle: 'Test schedule',
    date: '2025-01-01',
    time: '19:00',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '123456789',
    age: 20,
    gdprConsent: true,
  });

  assert.ok(newRes.id);
  assert.strictEqual(getReservations().length, initial + 1);
});

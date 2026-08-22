import test from 'node:test';
import assert from 'node:assert';
import { siteConfig } from '../src/config/site.ts';
import { getReservations, saveReservation, updateReservationStatus, getApplications, saveApplication } from '../src/lib/db.ts';

test('Site config values', () => {
  assert.strictEqual(siteConfig.domain, 'www.sermpelhrimov.cz');
  assert.ok(siteConfig.schedules.length >= 3);
  assert.ok(siteConfig.weapons.length >= 4);
});

test('Database reservation flow', () => {
  const initialCount = getReservations().length;
  const newRes = saveReservation({
    scheduleId: 'tesak-utery',
    scheduleTitle: 'Šerm tesákem',
    date: '2025-09-16',
    time: '19:00–20:00',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '+420123456789',
    age: 20,
    note: 'Unit test',
    gdprConsent: true,
  });

  assert.ok(newRes.id);
  assert.strictEqual(newRes.status, 'Nová');
  assert.strictEqual(getReservations().length, initialCount + 1);

  const updated = updateReservationStatus(newRes.id, 'Potvrzená');
  assert.ok(updated);
  assert.strictEqual(getReservations().find(r => r.id === newRes.id)?.status, 'Potvrzená');
});

test('Database application flow', () => {
  const initialApps = getApplications().length;
  const newApp = saveApplication({
    firstName: 'Jan',
    lastName: 'Tester',
    birthDate: '2000-01-01',
    email: 'jan@test.com',
    phone: '+420987654321',
    address: 'Pelhřimov 1',
    selectedCourse: 'Šerm dlouhým mečem',
    emergencyContact: 'Eva Testerová - 123456789',
    gdprConsent: true,
  });

  assert.ok(newApp.id);
  assert.strictEqual(getApplications().length, initialApps + 1);
});

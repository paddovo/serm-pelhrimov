import fs from 'fs';
import path from 'path';

export interface Reservation {
  id: string;
  scheduleId: string;
  scheduleTitle: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  note?: string;
  gdprConsent: boolean;
  status: 'Nová' | 'Potvrzená' | 'Zrušená';
  createdAt: string;
}

export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  selectedCourse: string;
  experience?: string;
  healthNotes?: string;
  emergencyContact: string;
  note?: string;
  gdprConsent: boolean;
  status: 'Nová' | 'Vyřízená' | 'Zrušená';
  createdAt: string;
}

const DATA_DIR = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'data');
const RESERVATIONS_FILE = path.join(DATA_DIR, 'reservations.json');
const APPLICATIONS_FILE = path.join(DATA_DIR, 'applications.json');

function ensureDataDir() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (e) {
    // ignore
  }
}

// Initial seed
let reservationsStore: Reservation[] = [
  {
    id: "demo-res-1",
    scheduleId: "dlouhy-mec-zacatecnici",
    scheduleTitle: "Šerm dlouhým mečem – začátečníci",
    date: "2025-09-19",
    time: "20:30–21:30",
    firstName: "Jan",
    lastName: "Novák",
    email: "jan.novak@example.com",
    phone: "+420 777 111 222",
    age: 25,
    note: "Těším se na první trénink",
    gdprConsent: true,
    status: "Potvrzená",
    createdAt: new Date().toISOString(),
  }
];

let applicationsStore: Application[] = [
  {
    id: "demo-app-1",
    firstName: "Petr",
    lastName: "Svoboda",
    birthDate: "1998-05-12",
    email: "petr.svoboda@example.com",
    phone: "+420 608 999 888",
    address: "Nádražní 12, Pelhřimov",
    selectedCourse: "Šerm dlouhým mečem",
    experience: "Žádné (začátečník)",
    emergencyContact: "Jan Svoboda - 608 111 222",
    gdprConsent: true,
    status: "Nová",
    createdAt: new Date().toISOString(),
  }
];

function loadFromFile() {
  ensureDataDir();
  try {
    if (fs.existsSync(RESERVATIONS_FILE)) {
      const data = fs.readFileSync(RESERVATIONS_FILE, 'utf8');
      reservationsStore = JSON.parse(data);
    }
    if (fs.existsSync(APPLICATIONS_FILE)) {
      const data = fs.readFileSync(APPLICATIONS_FILE, 'utf8');
      applicationsStore = JSON.parse(data);
    }
  } catch (e) {
    // fallback to store
  }
}

function saveToFile() {
  ensureDataDir();
  try {
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify(reservationsStore, null, 2));
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applicationsStore, null, 2));
  } catch (e) {
    // fallback
  }
}

// Initial load
loadFromFile();

export function getReservations(): Reservation[] {
  loadFromFile();
  return reservationsStore;
}

export function saveReservation(data: Omit<Reservation, 'id' | 'createdAt' | 'status'>): Reservation {
  loadFromFile();
  const newReservation: Reservation = {
    ...data,
    id: `res_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    status: 'Nová',
    createdAt: new Date().toISOString(),
  };
  reservationsStore.push(newReservation);
  saveToFile();
  return newReservation;
}

export function updateReservationStatus(id: string, status: 'Nová' | 'Potvrzená' | 'Zrušená'): boolean {
  loadFromFile();
  const res = reservationsStore.find(r => r.id === id);
  if (res) {
    res.status = status;
    saveToFile();
    return true;
  }
  return false;
}

export function deleteReservation(id: string): boolean {
  loadFromFile();
  const initialLen = reservationsStore.length;
  reservationsStore = reservationsStore.filter(r => r.id !== id);
  saveToFile();
  return reservationsStore.length < initialLen;
}

export function getApplications(): Application[] {
  loadFromFile();
  return applicationsStore;
}

export function saveApplication(data: Omit<Application, 'id' | 'createdAt' | 'status'>): Application {
  loadFromFile();
  const newApp: Application = {
    ...data,
    id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    status: 'Nová',
    createdAt: new Date().toISOString(),
  };
  applicationsStore.push(newApp);
  saveToFile();
  return newApp;
}

export function updateApplicationStatus(id: string, status: 'Nová' | 'Vyřízená' | 'Zrušená'): boolean {
  loadFromFile();
  const app = applicationsStore.find(a => a.id === id);
  if (app) {
    app.status = status;
    saveToFile();
    return true;
  }
  return false;
}

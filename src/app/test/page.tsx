import { redirect } from 'next/navigation';

export default function TestPage() {
  redirect("https://docs.google.com/forms/d/16417qLA42g4oefpSUe2Q_0dS4W23xJZRZxmM7kBkDwg/edit");
  return null;
}

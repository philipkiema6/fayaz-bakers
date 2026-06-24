export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string[];
  email: string;
  whatsapp: string;
  hours: string;
  image: string;
  mapUrl?: string;
}

export interface Region {
  id: string;
  name: string;
  branchId: string;
}

export const regions: Region[] = [
  { id: "lebanon", name: "Lebanon", branchId: "lebanon" },
  { id: "bamburi", name: "Bamburi", branchId: "bamburi" },
  { id: "mombasa", name: "Mombasa CBD", branchId: "lebanon" },
  { id: "malindi", name: "Malindi", branchId: "bamburi" },
  { id: "kilifi", name: "Kilifi", branchId: "bamburi" },
  { id: "nyali", name: "Nyali", branchId: "lebanon" },
  { id: "likoni", name: "Likoni", branchId: "lebanon" },
  { id: "kisauni", name: "Kisauni", branchId: "bamburi" },
  { id: "mvita", name: "Mvita", branchId: "lebanon" },
  { id: "changamwe", name: "Changamwe", branchId: "lebanon" },
  { id: "philip", name: "Philip Shop", branchId: "philip" },
];

export const branches: Branch[] = [
  {
    id: "lebanon",
    name: "Fayaz Bakers - Lebanon Shop",
    address: "Lebanon Street, Off Moi Avenue, Mombasa",
    phone: ["+254 712 345 678", "+254 733 456 789"],
    email: "lebanon@fayazbakers.co.ke",
    whatsapp: "+254712345678",
    hours: "Mon - Sat: 6:00 AM - 8:00 PM\nSunday: 7:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  },
  {
    id: "bamburi",
    name: "Fayaz Bakers - Bamburi Shop",
    address: "Bamburi Beach Road, Near Bamburi Shopping Centre, Mombasa",
    phone: ["+254 722 987 654", "+254 744 876 543"],
    email: "bamburi@fayazbakers.co.ke",
    whatsapp: "+254722987654",
    hours: "Mon - Sat: 6:30 AM - 8:30 PM\nSunday: 7:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    id: "philip",
    name: "Fayaz Bakers - Philip Shop",
    address: "Philip Street, Mombasa",
    phone: ["+254 742 098 869"],
    email: "philip@fayazbakers.co.ke",
    whatsapp: "+254742098869",
    hours: "Mon - Sat: 6:30 AM - 8:30 PM\nSunday: 7:00 AM - 7:00 PM",
    image: "https://6a3b95a50a4149112241767e.imgix.net/franki-chamaki-ivfp_yxZuYQ-unsplash.jpg",
  },
];

export const getBranchByRegion = (regionId: string): Branch | undefined => {
  const region = regions.find((r) => r.id === regionId);
  if (!region) return undefined;
  return branches.find((b) => b.id === region.branchId);
};

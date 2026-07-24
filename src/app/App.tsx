import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logo from "@/imports/Elmivet_logo__2_.png";
import {
  Menu, X, CheckCircle, Building2, Car, ShoppingBag, Zap, Truck,
  Sparkles, Dumbbell, HardHat, MessageCircle, Phone, Mail, MapPin,
  Instagram, Youtube, Facebook, Linkedin, ChevronDown, ChevronRight,
  SlidersHorizontal, ArrowLeft, Plus, Minus,
} from "lucide-react";

const WHATSAPP_NUMBER = "2347076035180";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const waLink = (product: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${product} — please share more details.`
  )}`;

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" />
    </svg>
  );
}

// ── IMAGE REGISTRY ────────────────────────────────────────
const IMGS = {
  hero:            "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1800&h=900&fit=crop&auto=format",
  portBusy:        "https://images.unsplash.com/photo-1749058388093-c7a66fb90adf?w=1400&h=500&fit=crop&auto=format",
  freightCont:     "https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&h=700&fit=crop&auto=format",
  freightTruck:    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=600&h=400&fit=crop&auto=format",
  containerYard:   "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&h=400&fit=crop&auto=format",
  carSedan:        "https://images.unsplash.com/photo-1781120358201-8034aa10aa70?w=400&h=260&fit=crop&auto=format",
  carSUV:          "https://images.unsplash.com/photo-1770936044591-979681c051cf?w=400&h=260&fit=crop&auto=format",
  carPickup:       "https://images.unsplash.com/photo-1628464682320-6a9ae020cb2b?w=400&h=260&fit=crop&auto=format",
  carVan:          "https://images.unsplash.com/photo-1594507448144-9b75ecb7533c?w=400&h=260&fit=crop&auto=format",
  carLuxury:       "https://images.unsplash.com/photo-1707407772603-274cc5cf18f4?w=400&h=260&fit=crop&auto=format",
  carCommercial:   "https://images.unsplash.com/photo-1567622661088-6951d0f9eedd?w=400&h=260&fit=crop&auto=format",
  elecPhones:      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=260&fit=crop&auto=format",
  elecLaptops:     "https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?w=400&h=260&fit=crop&auto=format",
  elecTV:          "https://images.unsplash.com/photo-1612814266697-e5814f3063cf?w=400&h=260&fit=crop&auto=format",
  buildCement:     "https://images.unsplash.com/photo-1560435650-7ec2e17ba926?w=400&h=260&fit=crop&auto=format",
  buildTruck:      "https://images.unsplash.com/photo-1571989928541-674d0cf46c4a?w=400&h=260&fit=crop&auto=format",
  buildWarehouse:  "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?w=400&h=260&fit=crop&auto=format",
  officePrinter:   "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=260&fit=crop&auto=format",
  officeDesk:      "https://images.unsplash.com/photo-1612814266697-e5814f3063cf?w=400&h=260&fit=crop&auto=format",
  officeSupplies:  "https://images.unsplash.com/photo-1588399944136-efbd34b99d6b?w=400&h=260&fit=crop&auto=format",
  solarInstall1:   "https://images.unsplash.com/photo-1726795867795-32bc9872a44a?w=400&h=260&fit=crop&auto=format",
  solarInstall2:   "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?w=400&h=260&fit=crop&auto=format",
  inverterA:       "https://images.unsplash.com/photo-1597668094760-7d7063c5b638?w=400&h=260&fit=crop&auto=format",
  inverterB:       "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400&h=260&fit=crop&auto=format",
  batteryA:        "https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=400&h=260&fit=crop&auto=format",
  solarKit:        "https://images.unsplash.com/photo-1749058388093-c7a66fb90adf?w=400&h=260&fit=crop&auto=format",
  fitnessGym:      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=260&fit=crop&auto=format",
  fitnessMachines: "https://images.unsplash.com/photo-1578874691223-64558a3ca096?w=400&h=260&fit=crop&auto=format",
  fitnessWeights:  "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=400&h=260&fit=crop&auto=format",
  fitnessDumbbells:"https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=260&fit=crop&auto=format",
  blogShip:        "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=380&fit=crop&auto=format",
  blogCargo:       "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=600&h=380&fit=crop&auto=format",
  blogAerial:      "https://images.unsplash.com/photo-1613690399151-65ea69478674?w=600&h=380&fit=crop&auto=format",
};

// ── RFP MODAL ─────────────────────────────────────────────
function RFPModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", details: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 3000);
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors z-10"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-400 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={30} className="text-green-500" />
              </div>
              <h3 className="font-black text-foreground text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Thank you!
              </h3>
              <p className="text-muted-foreground text-sm">We'll contact you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="font-black text-foreground text-xl sm:text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Request for Proposal
                </h2>
                <p className="text-muted-foreground text-sm">Tell us about your project and we'll get back to you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name <span className="text-[#E0392B]">*</span></label>
                    <input
                      type="text" required value={form.name} onChange={set("name")}
                      placeholder="e.g. John Adebayo"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Email <span className="text-[#E0392B]">*</span></label>
                    <input
                      type="email" required value={form.email} onChange={set("email")}
                      placeholder="e.g. john@company.com"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/25"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Company</label>
                  <input
                    type="text" value={form.company} onChange={set("company")}
                    placeholder="e.g. ABC Enterprises"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Project Details <span className="text-[#E0392B]">*</span></label>
                  <textarea
                    required rows={4} value={form.details} onChange={set("details")}
                    placeholder="Describe your project, requirements, timeline, and any other relevant information..."
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/25 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0F2A4A] hover:bg-[#13315C] text-white font-bold py-3.5 rounded-full text-sm transition-all hover:shadow-lg"
                >
                  Send Request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── TYPES ─────────────────────────────────────────────────
interface Product { name: string; image: string; specs: string; category: string; }

// ── NAV DATA ──────────────────────────────────────────────
const SHOP_TABS = ["Cars", "General Merchandise", "Energy & Solar", "Fitness Equipment"] as const;
type ShopTab = typeof SHOP_TABS[number];
const SHOP_NAV = [...SHOP_TABS];
const SERVICE_LINKS = ["Real Estate", "Logistics & Trade", "Cleaning Services", "Fitness Solutions", "Construction", "Petroleum"];
const TRUST_BADGES = ["Verified Lands & Properties", "Trusted Documentation", "Smooth & Transparent Transactions"];
const SERVICES = [
  { icon: Building2,   label: "Real Estate",             desc: "Verified Lands & Properties" },
  { icon: Car,         label: "Cars & Importation",      desc: "Weekly shipment updates" },
  { icon: ShoppingBag, label: "General Merchandise",     desc: "Electronics & Supplies" },
  { icon: Zap,         label: "Energy Solutions",        desc: "Solar & Petroleum" },
  { icon: Truck,       label: "Logistics & Freight",     desc: "Import, Export & Clearing" },
  { icon: Sparkles,    label: "Cleaning Services",       desc: "Home, Office & Post-Construction" },
  { icon: Dumbbell,    label: "Fitness Solutions",       desc: "Equipment Supply & Delivery" },
  { icon: HardHat,     label: "Construction & Projects", desc: "Fabrication & Marine Services" },
];

// ── SHOP DATA ─────────────────────────────────────────────
const CAR_CARDS: Product[] = [
  { name: "Saloon Vehicle",       image: IMGS.carSedan,      specs: "Type: Saloon | Condition: Foreign Used | MOQ: 1 Unit",  category: "Saloon" },
  { name: "SUV / Crossover",      image: IMGS.carSUV,        specs: "Type: SUV | Condition: Foreign Used | MOQ: 1 Unit",     category: "SUV" },
  { name: "Pickup Truck",         image: IMGS.carPickup,     specs: "Type: Pickup | Load Capacity: 1T | MOQ: 1 Unit",        category: "Pickup" },
  { name: "Mini Van",             image: IMGS.carVan,        specs: "Type: Van | Seating: 7–9 | MOQ: 1 Unit",               category: "Mini Van" },
  { name: "Luxury Sedan",         image: IMGS.carLuxury,     specs: "Type: Luxury | Brand: Premium | MOQ: 1 Unit",          category: "Luxury" },
  { name: "Commercial Bus / Van", image: IMGS.carCommercial, specs: "Type: Commercial | Capacity: 14+ | MOQ: 1 Unit",       category: "Commercial" },
];

const MERCH_ROWS: { group: string; cards: Product[] }[] = [
  {
    group: "Electronics",
    cards: [
      { name: "Mobile Phones & Accessories", image: IMGS.elecPhones,  specs: "Grade: Grade A | MOQ: 10 Units | Origin: Imported", category: "Electronics" },
      { name: "Laptops & Computers",         image: IMGS.elecLaptops, specs: "Grade: New & Refurb | MOQ: 5 Units | Origin: UK/China", category: "Electronics" },
      { name: "TVs & Display Screens",       image: IMGS.elecTV,      specs: "Size: 32–65 Inch | MOQ: 3 Units | Brand: Various", category: "Electronics" },
    ],
  },
  {
    group: "Building Materials",
    cards: [
      { name: "Cement & Concrete Blocks",   image: IMGS.buildCement,    specs: "Grade: Premium | MOQ: 25 Bags | Origin: Nigeria", category: "Building Materials" },
      { name: "Iron Rods & Steel Pipes",    image: IMGS.buildTruck,     specs: "Standard: SON Approved | MOQ: 1 Ton | Origin: Imported", category: "Building Materials" },
      { name: "Roofing Sheets & Tiles",     image: IMGS.buildWarehouse, specs: "Gauge: 0.45mm | MOQ: 100 Sheets | Origin: Nigeria", category: "Building Materials" },
    ],
  },
  {
    group: "Office Supplies",
    cards: [
      { name: "Printers & Scanners",        image: IMGS.officePrinter,  specs: "Type: Laser/Inkjet | MOQ: 2 Units | Brand: Various", category: "Office Supplies" },
      { name: "Office Furniture & Desks",   image: IMGS.officeDesk,     specs: "Material: Wood/Steel | MOQ: 5 Units | Assembly: Included", category: "Office Supplies" },
      { name: "Stationery & Consumables",   image: IMGS.officeSupplies, specs: "Pack Size: Bulk | MOQ: 10 Packs | Origin: Various", category: "Office Supplies" },
    ],
  },
];

const ENERGY_CARDS: Product[] = [
  { name: "Solar Panel Unit — Type A",    image: IMGS.solarInstall1, specs: "Wattage: 200–400W | Grade: A | Origin: China/EU", category: "Solar Panels" },
  { name: "Solar Panel Unit — Type B",    image: IMGS.solarInstall2, specs: "Wattage: 500W+ | Grade: A+ | Origin: China/EU",  category: "Solar Panels" },
  { name: "Inverter System — Capacity A", image: IMGS.inverterA,     specs: "Capacity: 1–3KVA | Type: Pure Sine | Warranty: 1yr", category: "Inverters" },
  { name: "Inverter System — Capacity B", image: IMGS.inverterB,     specs: "Capacity: 5–10KVA | Type: Hybrid | Warranty: 2yr", category: "Inverters" },
  { name: "Battery Storage Unit",         image: IMGS.batteryA,      specs: "Type: Lithium/Gel | Capacity: 100–200Ah | Cycles: 2000+", category: "Batteries" },
  { name: "Complete Solar Kit — Bundle",  image: IMGS.solarKit,      specs: "Includes: Panel+Inverter+Battery | MOQ: 1 Set", category: "Complete Kits" },
];

const FITNESS_CARDS: Product[] = [
  { name: "Commercial Treadmills",           image: IMGS.fitnessGym,       specs: "Speed: 1–20km/h | Motor: 3HP | Warranty: 1yr", category: "Cardio" },
  { name: "Gym Machines — Full Set",         image: IMGS.fitnessMachines,  specs: "Stations: Multi | Grade: Commercial | MOQ: 1 Set", category: "Machines" },
  { name: "Weight Plates & Barbells",        image: IMGS.fitnessWeights,   specs: "Material: Cast Iron | Set: 20–100kg | Origin: Imported", category: "Free Weights" },
  { name: "Dumbbell Sets",                   image: IMGS.fitnessDumbbells, specs: "Range: 2.5–50kg | Coating: Rubber | MOQ: 1 Pair", category: "Free Weights" },
  { name: "Resistance & Strength Equipment", image: IMGS.fitnessGym,       specs: "Type: Cable/Plate | Grade: Commercial | MOQ: 1 Unit", category: "Strength" },
  { name: "Bench & Rack Systems",            image: IMGS.fitnessMachines,  specs: "Type: Adjustable | Capacity: 300kg | MOQ: 1 Set", category: "Machines" },
];

// ── FAQ DATA ──────────────────────────────────────────────
const FAQS = [
  {
    q: "What services does Elmivet International Limited offer?",
    a: "We offer a wide range of services including verified real estate sales and rentals, car importation, general merchandise procurement, energy and solar solutions, logistics and freight forwarding, cleaning services, fitness equipment supply, and construction project services.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ varies by product category. For vehicles it is 1 unit; for bulk goods like cement it starts at 25 bags; for electronics the MOQ is typically 5–10 units. Contact us on WhatsApp for a specific quote based on your needs.",
  },
  {
    q: "How does delivery work?",
    a: "We offer road haulage, freight forwarding, and clearing services across Nigeria and internationally. For imported goods we handle customs clearing at the port. Delivery timelines vary — locally within 1–5 working days, international shipments within 4–12 weeks depending on origin.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept bank transfer, card payment, and USSD. For large orders, a deposit of 50–70% is required upfront, with the balance paid before delivery. Specific terms are agreed per transaction.",
  },
  {
    q: "What is the typical lead time for imported goods?",
    a: "Lead time for imported vehicles and goods from the UK, USA, or China is typically 4–12 weeks from order confirmation, subject to shipping schedules and port clearing. We provide weekly shipment updates for cars.",
  },
  {
    q: "How do I contact support or place an enquiry?",
    a: "You can reach us via WhatsApp on +234 707 603 5180 or +234 812 892 5190, email us at elmivet19@gmail.com, or visit our office on Mummy B Road, Opposite AXXA Mansard, Off Stadium Road, Port Harcourt.",
  },
];

// ── BLOG DATA ─────────────────────────────────────────────
const BLOG_POSTS = [
  {
    image: IMGS.blogShip,
    title: "How We Simplify Car Importation for Nigerian Buyers",
    date: "June 10, 2025",
    excerpt: "From port clearing to doorstep delivery — here is how Elmivet handles the entire vehicle importation process so you don't have to.",
  },
  {
    image: IMGS.blogCargo,
    title: "Solar Energy Procurement: What You Need to Know",
    date: "May 28, 2025",
    excerpt: "Rising energy costs are pushing more homes and businesses toward solar. We break down what to look for when procuring panels, inverters, and batteries.",
  },
  {
    image: IMGS.blogAerial,
    title: "Elmivet's Logistics Network: How We Move Cargo Across Nigeria",
    date: "May 14, 2025",
    excerpt: "Our freight forwarding, groupage, and road haulage services now cover all 36 states. Learn how we keep your supply chain moving.",
  },
];

// ── PRESS LOGOS (SVG text-based placeholders) ─────────────
const PRESS_LOGOS = [
  "BusinessDay", "Vanguard", "Punch", "ThisDay", "Guardian", "Tribune",
];

// ── CHECKOUT SCREEN ───────────────────────────────────────
type PaymentMethod = "bank" | "card" | "ussd";

function CheckoutScreen({ product, onBack }: { product: Product; onBack: () => void }) {
  const [qty, setQty] = useState(1);
  const [payMethod, setPayMethod] = useState<PaymentMethod>("bank");
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  const field = (label: string, key: keyof typeof form, type = "text", placeholder = "") => (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">{label} <span className="text-[#E0392B]">*</span></label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        required
        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-[#13315C]/25"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-accent transition-colors">
            <ArrowLeft size={18} /> Back
          </button>
          <div className="w-px h-6 bg-border" />
          <ImageWithFallback src={logo} alt="Elmivet International Limited" className="h-9 w-auto object-contain" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Complete Your Order
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="font-bold text-foreground text-base mb-5">Delivery Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {field("Full Name", "name", "text", "e.g. John Adebayo")}
                {field("Email Address", "email", "email", "e.g. john@email.com")}
                {field("Phone Number", "phone", "tel", "e.g. +234 800 000 0000")}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-foreground mb-1.5">Delivery Address <span className="text-[#E0392B]">*</span></label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Full delivery address including city and state"
                  rows={3}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-[#13315C]/25 resize-none"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="font-bold text-foreground text-base mb-5">Quantity</h2>
              <div className="flex items-center gap-4">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <Minus size={16} />
                </button>
                <span className="font-bold text-xl text-foreground w-10 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="font-bold text-foreground text-base mb-5">Payment Method</h2>
              <div className="space-y-3">
                {([
                  { id: "bank", label: "Bank Transfer", desc: "Transfer directly to our GTBank/Access account" },
                  { id: "card",  label: "Card Payment",  desc: "Pay securely with your debit or credit card" },
                  { id: "ussd", label: "USSD",           desc: "Dial a short code from your mobile phone" },
                ] as { id: PaymentMethod; label: string; desc: string }[]).map(({ id, label, desc }) => (
                  <label key={id} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${payMethod === id ? "border-[#13315C] bg-[#13315C]/5" : "border-border hover:border-[#13315C]/40"}`}>
                    <input type="radio" name="payment" value={id} checked={payMethod === id} onChange={() => setPayMethod(id)} className="accent-[#13315C]" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
              <h2 className="font-bold text-foreground text-base mb-5">Order Summary</h2>
              <div className="h-32 rounded-xl overflow-hidden mb-4 bg-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-bold text-foreground text-sm mb-1">{product.name}</p>
              <p className="text-xs text-muted-foreground mb-5">{product.specs}</p>

              <div className="space-y-2 text-sm border-t border-border pt-4 mb-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Unit Price</span>
                  <span>Contact for Price</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Quantity</span>
                  <span>{qty}</span>
                </div>
                <div className="flex justify-between font-bold text-foreground border-t border-border pt-2 mt-2">
                  <span>Total</span>
                  <span>Price on Request</span>
                </div>
              </div>

              <a
                href={waLink(`${product.name} (Qty: ${qty})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#13315C] hover:bg-[#0c2040] text-white font-bold py-3.5 rounded-full text-sm transition-all hover:shadow-lg mb-3"
              >
                Pay Now — Confirm via WhatsApp
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Our team will confirm pricing and payment details via WhatsApp within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PRODUCT CARD ──────────────────────────────────────────
function ProductCard({ product, onOrder }: { product: Product; onOrder: (p: Product) => void }) {
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all group flex flex-col">
      <div className="h-44 bg-muted overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="font-bold text-foreground text-sm mb-1.5 leading-snug">{product.name}</p>
        <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{product.specs}</p>
        <span className="inline-block text-xs font-semibold text-[#13315C] bg-blue-50 px-2.5 py-0.5 rounded-full mb-4 w-fit">
          Price on Request
        </span>
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onOrder(product)}
            className="flex-1 flex items-center justify-center bg-[#13315C] hover:bg-[#0c2040] text-white text-xs font-bold px-3 py-2.5 rounded-full transition-colors"
          >
            Order Now
          </button>
          <a
            href={waLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-xs font-bold px-3 py-2.5 rounded-full transition-colors"
          >
            <MessageCircle size={12} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ── FILTER BAR ────────────────────────────────────────────
function FilterBar({ categories }: { categories: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 p-3 sm:p-4 bg-secondary rounded-xl border border-border">
      <SlidersHorizontal size={15} className="text-muted-foreground shrink-0" />
      <select className="text-xs sm:text-sm border border-border rounded-lg px-2.5 sm:px-3 py-1.5 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/20 min-w-0">
        <option>All Categories</option>
        {categories.map((c) => <option key={c}>{c}</option>)}
      </select>
      <select className="text-xs sm:text-sm border border-border rounded-lg px-2.5 sm:px-3 py-1.5 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/20">
        <option>Price: All</option>
        <option>Price on Request</option>
        <option>Fixed Price</option>
      </select>
      <select className="text-xs sm:text-sm border border-border rounded-lg px-2.5 sm:px-3 py-1.5 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-[#13315C]/20">
        <option>Availability: All</option>
        <option>In Stock</option>
        <option>Awaiting Clearance</option>
        <option>Pre-Order</option>
      </select>
    </div>
  );
}

// ── NAV DROPDOWN ──────────────────────────────────────────
function NavDropdown({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-accent transition-colors tracking-wide uppercase">
        {label}
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-border rounded-xl shadow-xl py-2 min-w-[220px] z-50">
          {items.map((item) => (
            <a key={item} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-accent transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── ACCORDION ─────────────────────────────────────────────
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-border rounded-2xl overflow-hidden transition-shadow ${open ? "shadow-md" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left bg-white hover:bg-secondary transition-colors"
      >
        <span className="font-bold text-foreground text-sm sm:text-base">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-[#E0392B] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-white text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

// ── SHOP SECTION ──────────────────────────────────────────
function ShopSection({ onOrder }: { onOrder: (p: Product) => void }) {
  const [active, setActive] = useState<ShopTab>("Cars");
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#E0392B] text-xs font-bold uppercase tracking-widest mb-3">Shop</p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Browse Our Products</h2>
          <div className="mt-4 w-16 h-1 bg-[#E0392B] mx-auto rounded-full" />
        </div>

        {/* Tab bar */}
        <div className="overflow-x-auto mb-10 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-1 bg-secondary p-1 rounded-xl w-fit mx-auto min-w-max">
            {SHOP_TABS.map((tab) => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${active === tab ? "bg-[#13315C] text-white shadow" : "text-foreground/60 hover:text-foreground"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cars */}
        {active === "Cars" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#13315C] text-white rounded-2xl px-5 sm:px-6 py-4 mb-8">
              <Truck size={22} className="shrink-0 text-[#E0392B]" />
              <div>
                <p className="font-bold text-sm">Weekly Car Shipment Updates</p>
                <p className="text-white/65 text-xs mt-0.5">Fresh stock arriving regularly — enquire to confirm current availability.</p>
              </div>
              <a href={waLink("weekly car shipment availability")} target="_blank" rel="noopener noreferrer"
                className="sm:ml-auto shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors w-fit">
                <MessageCircle size={13} /> Ask Now
              </a>
            </div>
            <FilterBar categories={["Saloon", "SUV", "Pickup", "Mini Van", "Luxury", "Commercial"]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {CAR_CARDS.map((c) => <ProductCard key={c.name} product={c} onOrder={onOrder} />)}
            </div>
          </div>
        )}

        {/* General Merchandise */}
        {active === "General Merchandise" && (
          <div>
            <FilterBar categories={["Electronics", "Building Materials", "Office Supplies"]} />
            {MERCH_ROWS.map(({ group, cards }) => (
              <div key={group} className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="font-black text-foreground text-base sm:text-lg shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>{group}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {cards.map((c) => <ProductCard key={c.name} product={c} onOrder={onOrder} />)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Energy & Solar */}
        {active === "Energy & Solar" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#E0392B] text-white rounded-2xl px-5 sm:px-6 py-5 mb-8">
              <Zap size={26} className="shrink-0" />
              <div>
                <p className="font-bold">Solar Procurement & Installation</p>
                <p className="text-white/70 text-sm mt-0.5">For all your energy needs — panels, inverters, batteries, and full installations.</p>
              </div>
              <a href={waLink("solar procurement and installation")} target="_blank" rel="noopener noreferrer"
                className="sm:ml-auto shrink-0 flex items-center gap-2 bg-white text-[#E0392B] text-xs font-bold px-4 py-2 rounded-full hover:bg-white/90 transition-colors w-fit">
                <MessageCircle size={13} /> Get a Quote
              </a>
            </div>
            <FilterBar categories={["Solar Panels", "Inverters", "Batteries", "Complete Kits"]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {ENERGY_CARDS.map((c) => <ProductCard key={c.name} product={c} onOrder={onOrder} />)}
            </div>
          </div>
        )}

        {/* Fitness Equipment */}
        {active === "Fitness Equipment" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#13315C] text-white rounded-2xl px-5 sm:px-6 py-4 mb-8">
              <Dumbbell size={22} className="shrink-0 text-[#E0392B]" />
              <div>
                <p className="font-bold text-sm">Fitness Equipment Supply & Delivery</p>
                <p className="text-white/65 text-xs mt-0.5">Serving Benin Republic, Oil Mill Market (Rivers State), and nationwide. International delivery available.</p>
              </div>
              <a href={waLink("fitness equipment supply")} target="_blank" rel="noopener noreferrer"
                className="sm:ml-auto shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors w-fit">
                <MessageCircle size={13} /> Enquire Now
              </a>
            </div>
            <FilterBar categories={["Cardio", "Free Weights", "Machines", "Strength"]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {FITNESS_CARDS.map((c) => <ProductCard key={c.name} product={c} onOrder={onOrder} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── MAIN APP ──────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);
  const [rfpOpen, setRfpOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (checkoutProduct) {
    return <CheckoutScreen product={checkoutProduct} onBack={() => setCheckoutProduct(null)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/97 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center shrink-0">
              <ImageWithFallback src={logo} alt="Elmivet International Limited" className="h-11 w-auto object-contain" />
            </a>
            <nav className="hidden lg:flex items-center gap-7">
              <a href="#home" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors tracking-wide uppercase">Home</a>
              <NavDropdown label="Shop" items={SHOP_NAV} />
              <NavDropdown label="Services" items={SERVICE_LINKS} />
              <a href="#about" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors tracking-wide uppercase">About</a>
              <a href="#contact" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors tracking-wide uppercase">Contact</a>
            </nav>
            <button
              onClick={() => setRfpOpen(true)}
              className="hidden lg:flex items-center gap-2 bg-[#E0392B] hover:bg-[#c42d20] text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
            >
              Request for Proposal
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wide py-3 border-b border-border">Home</a>
            <div>
              <button onClick={() => setMobileShopOpen(!mobileShopOpen)}
                className="w-full flex justify-between items-center text-sm font-semibold uppercase tracking-wide py-3 border-b border-border">
                Shop <ChevronDown size={13} className={`transition-transform ${mobileShopOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileShopOpen && (
                <div className="bg-secondary rounded-lg my-1 py-1">
                  {SHOP_NAV.map((l) => <a key={l} href="#shop" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-foreground/70">{l}</a>)}
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center text-sm font-semibold uppercase tracking-wide py-3 border-b border-border">
                Services <ChevronDown size={13} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="bg-secondary rounded-lg my-1 py-1">
                  {SERVICE_LINKS.map((l) => <a key={l} href="#services" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-foreground/70">{l}</a>)}
                </div>
              )}
            </div>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wide py-3 border-b border-border">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wide py-3 border-b border-border">Contact</a>
            <button
              onClick={() => { setMenuOpen(false); setRfpOpen(true); }}
              className="flex items-center justify-center gap-2 bg-[#E0392B] hover:bg-[#c42d20] text-white text-sm font-bold px-4 py-3 rounded-full mt-3 transition-colors"
            >
              Request for Proposal
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section id="home" className="relative pt-16 lg:pt-20 min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="Aerial shipping container yard" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(19,49,92,0.92) 0%, rgba(19,49,92,0.80) 40%, rgba(19,49,92,0.40) 70%, rgba(19,49,92,0.08) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, rgba(19,49,92,0.5), transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0392B] animate-pulse" />
              Nigeria's Procurement & Trade Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Trusted Partner in Trade, <span className="text-[#E0392B]">Property</span> & Development
            </h1>
            <p className="text-lg text-white/65 mb-10 max-w-lg leading-relaxed">
              Verified Real Estate &nbsp;•&nbsp; Trusted Transactions &nbsp;•&nbsp; Seamless Delivery
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#shop" className="bg-[#E0392B] hover:bg-[#c42d20] text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5">Browse Shop</a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5">Explore Services</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" className="w-full" preserveAspectRatio="none" style={{ height: 50 }}>
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BADGES ───────────────────────────────────── */}
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl border border-border bg-secondary hover:shadow-md transition-shadow">
                <CheckCircle className="text-[#E0392B] shrink-0" size={22} />
                <span className="font-semibold text-foreground text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ROW ───────────────────────────── */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">Browse by Category</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: Car,         label: "Cars & Importation",    sub: "Weekly shipment arrivals",        image: IMGS.carSUV,        color: "bg-[#13315C]" },
              { icon: ShoppingBag, label: "General Merchandise",   sub: "Electronics, Materials & Supplies", image: IMGS.buildWarehouse, color: "bg-[#13315C]" },
              { icon: Zap,         label: "Energy & Solar",        sub: "Panels, inverters & batteries",   image: IMGS.solarInstall1,  color: "bg-[#E0392B]" },
              { icon: Dumbbell,    label: "Fitness Equipment",     sub: "Gym & strength equipment",        image: IMGS.fitnessGym,    color: "bg-[#13315C]" },
            ].map(({ icon: Icon, label, sub, image, color }) => (
              <a key={label} href="#shop" className="group relative rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all block">
                <div className="relative h-40 sm:h-44 bg-muted">
                  <img src={image} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13315C]/70 via-[#13315C]/20 to-transparent" />
                </div>
                <div className="p-4 bg-white flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={17} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm leading-tight truncate">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                  <ChevronRight size={14} className="ml-auto text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP TABS ──────────────────────────────────────── */}
      <ShopSection onOrder={setCheckoutProduct} />

      {/* ── WHAT WE OFFER ──────────────────────────────────── */}
      <section id="services" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#E0392B] text-xs font-bold uppercase tracking-widest mb-3">Our Divisions</p>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>What We Offer</h2>
            <div className="mt-4 w-16 h-1 bg-[#E0392B] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {SERVICES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group p-5 sm:p-6 rounded-2xl border border-border bg-white hover:border-[#13315C] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#13315C] flex items-center justify-center mb-4 group-hover:bg-[#E0392B] transition-colors">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET STARTED ────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #E0392B 0%, #c22a1e 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <img src={IMGS.portBusy} alt="Busy port" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Work with Us?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Send us a DM with your preferred location and budget — let our expert team handle the rest.</p>
          <a href={waLink("your services")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#E0392B] font-bold px-8 sm:px-10 py-4 rounded-full text-sm uppercase tracking-wide hover:shadow-2xl hover:-translate-y-1 transition-all">
            <MessageCircle size={18} /> Chat on WhatsApp Now
          </a>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#E0392B] text-xs font-bold uppercase tracking-widest mb-4">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>A One-Stop Conglomerate Delivering Trust Across Nigeria</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">Elmivet International Limited, alongside its affiliates and sister companies, is a diversified conglomerate delivering trust across real estate, trade, logistics, and lifestyle services across Nigeria and internationally.</p>
              <p className="text-muted-foreground leading-relaxed">From verified land acquisitions in Rivers, Abia, Abuja, Anambra, and Imo States — to freight forwarding, customs brokerage, solar procurement, and industrial cleaning — we handle it all with transparency.</p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-72 sm:h-80 lg:h-[420px] bg-muted">
                <img src={IMGS.freightCont} alt="Aerial view of freight containers — Elmivet logistics operations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(19,49,92,0.35), transparent 60%)" }} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 sm:w-32 h-28 sm:h-32 bg-[#E0392B] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-16 sm:w-20 h-16 sm:h-20 bg-[#13315C] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR OPERATIONS STRIP ───────────────────────────── */}
      <section className="bg-white pt-12 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Our Operations</p>
        </div>
        <div className="flex overflow-hidden">
          {[
            { src: IMGS.freightTruck,  alt: "Freight truck on road" },
            { src: IMGS.portBusy,      alt: "Busy shipping port" },
            { src: IMGS.containerYard, alt: "Container yard aerial view" },
          ].map(({ src, alt }) => (
            <div key={alt} className="flex-1 h-44 sm:h-56 lg:h-64 overflow-hidden relative">
              <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#13315C]/25" />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#E0392B] text-xs font-bold uppercase tracking-widest mb-3">Support</p>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2>
            <div className="mt-4 w-16 h-1 bg-[#E0392B] mx-auto rounded-full" />
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => <AccordionItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-4">Still have questions? Reach us directly.</p>
            <a href={waLink("a general enquiry")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
              <MessageCircle size={16} /> Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── NEWS & BLOG ────────────────────────────────────── */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#E0392B] text-xs font-bold uppercase tracking-widest mb-3">Updates</p>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>News & Blog</h2>
            <div className="mt-4 w-16 h-1 bg-[#E0392B] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all group">
                <div className="h-48 bg-muted overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground font-semibold mb-3 uppercase tracking-wide">{post.date}</p>
                  <h3 className="font-black text-foreground text-base leading-snug mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <a href="#blog" className="inline-flex items-center gap-1.5 text-[#E0392B] text-sm font-bold hover:gap-2.5 transition-all">
                    Read More <ChevronRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS / AS SEEN IN ─────────────────────────────── */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">As Seen In</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {PRESS_LOGOS.map((name) => (
              <div key={name}
                className="px-6 py-3 rounded-xl border border-border bg-white grayscale hover:grayscale-0 hover:border-[#13315C] hover:shadow-md transition-all cursor-pointer"
              >
                <span className="font-black text-lg text-foreground/40 hover:text-[#13315C] transition-colors tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ background: "linear-gradient(135deg, #13315C 0%, #0c2040 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#E0392B] text-xs font-bold uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl lg:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Phone, label: "Phone",       lines: ["+234 707 603 5180", "+234 812 892 5190"] },
              { icon: Mail,  label: "Email",       lines: ["elmivet19@gmail.com"] },
              { icon: MapPin,label: "Main Office", lines: ["Mummy B Road, Opposite AXXA Mansard,", "Off Stadium Road, Port Harcourt"] },
            ].map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="w-10 h-10 rounded-xl bg-[#E0392B] flex items-center justify-center shrink-0 mt-1">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
                  {lines.map((line, i) => <p key={i} className="text-white font-medium text-sm">{line}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 sm:p-5 bg-[#E0392B]/10 border border-[#E0392B]/30 rounded-2xl text-center max-w-xl mx-auto">
            <p className="text-white font-bold text-sm">Working Hours: Monday – Friday, 8:00 AM – 5:00 PM</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-[#0a1a30] text-white/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <ImageWithFallback src={logo} alt="Elmivet International Limited" className="h-14 w-auto object-contain mx-auto lg:mx-0 mb-3 brightness-0 invert" />
              <p className="text-sm text-white/35 italic">Delivering Trust in Every Deal</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-5">
              {[
                { Icon: Instagram,  href: "#" },
                { Icon: TikTokIcon, href: "#" },
                { Icon: Youtube,    href: "#" },
                { Icon: Facebook,   href: "#" },
                { Icon: Linkedin,   href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E0392B] hover:border-[#E0392B] text-white/50 hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/25">
            © {new Date().getFullYear()} Elmivet International Limited. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ──────────────────────────────── */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp">
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* ── RFP MODAL ──────────────────────────────────────── */}
      {rfpOpen && <RFPModal onClose={() => setRfpOpen(false)} />}
    </div>
  );
}

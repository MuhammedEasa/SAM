import mechanical from "../assets/services/mechanical.jpg";
import HVAC from "../assets/services/HVAC.jpeg";
import ACDUCT from "../assets/services/ac-duct.jpg";
import Plumbing from "../assets/services/Plumbing.jpg";
import Drain from "../assets/services/Drain-Sewer.jpeg";
import WaterCleaning from "../assets/services/WaterCleaning.jpg";
import Electrician from "../assets/services/Electrician.jpg";
import ELV from "../assets/services/ELV.png";
import Villas from "../assets/services/Villas.jpg";
import WaterProofing from "../assets/services/WaterProofing.jpg";
import ConcreteRepairing from "../assets/services/ConcreteRepairing.jpg";
import Tiles from "../assets/services/Tiles.jpg";
import Painting from "../assets/services/Painting.jpg";
import Gypsum from "../assets/services/Gypsum.jpg";
import KitchenExhaust from "../assets/services/KitchenExhaust.jpg";
import Pool from "../assets/services/Pool.jpg";
import Epoxy from "../assets/services/Epoxy.jpg";
export const serviceCategories = [
  {
    id: "mechanical",
    name: "Mechanical & HVAC",
    services: [
      {
        title: "Mechanical Works",
        description:
          "Expert mechanical works, including installation, maintenance, and repair services for efficient system operation.",
        features: [
          "Preventive Maintenance",
          "Emergency Repairs",
          "System Optimization",
        ],
        image: mechanical,
      },
      {
        title: "HVAC Installation and Maintenance",
        description:
          "Comprehensive HVAC solutions including installation, maintenance, and repairs.",
        features: [
          "24/7 Emergency Service",
          "Energy Efficiency Solutions",
          "Regular Maintenance Programs",
        ],
        image: HVAC,
      },
      {
        title: "AC Duct Cleaning",
        description:
          "Professional duct cleaning services to improve air quality and system efficiency.",
        features: [
          "Advanced Cleaning Equipment",
          "Indoor Air Quality Testing",
          "Complete Duct Inspection",
        ],
        image: ACDUCT,
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing & Water Services",
    services: [
      {
        title: "Plumbing Works",
        description:
          "Complete plumbing solutions for residential and commercial properties.",
        features: ["Leak Detection", "Pipe Installation", "Emergency Repairs"],
        image: Plumbing,
      },
      {
        title: "Drain and Sewer Cleaning",
        description:
          "Professional cleaning services for drains and sewer systems.",
        features: [
          "CCTV Inspection",
          "High-Pressure Cleaning",
          "Preventive Maintenance",
        ],
        image: Drain,
      },
      {
        title: "Water Tank Cleaning & Repairing",
        description:
          "Comprehensive water tank maintenance and repair services.",
        features: [
          "Tank Sanitization",
          "Leak Repair",
          "Preventive Maintenance",
        ],
        image: WaterCleaning,
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical & ELV Systems",
    services: [
      {
        title: "Electrical Works",
        description:
          "Professional electrical services for all types of properties.",
        features: ["Installation", "Maintenance", "Safety Inspections"],
        image: Electrician,
      },
      {
        title: "ELV Systems",
        description: "Extra-low voltage system installation and maintenance.",
        features: [
          "Security Systems",
          "Communication Networks",
          "Building Automation",
        ],
        image: ELV,
      },
    ],
  },
  {
    id: "construction",
    name: "Construction & Renovation",
    services: [
      {
        title: "Villas & Building Contracting",
        description: "Complete contracting services for villas and buildings.",
        features: ["New Construction", "Renovation", "Project Management"],
        image: Villas,
      },
      {
        title: "Waterproofing",
        description: "Professional waterproofing solutions for all structures.",
        features: [
          "Roof Waterproofing",
          "Basement Waterproofing",
          "Quality Materials",
        ],
        image: WaterProofing,
      },
      {
        title: "Concrete Repairing & Crack Injection",
        description: "Expert concrete repair and crack remediation services.",
        features: [
          "Structural Repair",
          "Crack Injection",
          "Surface Preparation",
        ],
        image: ConcreteRepairing,
      },
    ],
  },
  {
    id: "finishing",
    name: "Interior & Finishing",
    services: [
      {
        title: "Tiles Works",
        description: "Professional tile installation and repair services.",
        features: ["Installation", "Repair", "Design Consultation"],
        image: Tiles,
      },
      {
        title: "Building Painting",
        description: "Complete painting services for interior and exterior.",
        features: [
          "Interior Painting",
          "Exterior Painting",
          "Surface Preparation",
        ],
        image: Painting,
      },
      {
        title: "Aluminum & Gypsum Works",
        description: "Professional aluminum and gypsum installation services.",
        features: ["False Ceiling", "Partitions", "Custom Designs"],
        image: Gypsum,
      },
    ],
  },
  {
    id: "specialized",
    name: "Specialized Services",
    services: [
      {
        title: "Kitchen Exhaust Treatment",
        description: "Professional kitchen exhaust cleaning and maintenance.",
        features: ["Deep Cleaning", "Maintenance", "Safety Compliance"],
        image: KitchenExhaust,
      },
      {
        title: "Swimming Pool Works",
        description: "Complete swimming pool construction and maintenance.",
        features: ["Construction", "Maintenance", "Water Treatment"],
        image: Pool,
      },
      {
        title: "Epoxy Floor Coating",
        description: "Professional epoxy floor coating services.",
        features: ["Surface Preparation", "Application", "Finishing"],
        image: Epoxy,
      },
    ],
  },
];

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import CountUp from "react-countup";

// Import the map components dynamically to avoid SSR issues
const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false }
);

const Geographies = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geographies),
  { ssr: false }
);

const Geography = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geography),
  { ssr: false }
);

// Partner countries data
const partnerCountries = [
  "USA",
  "Canada",
  "United Kingdom",
  "France",
  "Germany",
  "Spain",
  "Russia",
  "China",
  "Japan",
  "South Korea",
  "Australia",
  "India",
];

// Countries highlighted in red on the map (country codes)
// ISO 3-letter codes for countries we want to highlight
const highlightedCountryCodes = ["USA", "FRA", "JPN", "KOR", "MYS", "TWN", "IND"];

// Country names (as present in the TopoJSON) for fallback highlighting
const highlightedCountryNames = [
  "United States of America",
  "France",
  "Japan",
  "South Korea",
  "Malaysia",
  "Taiwan",
  "India"
];

const StatCard = ({ count, title, color = "text-primary" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <CountUp
        className={`text-4xl font-bold ${color}`}
        start={0}
        end={count}
        duration={2.5}
        enableScrollSpy
      />
      <p className="text-gray-600 text-sm">{title}</p>
    </motion.div>
  );
};

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <section className="pt-16 pb-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Global Reach
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our expanding network of international academic
            partnerships across the globe.
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
          onMouseMove={(e) => {
            setTooltipPosition({ x: e.clientX, y: e.clientY });
          }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 120,
            }}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isoA3 =
                    geo.properties &&
                    (geo.properties.ISO_A3 || geo.properties.iso_a3);
                  const name = geo.properties && geo.properties.name;
                  const isHighlighted =
                    highlightedCountryCodes.includes(isoA3) ||
                    highlightedCountryNames.includes(name);
                  // Skip Antarctica
                  if (isoA3 === "ATA" || name === "Antarctica") return null;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        if (isHighlighted) {
                          setTooltipContent(geo.properties.name);
                        }
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: isHighlighted ? "#d9534f" : "#D6D6DA",
                          outline: "none",
                        },
                        hover: {
                          fill: isHighlighted ? "#c9302c" : "#D6D6DA",
                          outline: "none",
                        },
                        pressed: {
                          fill: isHighlighted ? "#c9302c" : "#D6D6DA",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Tooltip */}
          {tooltipContent && (
            <div
              className="absolute bg-black text-white px-2 py-1 rounded text-sm pointer-events-none z-50"
              style={{
                left: `${tooltipPosition.x + 15}px`,
                top: `${tooltipPosition.y - 35}px`,
                transform: "translate(-50%, -100%)",
              }}
            >
              {tooltipContent}
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-2">
          <StatCard
            count={6}
            title="Partner Countries"
            color="text-purple-600"
          />
          <StatCard
            count={25}
            title="Exchange Students"
            color="text-blue-600"
          />
          <StatCard count={12} title="MOUs Signed" color="text-red-600" />
        </div>
      </div>
    </section>
  );
};

export default WorldMap;

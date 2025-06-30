'use client';
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// A lightweight wrapper component for react-simple-maps that is only rendered on the client.
// It highlights the countries passed in the `highlightedCountries` prop (array of ISO-3 codes)
// and forwards mouse-enter/leave events back to the parent so it can show a tooltip.

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const MapChart = ({ highlightedCountries = [], onCountryEnter, onCountryLeave }) => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 120 }}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = highlightedCountries.includes(geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  if (isHighlighted && onCountryEnter) {
                    onCountryEnter(geo.properties.name);
                  }
                }}
                onMouseLeave={() => {
                  if (onCountryLeave) {
                    onCountryLeave();
                  }
                }}
                style={{
                  default: {
                    fill: isHighlighted ? '#d9534f' : '#D6D6DA',
                    outline: 'none',
                  },
                  hover: {
                    fill: isHighlighted ? '#c9302c' : '#D6D6DA',
                    outline: 'none',
                  },
                  pressed: {
                    fill: isHighlighted ? '#c9302c' : '#D6D6DA',
                    outline: 'none',
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;

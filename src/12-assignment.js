export function processRailwayPNR(pnrData) {

  // -------- Validation --------
  if (!pnrData || typeof pnrData !== "object") return null;

  const { pnr, train, classBooked, passengers } = pnrData;

  if (!pnr || typeof pnr !== "string") return null;
  if (!/^\d{10}$/.test(pnr)) return null;

  if (!train || typeof train !== "object") return null;

  if (!Array.isArray(passengers) || passengers.length === 0) return null;


  // -------- PNR formatting --------
  const pnrFormatted = `${pnr.slice(0,3)}-${pnr.slice(3,6)}-${pnr.slice(6)}`;


  // -------- Train info --------
  const trainInfo =
    `Train: ${train.number} - ${train.name} | ${train.from} → ${train.to} | Class: ${classBooked}`;


  // -------- Passenger processing --------
  let confirmed = 0;
  let waiting = 0;
  let cancelled = 0;
  let rac = 0;

  const processedPassengers = passengers.map(p => {

    let statusLabel = "";
    let isConfirmed = false;

    if (p.current === "CAN") {
      statusLabel = "CANCELLED";
      cancelled++;
    }
    else if (p.current.startsWith("WL")) {
      statusLabel = "WAITING";
      waiting++;
    }
    else if (p.current.startsWith("RAC")) {
      statusLabel = "RAC";
      rac++;
    }
    else {
      statusLabel = "CONFIRMED";
      isConfirmed = true;
      confirmed++;
    }

    const formattedName =
      `${p.name.padEnd(20)}(${p.age}/${p.gender})`;

    return {
      formattedName,
      bookingStatus: p.booking,
      currentStatus: p.current,
      statusLabel,
      isConfirmed
    };

  });


  // -------- Summary --------
  const totalPassengers = passengers.length;

  const summary = {
    totalPassengers,
    confirmed,
    waiting,
    cancelled,
    rac,
    allConfirmed: confirmed === totalPassengers,
    anyWaiting: waiting > 0
  };


  // -------- Chart prepared logic --------
  const activePassengers = totalPassengers - cancelled;

  let chartPrepared = false;

  if (waiting === 0 && rac === 0 && confirmed === activePassengers) {
    chartPrepared = true;
  }


  // -------- Final object --------
  return {
    pnrFormatted,
    trainInfo,
    passengers: processedPassengers,
    summary,
    chartPrepared
  };
}
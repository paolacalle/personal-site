
// helper code

// Safari does not support "Month YYYY" date strings (e.g. "September 2025") in new Date().
// This map allows us to manually parse that format in a cross-browser-safe way.
const MONTH_MAP = {
    January: 0, February: 1, March: 2, April: 3,
    May: 4, June: 5, July: 6, August: 7,
    September: 8, October: 9, November: 10, December: 11,
};

// Parses "Month YYYY" strings safely across all browsers, including Safari.
// Falls back to native Date parsing for other formats.
function parseDate(dateString) {
    if (!dateString || dateString === "Present") return null;

    const parts = dateString.trim().split(/\s+/);
    if (parts.length === 2) {
        const month = MONTH_MAP[parts[0]];
        const year = parseInt(parts[1], 10);
        if (month !== undefined && !Number.isNaN(year)) {
            return new Date(year, month, 1);
        }
    }

    // fallback for ISO or other unambiguous formats
    return new Date(dateString);
}

export function formatDate(dateString) {
    // handle explicit "Present" sentinel
    if (dateString === "Present") return "Present";

    // handle missing/empty dates separately
    if (!dateString) return "—";

    const date = parseDate(dateString);

    // guard against invalid Date results
    if (!date || Number.isNaN(date.getTime())) return "—";

    // parse date and format as "MMM YYYY"
    return date.toLocaleString(
        "default",
        { month: "short", year: "numeric" }
    );
}


export function getTimeValue(dateStr) {
    // if present, return current timestamp, else return timestamp of the date
    if (dateStr === "Present") return Date.now();
    const date = parseDate(dateStr);
    return date ? date.getTime() : NaN;
}

export function sortJourneyItems(items) {
    return [...items].sort((a, b) => {
        const aStart = getTimeValue(a.startDate);
        const bStart = getTimeValue(b.startDate);

        // return the difference of start times (newest first)
        if (aStart !== bStart) return bStart - aStart;

        const aEnd = getTimeValue(a.endDate);
        const bEnd = getTimeValue(b.endDate);

        // return the difference of end times (newest first)
        return bEnd - aEnd;
    });
}

export function getTimelineBounds(items) {
    // handle empty case
    if (!items.length) {
        return { startDate: null, endDate: null };
    }

    // assumes items are already sorted by start date (newest first)
    // return the start date of the oldest item and end date of the newest item
    return {
        startDate : items[items.length - 1].startDate,
        endDate : items[0].endDate
    }
}

export function getItemPositions(items, startDate, endDate) {
    // handle edge case of missing bounds
    if (!startDate || !endDate) return {};

    const timelineStart = getTimeValue(startDate);
    const timelineEnd = getTimeValue(endDate);

    // difference or 1; prevent division by zero 
    const totalRange = timelineEnd - timelineStart || 1; 


    // the reduce func iterates over each item and calculates 
    // its start and end position as a percentage of the total timeline range,
    // and builds up an object where each key is the item id and the value is an 
    // object with startPercent and endPercent
    return items.reduce((acc, item) => {
        const itemStart = getTimeValue(item.startDate);
        const itemEnd = getTimeValue(item.endDate);

        acc[item.id] = {
            startPercent: ((itemStart - timelineStart) / totalRange) * 100,
            endPercent: ((itemEnd - timelineStart) / totalRange) * 100
        };

        return acc;
    }, {});
}



// helper code 

export function formatDate(dateString) {
    // handle "Present" case
    if (!dateString || dateString === "Present") return "Present";

    // parse date and format as "MMM YYYY"
    return new Date(dateString).toLocaleString(
        "default",
        { month: "short", year: "numeric" }
    );
}


export function getTimeValue(dateStr) {
    // if present, return current timestamp, else return timestamp of the date
    return dateStr === "Present" ? Date.now() : new Date(dateStr).getTime();
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


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
// ??? Round definitions ????????????????????????????????????????????????????????
// imperial: true  ? 5-zone scoring (9,7,5,3,1), no X ring, max arrow = 9
// imperial: false ? 10-zone scoring (X,10..1),   X ring,    max arrow = 10
var ROUND_GROUPS = {
    "WA / Metric Outdoor": {
        "WA 1440 (90m)": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "WA 1440 (70m)": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "WA 900": { ends: 15, arrowsPerEnd: 6, imperial: false },
        "WA 70m": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "WA 60m": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "WA 50m": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "WA Standard Bow": { ends: 18, arrowsPerEnd: 6, imperial: false },
        "Metric I": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "Metric II": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "Metric III": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "Metric IV": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "Metric V": { ends: 24, arrowsPerEnd: 6, imperial: false },
        "Long Metric (Men)": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Long Metric (Women)": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Long Metric I": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Long Metric II": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Long Metric III": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Long Metric IV": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Long Metric V": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Short Metric": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Short Metric II": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Short Metric III": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Short Metric IV": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Short Metric V": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Metric 122-50": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Metric 122-40": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Metric 122-30": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Metric 80-40": { ends: 12, arrowsPerEnd: 6, imperial: false },
        "Metric 80-30": { ends: 12, arrowsPerEnd: 6, imperial: false },
    },
    "Imperial Outdoor": {
        "York": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "100 yds", ends: 12 }, { label: "80 yds", ends: 8 }, { label: "60 yds", ends: 4 }] },
        "Hereford": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "80 yds", ends: 12 }, { label: "60 yds", ends: 8 }, { label: "50 yds", ends: 4 }] },
        "Bristol I": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "80 yds", ends: 12 }, { label: "60 yds", ends: 8 }, { label: "50 yds", ends: 4 }] },
        "Bristol II": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "60 yds", ends: 12 }, { label: "50 yds", ends: 8 }, { label: "40 yds", ends: 4 }] },
        "Bristol III": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "50 yds", ends: 12 }, { label: "40 yds", ends: 8 }, { label: "30 yds", ends: 4 }] },
        "Bristol IV": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "40 yds", ends: 12 }, { label: "30 yds", ends: 8 }, { label: "20 yds", ends: 4 }] },
        "Bristol V": { ends: 24, arrowsPerEnd: 6, imperial: true, distances: [{ label: "30 yds", ends: 12 }, { label: "20 yds", ends: 8 }, { label: "10 yds", ends: 4 }] },
        "St. George": { ends: 18, arrowsPerEnd: 6, imperial: true, distances: [{ label: "100 yds", ends: 6 }, { label: "80 yds", ends: 6 }, { label: "60 yds", ends: 6 }] },
        "Albion": { ends: 18, arrowsPerEnd: 6, imperial: true, distances: [{ label: "80 yds", ends: 6 }, { label: "60 yds", ends: 6 }, { label: "50 yds", ends: 6 }] },
        "Windsor": { ends: 18, arrowsPerEnd: 6, imperial: true, distances: [{ label: "60 yds", ends: 6 }, { label: "50 yds", ends: 6 }, { label: "40 yds", ends: 6 }] },
        "Windsor 50": { ends: 18, arrowsPerEnd: 6, imperial: true, distances: [{ label: "50 yds", ends: 6 }, { label: "40 yds", ends: 6 }, { label: "30 yds", ends: 6 }] },
        "Windsor 40": { ends: 18, arrowsPerEnd: 6, imperial: true, distances: [{ label: "40 yds", ends: 6 }, { label: "30 yds", ends: 6 }, { label: "20 yds", ends: 6 }] },
        "Windsor 30": { ends: 18, arrowsPerEnd: 6, imperial: true, distances: [{ label: "30 yds", ends: 6 }, { label: "20 yds", ends: 6 }, { label: "10 yds", ends: 6 }] },
        "New Western": { ends: 16, arrowsPerEnd: 6, imperial: true, distances: [{ label: "100 yds", ends: 8 }, { label: "80 yds", ends: 8 }] },
        "Long Western": { ends: 16, arrowsPerEnd: 6, imperial: true, distances: [{ label: "80 yds", ends: 8 }, { label: "60 yds", ends: 8 }] },
        "Western": { ends: 16, arrowsPerEnd: 6, imperial: true, distances: [{ label: "60 yds", ends: 8 }, { label: "50 yds", ends: 8 }] },
        "Western 50": { ends: 16, arrowsPerEnd: 6, imperial: true, distances: [{ label: "50 yds", ends: 8 }, { label: "40 yds", ends: 8 }] },
        "Western 40": { ends: 16, arrowsPerEnd: 6, imperial: true, distances: [{ label: "40 yds", ends: 8 }, { label: "30 yds", ends: 8 }] },
        "Western 30": { ends: 16, arrowsPerEnd: 6, imperial: true, distances: [{ label: "30 yds", ends: 8 }, { label: "20 yds", ends: 8 }] },
        "American": { ends: 15, arrowsPerEnd: 6, imperial: true, distances: [{ label: "60 yds", ends: 5 }, { label: "50 yds", ends: 5 }, { label: "40 yds", ends: 5 }] },
        "St. Nicholas": { ends: 14, arrowsPerEnd: 6, imperial: true, distances: [{ label: "40 yds", ends: 8 }, { label: "30 yds", ends: 6 }] },
        "New National": { ends: 12, arrowsPerEnd: 6, imperial: true, distances: [{ label: "100 yds", ends: 8 }, { label: "80 yds", ends: 4 }] },
        "Long National": { ends: 12, arrowsPerEnd: 6, imperial: true, distances: [{ label: "80 yds", ends: 8 }, { label: "60 yds", ends: 4 }] },
        "National": { ends: 12, arrowsPerEnd: 6, imperial: true, distances: [{ label: "60 yds", ends: 8 }, { label: "50 yds", ends: 4 }] },
        "National 50": { ends: 12, arrowsPerEnd: 6, imperial: true, distances: [{ label: "50 yds", ends: 8 }, { label: "40 yds", ends: 4 }] },
        "National 40": { ends: 12, arrowsPerEnd: 6, imperial: true, distances: [{ label: "40 yds", ends: 8 }, { label: "30 yds", ends: 4 }] },
        "National 30": { ends: 12, arrowsPerEnd: 6, imperial: true, distances: [{ label: "30 yds", ends: 8 }, { label: "20 yds", ends: 4 }] },
        "New Warwick": { ends: 8, arrowsPerEnd: 6, imperial: true, distances: [{ label: "100 yds", ends: 4 }, { label: "80 yds", ends: 4 }] },
        "Long Warwick": { ends: 8, arrowsPerEnd: 6, imperial: true, distances: [{ label: "80 yds", ends: 4 }, { label: "60 yds", ends: 4 }] },
        "Warwick": { ends: 8, arrowsPerEnd: 6, imperial: true, distances: [{ label: "60 yds", ends: 4 }, { label: "50 yds", ends: 4 }] },
        "Warwick 50": { ends: 8, arrowsPerEnd: 6, imperial: true, distances: [{ label: "50 yds", ends: 4 }, { label: "40 yds", ends: 4 }] },
        "Warwick 40": { ends: 8, arrowsPerEnd: 6, imperial: true, distances: [{ label: "40 yds", ends: 4 }, { label: "30 yds", ends: 4 }] },
        "Warwick 30": { ends: 8, arrowsPerEnd: 6, imperial: true, distances: [{ label: "30 yds", ends: 4 }, { label: "20 yds", ends: 4 }] },
    },
    "Indoor": {
        "Portsmouth": { ends: 20, arrowsPerEnd: 3, imperial: false },
        "WA 18m": { ends: 20, arrowsPerEnd: 3, imperial: false },
        "WA 25m": { ends: 20, arrowsPerEnd: 3, imperial: false },
        "WA 18/25 Combined": { ends: 40, arrowsPerEnd: 3, imperial: false },
        "Vegas 300": { ends: 20, arrowsPerEnd: 3, imperial: false },
        "Stafford": { ends: 24, arrowsPerEnd: 3, imperial: false },
        "Bray I": { ends: 10, arrowsPerEnd: 3, imperial: false },
        "Bray II": { ends: 10, arrowsPerEnd: 3, imperial: false },
        "Worcester": { ends: 12, arrowsPerEnd: 5, imperial: false, worcester: true },
    },
};
// ??? Handicap calculation (AGB 2023 system) ??????????????????????????????????
// Based on David Lane's model with 2023 updates by Atkinson/Roberts/Tamlyn
// sigma_theta = 1.036^(H+12.9) * 5e-4  (angular group std dev in radians)
// F = 1 + 1.429e-6 * 1.07^(H+4.3) * R^2  (excess dispersion factor)
// sigma_r = R * sigma_theta * F            (group std dev at distance R)
// Expected score computed by integrating over target face zones
// Round handicap data: distances in metres, face sizes in cm, scoring zones
// Each entry: { distances: [m], face: cm, zones: [{r_cm, score}] }
var ROUND_HC_DATA = {
    // ?? METRIC OUTDOOR ??
    "WA 1440 (90m)": { dists: [90, 70, 50, 30], face: [122, 122, 80, 80], arrows: 144, zones10: true },
    "WA 1440 (70m)": { dists: [70, 60, 50, 30], face: [122, 122, 80, 80], arrows: 144, zones10: true },
    "WA 900": { dists: [60, 50, 40], face: [122, 122, 122], arrows: 90, zones10: true },
    "WA 70m": { dists: [70], face: [122], arrows: 72, zones10: true },
    "WA 60m": { dists: [60], face: [122], arrows: 72, zones10: true },
    "WA 50m": { dists: [50], face: [80], arrows: 72, zones10: true },
    "Metric I": { dists: [90, 70, 50, 30], face: [122, 122, 80, 80], arrows: 144, zones10: true },
    "Metric II": { dists: [70, 60, 50, 30], face: [122, 122, 80, 80], arrows: 144, zones10: true },
    "Metric III": { dists: [50, 40, 30, 20], face: [122, 122, 80, 80], arrows: 144, zones10: true },
    "Metric IV": { dists: [30, 20, 15, 10], face: [80, 80, 60, 60], arrows: 144, zones10: true },
    "Metric V": { dists: [15, 10], face: [60, 60], arrows: 144, zones10: true },
    "Long Metric (Men)": { dists: [90, 70], face: [122, 122], arrows: 72, zones10: true },
    "Long Metric (Women)": { dists: [70, 60], face: [122, 122], arrows: 72, zones10: true },
    "Long Metric I": { dists: [70, 60], face: [122, 122], arrows: 72, zones10: true },
    "Long Metric II": { dists: [50, 40], face: [122, 122], arrows: 72, zones10: true },
    "Long Metric III": { dists: [40, 30], face: [122, 122], arrows: 72, zones10: true },
    "Long Metric IV": { dists: [30, 20], face: [80, 80], arrows: 72, zones10: true },
    "Long Metric V": { dists: [20, 15], face: [80, 80], arrows: 72, zones10: true },
    "Short Metric": { dists: [50, 30], face: [122, 122], arrows: 72, zones10: true },
    "Short Metric II": { dists: [40, 20], face: [80, 80], arrows: 72, zones10: true },
    "Short Metric III": { dists: [30, 15], face: [80, 80], arrows: 72, zones10: true },
    "Short Metric IV": { dists: [20, 10], face: [60, 60], arrows: 72, zones10: true },
    "Short Metric V": { dists: [15, 10], face: [40, 40], arrows: 72, zones10: true },
    "Metric 122-50": { dists: [50], face: [122], arrows: 72, zones10: true },
    "Metric 122-40": { dists: [40], face: [122], arrows: 72, zones10: true },
    "Metric 122-30": { dists: [30], face: [122], arrows: 72, zones10: true },
    "Metric 80-40": { dists: [40], face: [80], arrows: 72, zones10: true },
    "Metric 80-30": { dists: [30], face: [80], arrows: 72, zones10: true },
    // ?? IMPERIAL OUTDOOR (converted to metres) ??
    "York": { dists: [91.44, 73.15, 54.86], face: [122, 122, 122], arrows: 144, zones5: true },
    "Hereford": { dists: [73.15, 54.86, 45.72], face: [122, 122, 122], arrows: 144, zones5: true },
    "Bristol I": { dists: [73.15, 54.86, 45.72], face: [122, 122, 122], arrows: 144, zones5: true },
    "Bristol II": { dists: [54.86, 45.72, 36.58], face: [122, 122, 122], arrows: 144, zones5: true },
    "Bristol III": { dists: [45.72, 36.58, 27.43], face: [122, 122, 122], arrows: 144, zones5: true },
    "Bristol IV": { dists: [36.58, 27.43, 18.29], face: [122, 122, 122], arrows: 144, zones5: true },
    "Bristol V": { dists: [27.43, 18.29, 9.14], face: [122, 122, 122], arrows: 144, zones5: true },
    "St. George": { dists: [91.44, 73.15, 54.86], face: [122, 122, 122], arrows: 108, zones5: true },
    "Albion": { dists: [73.15, 54.86, 45.72], face: [122, 122, 122], arrows: 108, zones5: true },
    "Windsor": { dists: [54.86, 45.72, 36.58], face: [122, 122, 122], arrows: 108, zones5: true },
    "Windsor 50": { dists: [45.72, 36.58, 27.43], face: [122, 122, 122], arrows: 108, zones5: true },
    "Windsor 40": { dists: [36.58, 27.43, 18.29], face: [122, 122, 122], arrows: 108, zones5: true },
    "Windsor 30": { dists: [27.43, 18.29, 9.14], face: [122, 122, 122], arrows: 108, zones5: true },
    "New Western": { dists: [91.44, 73.15], face: [122, 122], arrows: 96, zones5: true },
    "Long Western": { dists: [73.15, 54.86], face: [122, 122], arrows: 96, zones5: true },
    "Western": { dists: [54.86, 45.72], face: [122, 122], arrows: 96, zones5: true },
    "Western 50": { dists: [45.72, 36.58], face: [122, 122], arrows: 96, zones5: true },
    "Western 40": { dists: [36.58, 27.43], face: [122, 122], arrows: 96, zones5: true },
    "Western 30": { dists: [27.43, 18.29], face: [122, 122], arrows: 96, zones5: true },
    "American": { dists: [54.86, 45.72, 36.58], face: [122, 122, 122], arrows: 90, zones5: true },
    "St. Nicholas": { dists: [36.58, 27.43], face: [122, 122], arrows: 84, zones5: true },
    "New National": { dists: [91.44, 73.15], face: [122, 122], arrows: 72, zones5: true },
    "Long National": { dists: [73.15, 54.86], face: [122, 122], arrows: 72, zones5: true },
    "National": { dists: [54.86, 45.72], face: [122, 122], arrows: 72, zones5: true },
    "National 50": { dists: [45.72, 36.58], face: [122, 122], arrows: 72, zones5: true },
    "National 40": { dists: [36.58, 27.43], face: [122, 122], arrows: 72, zones5: true },
    "National 30": { dists: [27.43, 18.29], face: [122, 122], arrows: 72, zones5: true },
    "New Warwick": { dists: [91.44, 73.15], face: [122, 122], arrows: 48, zones5: true },
    "Long Warwick": { dists: [73.15, 54.86], face: [122, 122], arrows: 48, zones5: true },
    "Warwick": { dists: [54.86, 45.72], face: [122, 122], arrows: 48, zones5: true },
    "Warwick 50": { dists: [45.72, 36.58], face: [122, 122], arrows: 48, zones5: true },
    "Warwick 40": { dists: [36.58, 27.43], face: [122, 122], arrows: 48, zones5: true },
    "Warwick 30": { dists: [27.43, 18.29], face: [122, 122], arrows: 48, zones5: true },
    // ?? INDOOR ??
    "Portsmouth": { dists: [18.29], face: [60], arrows: 60, indoor: true, zones10: true },
    "WA 18m": { dists: [18], face: [40], arrows: 60, indoor: true, zones10: true },
    "WA 25m": { dists: [25], face: [60], arrows: 60, indoor: true, zones10: true },
    "Vegas 300": { dists: [18], face: [40], arrows: 60, indoor: true, zones10: true },
    "Stafford": { dists: [18.29], face: [91.44], arrows: 72, indoor: true, zones10: true },
    "Bray I": { dists: [20], face: [40], arrows: 30, indoor: true, zones10: true },
    "Bray II": { dists: [25], face: [60], arrows: 30, indoor: true, zones10: true },
    "Worcester": { dists: [18.29], face: [40.64], arrows: 60, indoor: true, worcester: true },
};
// Arrow diameter in metres (standard 18xx = 7.14mm)
var ARROW_DIAM_M = 0.00714;
// Sigma_theta: angular std dev from handicap H
function sigmaTheta(H) {
    return Math.pow(1.036, H + 12.9) * 5e-4;
}
// Excess dispersion factor F
function excessDispersion(H, R) {
    return 1.0 + 1.429e-6 * Math.pow(1.07, H + 4.3) * R * R;
}
// Sigma_r: group std dev at distance R (metres)
function sigmaR(H, R) {
    return R * sigmaTheta(H) * excessDispersion(H, R);
}
// Probability arrow lands within radius r of aim point (2D Gaussian)
function probWithinR(r, sigma) {
    return 1 - Math.exp(-0.5 * (r / sigma) * (r / sigma));
}
// Expected score for one arrow at distance R with handicap H on a given target
// zones: [{r: outer_radius_m, score: number}] ordered innermost to outermost
// Arrow counts as score if its centre lands within (zone_radius + arrow_radius)
function expectedArrowScore(H, R, zones) {
    var sigma = sigmaR(H, R);
    var expectedScore = 0;
    var prevProb = 0;
    // Walk zones innermost to outermost
    for (var i = zones.length - 1; i >= 0; i--) {
        var effectiveR = zones[i].r + ARROW_DIAM_M / 2;
        var prob = probWithinR(effectiveR, sigma);
        expectedScore += zones[i].score * (prob - prevProb);
        prevProb = prob;
    }
    return expectedScore;
}
// Build zone array for a face size in cm, scoring system
function buildZones(faceCm, imperial, worcester) {
    var R = faceCm / 200; // radius in metres
    if (worcester) {
        // 5 equal bands, centre = 5
        return [
            { r: R * 0.20, score: 5 },
            { r: R * 0.40, score: 4 },
            { r: R * 0.60, score: 3 },
            { r: R * 0.80, score: 2 },
            { r: R * 1.00, score: 1 },
        ];
    }
    if (imperial) {
        // 5-zone: each band = 20% of radius, gold=9
        return [
            { r: R * 0.20, score: 9 },
            { r: R * 0.40, score: 7 },
            { r: R * 0.60, score: 5 },
            { r: R * 0.80, score: 3 },
            { r: R * 1.00, score: 1 },
        ];
    }
    // 10-zone: each ring = 10% of radius
    return [
        { r: R * 0.05, score: 10 }, // X counts as 10
        { r: R * 0.10, score: 10 },
        { r: R * 0.20, score: 9 },
        { r: R * 0.30, score: 8 },
        { r: R * 0.40, score: 7 },
        { r: R * 0.50, score: 6 },
        { r: R * 0.60, score: 5 },
        { r: R * 0.70, score: 4 },
        { r: R * 0.80, score: 3 },
        { r: R * 0.90, score: 2 },
        { r: R * 1.00, score: 1 },
    ];
}
// Expected total score for a round at handicap H
function expectedRoundScore(roundName, H) {
    var hcData = ROUND_HC_DATA[roundName];
    if (!hcData)
        return null;
    var round = ROUNDS[roundName];
    if (!round)
        return null;
    var totalArrows = round.ends * round.arrowsPerEnd;
    var arrowsPerDist = Math.floor(totalArrows / hcData.dists.length);
    var expectedTotal = 0;
    for (var di = 0; di < hcData.dists.length; di++) {
        var R = hcData.dists[di];
        var faceCm = hcData.face[di] || hcData.face[0];
        var zones = buildZones(faceCm, !!hcData.zones5, !!hcData.worcester);
        var arrows = di === hcData.dists.length - 1
            ? (totalArrows - arrowsPerDist * (hcData.dists.length - 1))
            : arrowsPerDist;
        expectedTotal += arrows * expectedArrowScore(H, R, zones);
    }
    return expectedTotal;
}
// Find handicap for a score on a round (binary search H from 0 to 150)
function calculateHandicap(roundName, score) {
    var hcData = ROUND_HC_DATA[roundName];
    if (!hcData)
        return null;
    // Binary search: find H where expectedRoundScore(H) = score
    var lo = 0, hi = 150;
    for (var iter = 0; iter < 30; iter++) {
        var mid = (lo + hi) / 2;
        var s = expectedRoundScore(roundName, mid);
        if (s > score)
            lo = mid;
        else
            hi = mid;
    }
    return Math.floor((lo + hi) / 2); // round down per AGB rules
}
// Update running handicap per AGB rules:
// Initial: average of first 3 handicaps, rounded down
// Season: if new score is 2+ handicap points better, new HC = floor((current + new) / 2)
// HC never rises during a season
function updateHandicap(currentHC, newHC) {
    if (currentHC === null)
        return newHC;
    if (newHC <= currentHC - 2) {
        return Math.floor((currentHC + newHC) / 2);
    }
    return currentHC; // no improvement
}
// ??? Scoring helpers ??????????????????????????????????????????????????????????
var IMPERIAL_VALUES = ["9", "7", "5", "3", "1", "M"];
var METRIC_VALUES = ["X", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "M"];
var WORCESTER_VALUES = ["5", "4", "3", "2", "1", "M"];
var getArrowValues = function (roundName) {
    var _a;
    if (roundName === "Worcester")
        return WORCESTER_VALUES;
    return ((_a = ROUNDS[roundName]) === null || _a === void 0 ? void 0 : _a.imperial) ? IMPERIAL_VALUES : METRIC_VALUES;
};
var arrowToScore = function (v) {
    if (v === "X")
        return 10;
    if (v === "M")
        return 0;
    return parseInt(v, 10);
};
var maxRoundScore = function (roundName) {
    var r = ROUNDS[roundName];
    if (roundName === "Worcester")
        return r.ends * r.arrowsPerEnd * 5;
    return r.ends * r.arrowsPerEnd * (r.imperial ? 9 : 10);
};
// ??? Colours ?????????????????????????????????????????????????????????????????
var arrowBg = function (v, isImperial) {
    if (v === "M")
        return "#2a2d38";
    var n = arrowToScore(v);
    if (isImperial) {
        if (n === 9)
            return "#ffd700";
        if (n === 7)
            return "#e74c3c";
        if (n === 5)
            return "#3498db";
        if (n === 3)
            return "#333";
        if (n === 1)
            return "#e8e8e0";
    }
    else {
        if (v === "X")
            return "#fff176";
        if (n === 10)
            return "#ffd700";
        if (n === 9)
            return "#f5c800";
        if (n >= 7)
            return "#e74c3c";
        if (n >= 5)
            return "#3498db";
        if (n >= 3)
            return "#333";
        if (n >= 1)
            return "#e8e8e0";
    }
    return "#444";
};
var arrowText = function (v, isImperial) {
    if (!v || v === "M")
        return "#666";
    var n = arrowToScore(v);
    if (isImperial) {
        return (n === 9 || n === 1) ? "#1a1a1a" : "#fff";
    }
    else {
        if (v === "X" || n >= 9)
            return "#1a1a1a";
        if (n >= 3)
            return "#fff";
        return "#1a1a1a";
    }
};
// ??? Persistence ?????????????????????????????????????????????????????????????
var STORAGE_KEY = "archery_history_v2";
var loadHistory = function () { try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
catch (_a) {
    return [];
} };
var saveHistory = function (h) { try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
}
catch (_a) { } };
var SIGHTS_KEY = "archery_sights_v1";
var loadSights = function () { try {
    return JSON.parse(localStorage.getItem(SIGHTS_KEY)) || [];
}
catch (_a) {
    return [];
} };
var saveSights = function (s) { try {
    localStorage.setItem(SIGHTS_KEY, JSON.stringify(s));
}
catch (_a) { } };
var IMPERIAL_DISTANCES = ["10 yds", "20 yds", "30 yds", "40 yds", "50 yds", "60 yds", "80 yds", "100 yds"];
var METRIC_DISTANCES = ["18 m", "20 m", "25 m", "30 m", "40 m", "50 m", "60 m", "70 m", "80 m", "90 m"];
var ALL_DISTANCES = __spreadArray(__spreadArray([], __read(IMPERIAL_DISTANCES), false), __read(METRIC_DISTANCES), false);
// ??? Target Face Component ????????????????????????????????????????????????????
function TargetFace(_a) {
    var isImperial = _a.isImperial, isWorcester = _a.isWorcester, disabled = _a.disabled, onScore = _a.onScore, onHit = _a.onHit, onUndo = _a.onUndo, _b = _a.arrows, arrows = _b === void 0 ? [] : _b, readOnlyHits = _a.readOnlyHits;
    var _c = __read(useState([]), 2), hits = _c[0], setHits = _c[1];
    var _d = __read(useState(null), 2), lastHit = _d[0], setLastHit = _d[1];
    var _e = __read(useState(1.4), 2), zoom = _e[0], setZoom = _e[1];
    var _f = __read(useState({ x: 0, y: 0 }), 2), pan = _f[0], setPan = _f[1];
    var pinchRef = useRef(null);
    var dragRef = useRef(null);
    var containerRef = useRef(null);
    // In read-only mode, display the stored hits directly
    var displayHits = readOnlyHits || hits;
    // Sync hits count with arrows (handles undo)
    useEffect(function () {
        setHits(function (prev) { return prev.slice(0, arrows.length); });
    }, [arrows.length]);
    // High-res viewBox
    // Zone fractions are relative to the COLOURED face radius (black outer = 1.0).
    // White zones (1+2) render as the white square background ? not as rings inside VR.
    // This makes all coloured rings equal width and gold look correct relative to red.
    //
    // Real 122cm face: 10 equal rings of 6.1cm each.
    // Coloured rings start at ring 3 (black). Coloured radius = 8 rings ? 6.1 = 48.8cm.
    // As fractions of coloured radius (48.8cm):
    //   3-ring outer = 48.8/48.8 = 1.000
    //   4-ring outer = 42.7/48.8 = 0.875  ? simplified to equal bands: 1.000
    //   Each colour band (2 rings) = 2/8 = 0.25 of coloured radius
    //   So: black outer=1.0, blue outer=0.75, red outer=0.50, gold outer=0.25
    //   10-ring = 0.125, X = 0.0625
    var VSIZE = 1000;
    var VCX = VSIZE / 2;
    var VCY = VSIZE / 2;
    var VR = 500; // full target fills the square ? each ring = 50 units = 10% of radius
    var SIZE = 300;
    // ?? Zone definitions ??????????????????????????????????????????????????????
    // Ring N outer boundary = (10-N+1) ? 0.1. So ring 1 outer=1.0, ring 9 outer=0.2, ring 10 outer=0.1.
    // Drawing: one filled circle per COLOUR CHANGE, drawn largest?smallest.
    //   White circle r=0.90 (rings 1+2), Black r=0.70, Blue r=0.50, Red r=0.40 (NOT 0.30),
    //   Gold r=0.20 overwrites red ? red visible 0.20?0.40 = two rings wide ?
    // Ring LINES drawn at every 0.10 boundary.
    var colourFills = [
        { r: 1.00, fill: "#ffffff" },
        { r: 0.80, fill: "#1c1c1c" },
        { r: 0.60, fill: "#45c0e8" },
        { r: 0.40, fill: "#e83820" },
        { r: 0.20, fill: "#f5e018" }, // gold fills from here to centre
    ];
    // Ring boundary lines at every scoring boundary
    var ringLines = [
        { r: 1.00, stroke: "#bbb", sw: 2 },
        { r: 0.90, stroke: "#bbb", sw: 1.5 },
        { r: 0.80, stroke: "#000", sw: 3 },
        { r: 0.70, stroke: "#555", sw: 1.5 },
        { r: 0.60, stroke: "#000", sw: 3 },
        { r: 0.50, stroke: "#2090b0", sw: 1.5 },
        { r: 0.40, stroke: "#000", sw: 3 },
        { r: 0.30, stroke: "#b82010", sw: 1.5 },
        { r: 0.20, stroke: "#000", sw: 3 },
        { r: 0.10, stroke: "#c8b800", sw: 1.5 },
        { r: 0.05, stroke: "#c8b800", sw: 1 }, // X outer ? thin, not bold
    ];
    // zones10: r=outer boundary, inner=inner boundary of that ring
    var zones10 = [
        { r: 1.00, inner: 0.90, score: "1" },
        { r: 0.90, inner: 0.80, score: "2" },
        { r: 0.80, inner: 0.70, score: "3" },
        { r: 0.70, inner: 0.60, score: "4" },
        { r: 0.60, inner: 0.50, score: "5" },
        { r: 0.50, inner: 0.40, score: "6" },
        { r: 0.40, inner: 0.30, score: "7" },
        { r: 0.30, inner: 0.20, score: "8" },
        { r: 0.20, inner: 0.10, score: "9" },
        { r: 0.10, inner: 0.05, score: "10" },
        { r: 0.05, inner: 0.025, score: "X" },
    ];
    var whiteR = 0.90;
    // Imperial colour fills ? same structure
    var zones5colours = [
        { r: 1.00, fill: "#ffffff" }, // white (outer=1.0)
        { r: 0.80, fill: "#1c1c1c" }, // black (outer=0.80)
        { r: 0.60, fill: "#45c0e8" }, // blue  (outer=0.60)
        { r: 0.40, fill: "#e83820" }, // red   (outer=0.40)
        { r: 0.20, fill: "#f5e018" }, // gold  (outer=0.20)
    ];
    var imp5boundaries = [1.00, 0.80, 0.60, 0.40, 0.20];
    var imp10rings = [1.00, 0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30, 0.20, 0.10, 0.05];
    var imp5labels = [
        { r: 1.00, inner: 0.80, score: "1" },
        { r: 0.80, inner: 0.60, score: "3" },
        { r: 0.60, inner: 0.40, score: "5" },
        { r: 0.40, inner: 0.20, score: "7" },
        { r: 0.20, inner: 0.00, score: "9" },
    ];
    // Worcester: 5 equal bands each 0.20 of radius. Centre=white (5), 4 black bands (4,3,2,1).
    // Scores 5?1 from centre outward. Black background beyond scoring area.
    // Each band width = 4.064cm on a 20.32cm radius face = exactly 0.20 of radius.
    var zonesWorcester = [
        { r: 1.00, score: "1", fill: "#111111", stroke: "#333", sw: 1 }, // black band 1 (outermost)
        { r: 0.80, score: "2", fill: "#111111", stroke: "#fff", sw: 1 }, // black band 2
        { r: 0.60, score: "3", fill: "#111111", stroke: "#fff", sw: 1 }, // black band 3
        { r: 0.40, score: "4", fill: "#111111", stroke: "#fff", sw: 1 }, // black band 4 (innermost black)
        { r: 0.20, score: "5", fill: "#f0ece0", stroke: "#fff", sw: 1 }, // white centre (scores 5)
    ];
    // Scoring: each zone scores when d <= its OUTER boundary.
    // Array ordered innermost?outermost. Loop finds smallest r that contains the tap.
    var scoringZones = isWorcester
        ? [{ r: 0.20, score: "5" }, { r: 0.40, score: "4" }, { r: 0.60, score: "3" }, { r: 0.80, score: "2" }, { r: 1.00, score: "1" }, { r: 99, score: "M" }]
        : isImperial
            ? [{ r: 0.20, score: "9" }, { r: 0.40, score: "7" }, { r: 0.60, score: "5" }, { r: 0.80, score: "3" }, { r: 1.00, score: "1" }, { r: 99, score: "M" }]
            : [{ r: 0.025, score: "X" }, { r: 0.05, score: "10" }, { r: 0.10, score: "9" }, { r: 0.20, score: "8" }, { r: 0.30, score: "7" }, { r: 0.40, score: "6" }, { r: 0.50, score: "5" }, { r: 0.60, score: "4" }, { r: 0.70, score: "3" }, { r: 0.80, score: "2" }, { r: 0.90, score: "1" }, { r: 99, score: "M" }];
    function scoreAt(vx, vy) {
        var e_1, _a;
        var d = Math.sqrt(Math.pow((vx - VCX), 2) + Math.pow((vy - VCY), 2)) / VR;
        try {
            for (var scoringZones_1 = __values(scoringZones), scoringZones_1_1 = scoringZones_1.next(); !scoringZones_1_1.done; scoringZones_1_1 = scoringZones_1.next()) {
                var zone = scoringZones_1_1.value;
                if (d <= zone.r)
                    return zone.score;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (scoringZones_1_1 && !scoringZones_1_1.done && (_a = scoringZones_1.return)) _a.call(scoringZones_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return "M";
    }
    // ?? Coordinate conversion: DOM client ? viewBox ???????????????????????????
    // Container is SIZE?SIZE square. SVG has viewBox 0 0 VSIZE VSIZE.
    // CSS transform: translate(pan.x, pan.y) scale(zoom), origin = centre.
    function clientToVB(clientX, clientY) {
        var rect = containerRef.current.getBoundingClientRect();
        var dx = clientX - (rect.left + SIZE / 2);
        var dy = clientY - (rect.top + SIZE / 2);
        var vx = ((dx - pan.x) / zoom) / SIZE * VSIZE + VCX;
        var vy = ((dy - pan.y) / zoom) / SIZE * VSIZE + VCY;
        return { vx: vx, vy: vy };
    }
    // ?? Pan clamp ? allow target to move freely within ~1 radius of centre ????
    function clampPan(x, y, z) {
        var limit = SIZE * 0.5 * (z - 1.4) + SIZE * 0.45;
        return { x: Math.max(-limit, Math.min(limit, x)), y: Math.max(-limit, Math.min(limit, y)) };
    }
    // ?? Touch handlers ????????????????????????????????????????????????????????
    function handleTouchStart(e) {
        e.preventDefault();
        if (e.touches.length === 2) {
            dragRef.current = null;
            var dx = e.touches[0].clientX - e.touches[1].clientX;
            var dy = e.touches[0].clientY - e.touches[1].clientY;
            pinchRef.current = { dist: Math.sqrt(dx * dx + dy * dy), zoom: zoom, pan: __assign({}, pan) };
        }
        else if (e.touches.length === 1 && !pinchRef.current) {
            dragRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, pan: __assign({}, pan), moved: false };
        }
    }
    function handleTouchMove(e) {
        e.preventDefault();
        if (e.touches.length === 2 && pinchRef.current) {
            var dx = e.touches[0].clientX - e.touches[1].clientX;
            var dy = e.touches[0].clientY - e.touches[1].clientY;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var newZ = Math.min(20, Math.max(1.4, pinchRef.current.zoom * dist / pinchRef.current.dist));
            if (newZ <= 1.4) {
                setZoom(1.4);
                setPan({ x: 0, y: 0 });
                return;
            }
            var rect = containerRef.current.getBoundingClientRect();
            var midX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left - SIZE / 2;
            var midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top - SIZE / 2;
            var dz = newZ - pinchRef.current.zoom;
            setZoom(newZ);
            setPan(clampPan(pinchRef.current.pan.x + midX * dz * 0.5, pinchRef.current.pan.y + midY * dz * 0.5, newZ));
        }
        else if (e.touches.length === 1 && dragRef.current) {
            var dx = e.touches[0].clientX - dragRef.current.x;
            var dy = e.touches[0].clientY - dragRef.current.y;
            if (Math.abs(dx) > 4 || Math.abs(dy) > 4)
                dragRef.current.moved = true;
            if (dragRef.current.moved)
                setPan(clampPan(dragRef.current.pan.x + dx, dragRef.current.pan.y + dy, zoom));
        }
    }
    function handleTouchEnd(e) {
        e.preventDefault();
        if (e.touches.length < 2)
            pinchRef.current = null;
        if (e.touches.length === 0 && e.changedTouches.length === 1 && !pinchRef.current && dragRef.current && !dragRef.current.moved && !disabled) {
            var t = e.changedTouches[0];
            registerScore(t.clientX, t.clientY);
        }
        if (e.touches.length === 0)
            dragRef.current = null;
    }
    function handleClick(e) {
        if (disabled)
            return;
        registerScore(e.clientX, e.clientY);
    }
    function registerScore(clientX, clientY) {
        var _a = clientToVB(clientX, clientY), vx = _a.vx, vy = _a.vy;
        var score = scoreAt(vx, vy);
        setLastHit({ vx: vx, vy: vy });
        setHits(function (prev) { return __spreadArray(__spreadArray([], __read(prev), false), [{ vx: vx, vy: vy, score: score }], false); });
        setTimeout(function () { return setLastHit(null); }, 500);
        onScore(score);
        if (onHit)
            onHit({ vx: vx, vy: vy, score: score });
    }
    // Sync hits with arrows length (undo support)
    useEffect(function () {
        setHits(function (prev) {
            if (prev.length > arrows.length) {
                if (onUndo)
                    onUndo();
                return prev.slice(0, arrows.length);
            }
            return prev;
        });
    }, [arrows.length]);
    useEffect(function () {
        var el = containerRef.current;
        if (!el)
            return;
        el.addEventListener("touchstart", handleTouchStart, { passive: false });
        el.addEventListener("touchmove", handleTouchMove, { passive: false });
        el.addEventListener("touchend", handleTouchEnd, { passive: false });
        return function () {
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchmove", handleTouchMove);
            el.removeEventListener("touchend", handleTouchEnd);
        };
    });
    // ?? Marker sizing ? fixed physical size regardless of zoom ????????????????
    // MR in viewBox units; dividing by zoom keeps it constant in screen pixels
    var MR_BASE = VR * 0.018; // base marker radius at zoom=1
    var MR = MR_BASE / zoom;
    var markerFill = function (score) {
        if (score === "M")
            return "#666";
        var n = score === "X" ? 10 : parseInt(score, 10);
        if (n >= 9)
            return "#111"; // dark on yellow
        if (n >= 7)
            return "#fff"; // white on red
        if (n >= 5)
            return "#fff"; // white on blue
        if (n >= 3)
            return "#ddd"; // light on black
        return "#555"; // grey on white
    };
    var markerTextFill = function (score) {
        if (score === "M")
            return "#fff";
        var n = score === "X" ? 10 : parseInt(score, 10);
        if (n >= 9)
            return "#f5e018"; // yellow on dark marker
        return markerFill(score) === "#fff" ? "#000" : "#fff";
    };
    return (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 } },
        React.createElement("div", { ref: containerRef, style: {
                width: SIZE, height: SIZE, overflow: "hidden",
                borderRadius: 10,
                background: "#1a1d25",
                cursor: disabled ? "not-allowed" : "crosshair",
                opacity: disabled ? 0.4 : 1,
                touchAction: "none",
                boxShadow: "0 0 0 1px #333, 0 4px 16px rgba(0,0,0,0.5)",
            }, onClick: handleClick },
            React.createElement("svg", { width: SIZE, height: SIZE, viewBox: "0 0 ".concat(VSIZE, " ").concat(VSIZE), style: {
                    transform: "translate(".concat(pan.x, "px,").concat(pan.y, "px) scale(").concat(zoom, ")"),
                    transformOrigin: "center center",
                    display: "block", userSelect: "none", overflow: "visible",
                } },
                React.createElement("rect", { x: 0, y: 0, width: VSIZE, height: VSIZE, fill: "#ffffff" }),
                !isImperial && !isWorcester && React.createElement(React.Fragment, null,
                    colourFills.map(function (z, i) { return (React.createElement("circle", { key: i, cx: VCX, cy: VCY, r: z.r * VR, fill: z.fill, stroke: "none" })); }),
                    ringLines.map(function (z, i) { return (React.createElement("circle", { key: "r".concat(i), cx: VCX, cy: VCY, r: z.r * VR, fill: "none", stroke: z.stroke, strokeWidth: z.sw })); }),
                    zones10.map(function (z, i) {
                        var midR = (z.r + z.inner) / 2 * VR;
                        var ang = -Math.PI / 4;
                        var fs = 28; // uniform size
                        var col = (z.score === "1" || z.score === "2") ? "#aaa"
                            : (z.score === "3" || z.score === "4") ? "#888"
                                : (z.score === "9" || z.score === "10" || z.score === "X") ? "#999"
                                    : "rgba(255,255,255,0.8)";
                        // X goes exactly at centre
                        var tx = z.score === "X" ? VCX : VCX + midR * Math.cos(ang);
                        var ty = z.score === "X" ? VCY + fs * 0.38 : VCY + midR * Math.sin(ang) + fs * 0.38;
                        return (React.createElement("text", { key: "l".concat(i), x: tx, y: ty, textAnchor: "middle", fontSize: fs, fill: col, fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "400", style: { pointerEvents: "none" } }, z.score));
                    })),
                isImperial && !isWorcester && React.createElement(React.Fragment, null,
                    zones5colours.map(function (z, i) { return (React.createElement("circle", { key: i, cx: VCX, cy: VCY, r: z.r * VR, fill: z.fill, stroke: "none" })); }),
                    imp10rings.map(function (rv, i) {
                        var isBoundary = imp5boundaries.includes(rv);
                        return (React.createElement("circle", { key: "g".concat(i), cx: VCX, cy: VCY, r: rv * VR, fill: "none", stroke: isBoundary ? "#000" : "rgba(0,0,0,0.25)", strokeWidth: isBoundary ? 3 : 1.5 }));
                    }),
                    imp5labels.map(function (z, i) {
                        var midR = (z.r + z.inner) / 2 * VR;
                        var ang = -Math.PI / 4;
                        var fs = 28;
                        var col = (z.score === "1") ? "#aaa"
                            : (z.score === "3") ? "#888"
                                : (z.score === "9") ? "#999"
                                    : "rgba(255,255,255,0.8)";
                        return (React.createElement("text", { key: "il".concat(i), x: VCX + midR * Math.cos(ang), y: VCY + midR * Math.sin(ang) + fs * 0.38, textAnchor: "middle", fontSize: fs, fill: col, fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "400", style: { pointerEvents: "none" } }, z.score));
                    })),
                isWorcester && React.createElement(React.Fragment, null,
                    React.createElement("rect", { x: 0, y: 0, width: VSIZE, height: VSIZE, fill: "#111111" }),
                    React.createElement("circle", { cx: VCX, cy: VCY, r: 1.00 * VR, fill: "#111111", stroke: "none" }),
                    React.createElement("circle", { cx: VCX, cy: VCY, r: 0.20 * VR, fill: "#f0ece0", stroke: "none" }),
                    " ",
                    [1.00, 0.80, 0.60, 0.40, 0.20].map(function (r, i) { return (React.createElement("circle", { key: "wl".concat(i), cx: VCX, cy: VCY, r: r * VR, fill: "none", stroke: "#ffffff", strokeWidth: i === 0 ? 1 : 2 })); }),
                    [
                        { r: 1.00, inner: 0.80, score: "1" },
                        { r: 0.80, inner: 0.60, score: "2" },
                        { r: 0.60, inner: 0.40, score: "3" },
                        { r: 0.40, inner: 0.20, score: "4" },
                        { r: 0.20, inner: 0.00, score: "5" },
                    ].map(function (z, i) {
                        var midR = (z.r + z.inner) / 2 * VR;
                        var ang = -Math.PI / 4;
                        var fs = 28;
                        var col = z.score === "5" ? "#555" : "#ccc";
                        return (React.createElement("text", { key: "wsc".concat(i), x: VCX + midR * Math.cos(ang), y: VCY + midR * Math.sin(ang) + fs * 0.38, textAnchor: "middle", fontSize: fs, fill: col, fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "400", style: { pointerEvents: "none" } }, z.score));
                    })),
                displayHits.map(function (h, i) { return (React.createElement("g", { key: i, style: { pointerEvents: "none" } },
                    React.createElement("circle", { cx: h.vx, cy: h.vy, r: MR, fill: markerFill(h.score), stroke: "rgba(0,0,0,0.6)", strokeWidth: MR * 0.15 }),
                    React.createElement("text", { x: h.vx, y: h.vy + MR * 0.38, textAnchor: "middle", fontSize: MR * 1.1, fill: markerTextFill(h.score), fontFamily: "Arial, sans-serif", fontWeight: "700", style: { pointerEvents: "none" } }, h.score))); }),
                lastHit && (React.createElement("circle", { cx: lastHit.vx, cy: lastHit.vy, r: MR * 2.5, fill: "none", stroke: "#c8f55a", strokeWidth: MR * 0.5, opacity: 0.9, style: { pointerEvents: "none" } })))),
        React.createElement("div", { style: { fontSize: 9, color: "#555", letterSpacing: 1.5, marginTop: 6, display: "flex", gap: 14, alignItems: "center" } },
            React.createElement("span", null, "TAP TO SCORE"),
            zoom > 1.5 && React.createElement("span", { style: { color: "#c8f55a", fontWeight: "500" } },
                "\uD83D\uDD0D ",
                zoom.toFixed(1),
                "\u00D7"),
            zoom > 1.5 ? React.createElement("span", null, "DRAG TO PAN") : React.createElement("span", null, "PINCH TO ZOOM"))));
}
// ??? Archer Profile Modal ????????????????????????????????????????????????????
function ProfileModal(_a) {
    var profile = _a.profile, onSave = _a.onSave, onClose = _a.onClose;
    var _b = __read(useState((profile === null || profile === void 0 ? void 0 : profile.name) || ""), 2), name = _b[0], setName = _b[1];
    var _c = __read(useState((profile === null || profile === void 0 ? void 0 : profile.gender) || ""), 2), gender = _c[0], setGender = _c[1];
    var _d = __read(useState((profile === null || profile === void 0 ? void 0 : profile.ageCategory) || ""), 2), ageCategory = _d[0], setAgeCategory = _d[1];
    var _e = __read(useState((profile === null || profile === void 0 ? void 0 : profile.bowType) || ""), 2), bowType = _e[0], setBowType = _e[1];
    var ages = ["Junior (U18)", "Senior (18-49)", "50+"];
    var bows = ["Recurve", "Compound", "Barebow", "Longbow", "Traditional"];
    var genders = ["Male", "Female"];
    var valid = name.trim() && gender && ageCategory && bowType;
    return (React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 300,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 20 } },
        React.createElement("div", { style: { background: "#141720", borderRadius: 16, padding: 24, width: "100%", maxWidth: 380 } },
            React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: 3,
                    color: "#c8f55a", marginBottom: 20 } }, "ARCHER PROFILE"),
            React.createElement("div", { style: { marginBottom: 14 } },
                React.createElement("div", { style: { fontSize: 9, color: "#555", letterSpacing: 1.5, marginBottom: 6 } }, "NAME"),
                React.createElement("input", { value: name, onChange: function (e) { return setName(e.target.value); }, placeholder: "Your name", style: { width: "100%", padding: "10px 12px", background: "#1a1d25", border: "none",
                        borderRadius: 8, color: "#e8e8e0", fontFamily: "'DM Mono',monospace", fontSize: 13 } })),
            React.createElement("div", { style: { marginBottom: 14 } },
                React.createElement("div", { style: { fontSize: 9, color: "#555", letterSpacing: 1.5, marginBottom: 6 } }, "GENDER"),
                React.createElement("div", { style: { display: "flex", gap: 8 } }, genders.map(function (g) { return (React.createElement("button", { key: g, onClick: function () { return setGender(g); }, style: { flex: 1, padding: "10px", border: "none", borderRadius: 8, cursor: "pointer",
                        fontFamily: "'DM Mono',monospace", fontSize: 12,
                        background: gender === g ? "#c8f55a" : "#1a1d25",
                        color: gender === g ? "#0f1117" : "#666" } }, g)); }))),
            React.createElement("div", { style: { marginBottom: 14 } },
                React.createElement("div", { style: { fontSize: 9, color: "#555", letterSpacing: 1.5, marginBottom: 6 } }, "AGE CATEGORY"),
                React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, ages.map(function (a) { return (React.createElement("button", { key: a, onClick: function () { return setAgeCategory(a); }, style: { padding: "10px", border: "none", borderRadius: 8, cursor: "pointer",
                        fontFamily: "'DM Mono',monospace", fontSize: 12, textAlign: "left",
                        background: ageCategory === a ? "#c8f55a" : "#1a1d25",
                        color: ageCategory === a ? "#0f1117" : "#666" } }, a)); }))),
            React.createElement("div", { style: { marginBottom: 20 } },
                React.createElement("div", { style: { fontSize: 9, color: "#555", letterSpacing: 1.5, marginBottom: 6 } }, "BOW TYPE"),
                React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, bows.map(function (b) { return (React.createElement("button", { key: b, onClick: function () { return setBowType(b); }, style: { padding: "8px 12px", border: "none", borderRadius: 8, cursor: "pointer",
                        fontFamily: "'DM Mono',monospace", fontSize: 11,
                        background: bowType === b ? "#c8f55a" : "#1a1d25",
                        color: bowType === b ? "#0f1117" : "#666" } }, b)); }))),
            React.createElement("div", { style: { display: "flex", gap: 10 } },
                React.createElement("button", { onClick: onClose, style: { flex: 1, padding: 12, background: "#1a1d25", color: "#555",
                        border: "none", borderRadius: 8, cursor: "pointer",
                        fontFamily: "'DM Mono',monospace", fontSize: 12 } }, "Cancel"),
                React.createElement("button", { onClick: function () { return valid && onSave({ name: name.trim(), gender: gender, ageCategory: ageCategory, bowType: bowType }); }, disabled: !valid, style: { flex: 2, padding: 12, background: valid ? "#c8f55a" : "#252830",
                        color: valid ? "#0f1117" : "#444", border: "none", borderRadius: 8, cursor: valid ? "pointer" : "default",
                        fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 3 } }, "SAVE")))));
}
// ??? Round row renderer ? defined outside component to avoid compilation issues
function renderRoundRow(r, favourites, history, selectedRound, setSelectedRound, toggleFavourite, startRound, maxRoundScore) {
    var isSelected = selectedRound === r;
    var isFav = favourites.includes(r);
    var selRound = ROUNDS[r];
    if (!selRound)
        return null;
    var selIsImperial = selRound.imperial;
    var selMaxScore = maxRoundScore(r);
    var selPB = history.filter(function (h) { return h.round === r; }).reduce(function (b, h) { return Math.max(b, h.score); }, 0);
    return React.createElement("div", { key: r }, React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, React.createElement("button", {
        onClick: function () { setSelectedRound(isSelected ? null : r); },
        style: { flex: 1, background: isSelected ? "#c8f55a" : "#1a1d25",
            color: isSelected ? "#0f1117" : "#888", border: "none",
            borderRadius: isSelected ? "8px 8px 0 0" : 8, padding: "11px 14px",
            cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 12,
            fontWeight: isSelected ? "500" : "400", textAlign: "left" }
    }, r), React.createElement("button", {
        onClick: function () { toggleFavourite(r); },
        style: { background: "none", border: "none", cursor: "pointer",
            fontSize: 18, padding: "8px 6px", color: isFav ? "#e87070" : "#333", flexShrink: 0 }
    }, isFav ? "?" : "?")), isSelected && React.createElement("div", {
        style: { background: "#141720", borderRadius: "0 0 8px 8px", padding: "12px 14px", marginBottom: 2 }
    }, selIsImperial && React.createElement("div", { style: { fontSize: 10, color: "#c8862a", marginBottom: 8 } }, "5-zone: Gold=9 ? Red=7 ? Blue=5 ? Black=3 ? White=1"), React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" } }, [
        { label: selRound.ends + " ends", color: null },
        { label: selRound.arrowsPerEnd + " arrows/end", color: null },
        { label: "max " + selMaxScore, color: "#c8f55a" },
    ].concat(selPB > 0 ? [{ label: "PB " + selPB, color: "#ffd700" }] : []).map(function (item, i) {
        return React.createElement("span", { key: i,
            style: { fontSize: 10, color: item.color || "#666", background: "#1a1d25", borderRadius: 6, padding: "3px 8px" }
        }, item.label);
    })), React.createElement("button", {
        onClick: startRound,
        style: { width: "100%", padding: "13px", background: "#c8f55a", color: "#0f1117",
            border: "none", borderRadius: 8, cursor: "pointer",
            fontFamily: "'Bebas Neue',sans-serif", fontSize: 19, letterSpacing: 3 }
    }, "START ROUND")));
}
// ??? Main Component ???????????????????????????????????????????????????????????
function ArcheryScorer() {
    var _a;
    var _b = __read(useState("home"), 2), screen = _b[0], setScreen = _b[1];
    var _c = __read(useState("Indoor"), 2), selectedGroup = _c[0], setSelectedGroup = _c[1];
    var _d = __read(useState("WA 18m"), 2), selectedRound = _d[0], setSelectedRound = _d[1];
    var _e = __read(useState([]), 2), ends = _e[0], setEnds = _e[1];
    var _f = __read(useState([]), 2), currentEnd = _f[0], setCurrentEnd = _f[1];
    var _g = __read(useState(loadHistory), 2), history = _g[0], setHistory = _g[1];
    var _h = __read(useState(false), 2), showFinish = _h[0], setShowFinish = _h[1];
    var _j = __read(useState(""), 2), finishNotes = _j[0], setFinishNotes = _j[1];
    var _k = __read(useState(null), 2), viewingRound = _k[0], setViewingRound = _k[1];
    var _l = __read(useState(false), 2), editingNotes = _l[0], setEditingNotes = _l[1];
    var _m = __read(useState(""), 2), draftNotes = _m[0], setDraftNotes = _m[1];
    var _o = __read(useState(false), 2), showTargetFace = _o[0], setShowTargetFace = _o[1];
    // ?? Archer profile ????????????????????????????????????????????????????????
    var _p = __read(useState(function () {
        try {
            return JSON.parse(localStorage.getItem("archery_profile")) || null;
        }
        catch (_a) {
            return null;
        }
    }), 2), profile = _p[0], setProfile = _p[1];
    var _q = __read(useState(false), 2), showProfile = _q[0], setShowProfile = _q[1];
    function saveProfile(p) {
        setProfile(p);
        try {
            localStorage.setItem("archery_profile", JSON.stringify(p));
        }
        catch (_a) { }
    }
    // ?? Running handicap (stored, updated per AGB rules) ?????????????????????
    var _r = __read(useState(function () {
        try {
            return JSON.parse(localStorage.getItem("archery_hc_history")) || [];
        }
        catch (_a) {
            return [];
        }
    }), 2), handicapHistory = _r[0], setHandicapHistory = _r[1];
    function saveHandicapHistory(hh) {
        setHandicapHistory(hh);
        try {
            localStorage.setItem("archery_hc_history", JSON.stringify(hh));
        }
        catch (_a) { }
    }
    // Current handicap = last entry in history (null if < 3 scores)
    var currentHandicap = handicapHistory.length >= 3
        ? handicapHistory[handicapHistory.length - 1].hc
        : null;
    var _s = __read(useState(function () {
        try {
            return localStorage.getItem("archery_default_setup") || null;
        }
        catch (_a) {
            return null;
        }
    }), 2), scoringSetupId = _s[0], setScoringSetupId = _s[1];
    function updateScoringSetup(id) {
        setScoringSetupId(id);
        try {
            if (id)
                localStorage.setItem("archery_default_setup", id);
            else
                localStorage.removeItem("archery_default_setup");
        }
        catch (_a) { }
    }
    var _t = __read(useState("buttons"), 2), inputMode = _t[0], setInputMode = _t[1];
    var _u = __read(useState([]), 2), hitPositions = _u[0], setHitPositions = _u[1];
    var _v = __read(useState("main"), 2), homeStep = _v[0], setHomeStep = _v[1]; // "main" | "env" | "category" | "round"
    var _w = __read(useState(null), 2), homeEnv = _w[0], setHomeEnv = _w[1];
    var _x = __read(useState(function () {
        try {
            return JSON.parse(localStorage.getItem("archery_favourites")) || [];
        }
        catch (_a) {
            return [];
        }
    }), 2), favourites = _x[0], setFavourites = _x[1];
    function toggleFavourite(roundName) {
        var updated = favourites.includes(roundName)
            ? favourites.filter(function (r) { return r !== roundName; })
            : __spreadArray(__spreadArray([], __read(favourites), false), [roundName], false);
        setFavourites(updated);
        try {
            localStorage.setItem("archery_favourites", JSON.stringify(updated));
        }
        catch (_a) { }
    } // [{vx,vy,score}] all hits this round
    // Sight marks
    var _y = __read(useState(loadSights), 2), setups = _y[0], setSetups = _y[1];
    var _z = __read(useState(null), 2), activeSetup = _z[0], setActiveSetup = _z[1];
    var _0 = __read(useState(false), 2), editingSetup = _0[0], setEditingSetup = _0[1];
    var _1 = __read(useState({}), 2), draftSetup = _1[0], setDraftSetup = _1[1];
    var _2 = __read(useState(false), 2), addingMark = _2[0], setAddingMark = _2[1];
    var _3 = __read(useState({ distance: ALL_DISTANCES[0], setting: "" }), 2), draftMark = _3[0], setDraftMark = _3[1];
    var _4 = __read(useState(null), 2), editingMarkId = _4[0], setEditingMarkId = _4[1];
    var activeRound = selectedRound || "WA 18m";
    var round = ROUNDS[activeRound];
    var isImperial = round.imperial;
    var isWorcester = activeRound === "Worcester";
    var arrowVals = getArrowValues(activeRound);
    var maxScore = maxRoundScore(activeRound);
    var totalScore = ends.flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
    var xCount = ends.flat().filter(function (v) { return v === "X"; }).length;
    var goldCount = ends.flat().filter(function (v) { return v === "9"; }).length;
    var currentEndScore = currentEnd.reduce(function (s, v) { return s + arrowToScore(v); }, 0);
    var endNumber = ends.length + 1;
    var allEndsComplete = ends.length === round.ends;
    var arrowsShot = ends.flat().length + currentEnd.length;
    var arrowsRemaining = round.ends * round.arrowsPerEnd - arrowsShot;
    var maxArrow = isWorcester ? 5 : isImperial ? 9 : 10;
    var livePossible = totalScore + currentEndScore + arrowsRemaining * maxArrow;
    // Distance breakdown
    var distances = round.distances || null;
    var distStartEnd = distances
        ? distances.reduce(function (acc, d, i) { acc.push(i === 0 ? 0 : acc[i - 1] + distances[i - 1].ends); return acc; }, [])
        : [];
    var currentDistIndex = (function () {
        if (!distances)
            return null;
        var e = 0;
        for (var d = 0; d < distances.length; d++) {
            e += distances[d].ends;
            if (ends.length < e)
                return d;
        }
        return distances.length - 1;
    })();
    var scoringSetup = setups.find(function (s) { return s.id === scoringSetupId; }) || null;
    var getSightMark = function (distLabel) { return scoringSetup ? (scoringSetup.marks.find(function (m) { return m.distance === distLabel; }) || null) : null; };
    // Auto-select first setup if we have setups but none selected
    useEffect(function () {
        if (setups.length > 0 && !scoringSetupId) {
            updateScoringSetup(setups[0].id);
        }
    }, [setups.length]);
    var distScore = function (di) {
        if (!distances)
            return 0;
        return ends.slice(distStartEnd[di], distStartEnd[di] + distances[di].ends).flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
    };
    var distArrows = function (di) { return distances ? distances[di].ends * round.arrowsPerEnd : 0; };
    var personalBest = history
        .filter(function (h) { return h.round === activeRound; })
        .reduce(function (best, h) { return Math.max(best, h.score); }, 0);
    function selectGroup(g) {
        setSelectedGroup(g);
        setSelectedRound(null);
    }
    var _5 = __read(useState(false), 2), showSightModal = _5[0], setShowSightModal = _5[1];
    var _6 = __read(useState(null), 2), sightModalDist = _6[0], setSightModalDist = _6[1];
    function addArrow(val) {
        if (currentEnd.length >= round.arrowsPerEnd)
            return;
        var newEnd = __spreadArray(__spreadArray([], __read(currentEnd), false), [val], false);
        setCurrentEnd(newEnd);
        // Auto-submit when last arrow entered
        if (newEnd.length === round.arrowsPerEnd) {
            var sorted = __spreadArray([], __read(newEnd), false).sort(function (a, b) { return arrowToScore(b) - arrowToScore(a); });
            var newEnds = __spreadArray(__spreadArray([], __read(ends), false), [sorted], false);
            setEnds(newEnds);
            setCurrentEnd([]);
            if (newEnds.length === round.ends) {
                setShowFinish(true);
            }
            else if (distances) {
                // Check if this end completes a distance ? if so, show sight modal
                for (var di = 0; di < distances.length - 1; di++) {
                    var distEnd = distStartEnd[di] + distances[di].ends;
                    if (newEnds.length === distEnd) {
                        setSightModalDist(distances[di + 1]);
                        setShowSightModal(true);
                        break;
                    }
                }
            }
        }
    }
    function removeLastArrow() {
        setCurrentEnd(function (prev) { return prev.slice(0, -1); });
    }
    function submitEnd() {
        if (currentEnd.length !== round.arrowsPerEnd)
            return;
        var sorted = __spreadArray([], __read(currentEnd), false).sort(function (a, b) { return arrowToScore(b) - arrowToScore(a); });
        var newEnds = __spreadArray(__spreadArray([], __read(ends), false), [sorted], false);
        setEnds(newEnds);
        setCurrentEnd([]);
        if (newEnds.length === round.ends)
            setShowFinish(true);
    }
    function finishRound() {
        var score = ends.flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
        var roundHC = calculateHandicap(activeRound, score);
        // Update running handicap history per AGB rules
        var newHHEntry = { round: activeRound, score: score, hc: roundHC, date: new Date().toLocaleDateString("en-GB") };
        var newHH = __spreadArray(__spreadArray([], __read(handicapHistory), false), [newHHEntry], false);
        // After first 3 scores, apply rolling update rule
        if (newHH.length >= 3) {
            var prevHC = newHH.length === 3
                ? Math.floor((newHH[0].hc + newHH[1].hc + newHH[2].hc) / 3) // initial HC = avg of first 3
                : newHH[newHH.length - 2].runningHC;
            var updatedHC = newHH.length === 3
                ? Math.floor((newHH[0].hc + newHH[1].hc + newHH[2].hc) / 3)
                : updateHandicap(prevHC, roundHC);
            newHHEntry.runningHC = updatedHC;
        }
        saveHandicapHistory(newHH);
        var entry = {
            id: Date.now(),
            round: activeRound,
            imperial: isImperial,
            score: score,
            maxPossible: maxScore,
            xs: ends.flat().filter(function (v) { return v === "X"; }).length,
            golds: ends.flat().filter(function (v) { return v === "9"; }).length,
            date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
            ends: ends,
            notes: finishNotes.trim(),
            hitPositions: hitPositions,
            handicap: roundHC,
        };
        var newHistory = __spreadArray([entry], __read(history), false);
        setHistory(newHistory);
        saveHistory(newHistory);
        setEnds([]);
        setCurrentEnd([]);
        setHitPositions([]);
        setShowFinish(false);
        setFinishNotes("");
        setScreen("home");
    }
    function startRound() {
        setEnds([]);
        setCurrentEnd([]);
        setHitPositions([]);
        setShowFinish(false);
        setShowSightModal(false);
        setSightModalDist(null);
        setScreen("scoring");
    }
    // ??? Sight marks helpers ??????????????????????????????????????????????????
    function saveSetups(updated) { setSetups(updated); saveSights(updated); }
    function createSetup() {
        var s = { id: Date.now(), name: "New Setup", poundage: "", arrowType: "", notes: "", marks: [] };
        saveSetups(__spreadArray(__spreadArray([], __read(setups), false), [s], false));
        setActiveSetup(s.id);
        setDraftSetup({ name: s.name, poundage: "", arrowType: "", notes: "" });
        setEditingSetup(true);
    }
    function updateSetupMeta() {
        saveSetups(setups.map(function (s) { return s.id === activeSetup ? __assign(__assign({}, s), draftSetup) : s; }));
        setEditingSetup(false);
    }
    function deleteSetup(id) {
        saveSetups(setups.filter(function (s) { return s.id !== id; }));
        setActiveSetup(null);
    }
    function addMark() {
        if (!draftMark.setting.trim())
            return;
        var mark = { id: Date.now(), distance: draftMark.distance, setting: draftMark.setting.trim() };
        saveSetups(setups.map(function (s) { return s.id === activeSetup ? __assign(__assign({}, s), { marks: __spreadArray(__spreadArray([], __read(s.marks), false), [mark], false) }) : s; }));
        setDraftMark({ distance: draftMark.distance, setting: "" });
        setAddingMark(false);
    }
    function updateMark(markId, setting) {
        saveSetups(setups.map(function (s) { return s.id === activeSetup
            ? __assign(__assign({}, s), { marks: s.marks.map(function (m) { return m.id === markId ? __assign(__assign({}, m), { setting: setting }) : m; }) }) : s; }));
    }
    function deleteMark(markId) {
        saveSetups(setups.map(function (s) { return s.id === activeSetup
            ? __assign(__assign({}, s), { marks: s.marks.filter(function (m) { return m.id !== markId; }) }) : s; }));
    }
    var currentSetup = setups.find(function (s) { return s.id === activeSetup; });
    // ??? Render ???????????????????????????????????????????????????????????????
    return (React.createElement("div", { style: { minHeight: "100vh", background: "#0f1117", fontFamily: "'DM Mono','Courier New',monospace", color: "#e8e8e0", display: "flex", flexDirection: "column", alignItems: "center" } },
        React.createElement("style", null, ".abtn{border:none;cursor:pointer;border-radius:6px;font-family:'DM Mono',monospace;font-weight:500;font-size:14px;transition:transform 0.08s,opacity 0.15s;display:flex;align-items:center;justify-content:center;padding:0;}.abtn:active{transform:scale(0.90);}.abtn:disabled{opacity:0.3;cursor:default;}@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"),
        React.createElement("div", { style: { width: "100%", maxWidth: 480, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 20px 0" } },
            React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 26, letterSpacing: 3, color: "#c8f55a" } }, "LINE CUTTERS"),
            React.createElement("div", { style: { display: "flex", gap: 4 } }, [["home", "SCORE"], ["history", "HISTORY"], ["sights", "EQUIPMENT"]].map(function (_a) {
                var _b = __read(_a, 2), s = _b[0], label = _b[1];
                return (React.createElement("button", { key: s, onClick: function () {
                        if (screen !== "scoring") {
                            setScreen(s);
                            setViewingRound(null);
                            setActiveSetup(null);
                            setEditingSetup(false);
                            setAddingMark(false);
                            if (s === "home")
                                setHomeStep("main");
                        }
                    }, style: { background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11, padding: "8px 10px",
                        color: screen === s ? "#c8f55a" : "#555",
                        borderBottom: screen === s ? "2px solid #c8f55a" : "2px solid transparent" } }, label));
            }))),
        React.createElement("div", { style: { width: "100%", maxWidth: 480, padding: "18px 20px 60px", flex: 1 } },
            showProfile && (React.createElement(ProfileModal, { profile: profile, onSave: function (p) { saveProfile(p); setShowProfile(false); }, onClose: function () { return setShowProfile(false); } })),
            screen === "home" && (React.createElement("div", { style: { animation: "fadeUp 0.25s ease" } },
                (ends.length > 0 || currentEnd.length > 0) && (React.createElement("button", { onClick: function () { return setScreen("scoring"); }, style: { width: "100%", padding: 14, marginBottom: 20,
                        background: "#0d2015", color: "#c8f55a",
                        border: "2px solid #2a6a3a", borderRadius: 10,
                        fontFamily: "'Bebas Neue',sans-serif", fontSize: 17, letterSpacing: 2, cursor: "pointer" } },
                    "\u25B6 RESUME ",
                    activeRound,
                    " \u2014 END ",
                    ends.length + 1,
                    "/",
                    round.ends)),
                homeStep === "main" && (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
                    React.createElement("svg", { width: "220", height: "220", viewBox: "0 0 360 360", style: { marginBottom: 28, marginTop: 8 } },
                        React.createElement("circle", { cx: "180", cy: "180", r: "130", fill: "none", stroke: "#c8f55a", "stroke-width": "7" }),
                        React.createElement("circle", { cx: "180", cy: "180", r: "104", fill: "none", stroke: "#c8f55a", "stroke-width": "6" }),
                        React.createElement("circle", { cx: "180", cy: "180", r: "78", fill: "none", stroke: "#c8f55a", "stroke-width": "5.5" }),
                        React.createElement("circle", { cx: "180", cy: "180", r: "52", fill: "none", stroke: "#c8f55a", "stroke-width": "5" }),
                        React.createElement("circle", { cx: "180", cy: "180", r: "26", fill: "none", stroke: "#c8f55a", "stroke-width": "4.5" }),
                        React.createElement("polygon", { points: "193.9,196.1  198.1,191.9  307.9,301.9  312.1,306.1", fill: "#c8f55a" }),
                        React.createElement("polygon", { points: "278.1,271.9  307.1,276.9  307.9,301.9", fill: "#c8f55a" }),
                        React.createElement("polygon", { points: "273.9,276.1  278.9,305.1  312.1,306.1", fill: "#c8f55a" }),
                        React.createElement("line", { x1: "310", y1: "308", x2: "304", y2: "317", stroke: "#c8f55a", "stroke-width": "3", "stroke-linecap": "round" }),
                        React.createElement("line", { x1: "310", y1: "308", x2: "319", y2: "302", stroke: "#c8f55a", "stroke-width": "3", "stroke-linecap": "round" })),
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, width: "100%" } },
                        React.createElement("button", { onClick: function () { return setHomeStep("env"); }, style: { width: "100%", padding: "18px", background: "#c8f55a", color: "#0f1117",
                                border: "none", borderRadius: 12, cursor: "pointer",
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: 4 } }, "SCORE ROUND"),
                        React.createElement("button", { onClick: function () { setScreen("history"); setViewingRound(null); }, style: { width: "100%", padding: "18px", background: "#1a1d25", color: "#e8e8e0",
                                border: "none", borderRadius: 12, cursor: "pointer",
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: 4 } }, "HISTORY"),
                        React.createElement("button", { onClick: function () { setScreen("sights"); setActiveSetup(null); setEditingSetup(false); }, style: { width: "100%", padding: "18px", background: "#1a1d25", color: "#e8e8e0",
                                border: "none", borderRadius: 12, cursor: "pointer",
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: 4 } }, "EQUIPMENT"),
                        React.createElement("button", { onClick: function () { return setShowProfile(true); }, style: { width: "100%", padding: "14px", background: "#1a1d25", color: "#555",
                                border: "none", borderRadius: 12, cursor: "pointer",
                                fontFamily: "'DM Mono',monospace", fontSize: 12 } }, profile ? "".concat(profile.name, " \u00B7 ").concat(profile.bowType, " \u00B7 ").concat(profile.gender, " ").concat(profile.ageCategory) : "? Set Archer Profile")))),
                homeStep === "env" && (React.createElement("div", null,
                    React.createElement("button", { onClick: function () { return setHomeStep("main"); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11, padding: "0 0 18px 0" } }, "\u2190 BACK"),
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, [
                        ["outdoor", "?  OUTDOOR"],
                        ["indoor", "?  INDOOR"],
                        ["favourites", "?  FAVOURITES"],
                    ].map(function (_a) {
                        var _b = __read(_a, 2), env = _b[0], label = _b[1];
                        return (React.createElement("button", { key: env, onClick: function () {
                                if (env === "favourites") {
                                    setHomeStep("favourites");
                                }
                                else {
                                    setHomeEnv(env);
                                    setSelectedRound(null);
                                    setHomeStep("category");
                                }
                            }, style: { width: "100%", padding: "20px", border: "none", borderRadius: 12, cursor: "pointer",
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 3,
                                background: "#1a1d25", color: env === "favourites" ? "#e87070" : "#e8e8e0" } },
                            label,
                            env === "favourites" && favourites.length > 0 && (React.createElement("span", { style: { fontSize: 12, fontFamily: "'DM Mono',monospace", marginLeft: 8, color: "#666" } },
                                "(",
                                favourites.length,
                                ")"))));
                    })))),
                homeStep === "favourites" && (React.createElement("div", null,
                    React.createElement("button", { onClick: function () { return setHomeStep("env"); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11, padding: "0 0 14px 0" } }, "\u2190 BACK"),
                    favourites.length === 0 ? (React.createElement("div", { style: { textAlign: "center", color: "#444", fontSize: 13, marginTop: 40 } },
                        React.createElement("div", { style: { fontSize: 32, marginBottom: 12 } }, "\u2661"),
                        "No favourites yet. Add rounds using the \u2661 button.",
                        React.createElement("div", { style: { fontSize: 11, marginTop: 8, color: "#444" } }, "Hold any round to add it."))) : (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, favourites.map(function (r) { return renderRoundRow(r, favourites, history, selectedRound, setSelectedRound, toggleFavourite, startRound, maxRoundScore); }))))),
                homeStep === "category" && (React.createElement("div", null,
                    React.createElement("button", { onClick: function () { setHomeStep("env"); setSelectedRound(null); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11, padding: "0 0 16px 0" } }, "\u2190 BACK"),
                    homeEnv === "outdoor" ? (React.createElement("div", { style: { display: "flex", gap: 10 } }, [["WA / Metric Outdoor", "METRIC"], ["Imperial Outdoor", "IMPERIAL"]].map(function (_a) {
                        var _b = __read(_a, 2), group = _b[0], label = _b[1];
                        return (React.createElement("button", { key: group, onClick: function () { selectGroup(group); setSelectedRound(null); setHomeStep("round"); }, style: { flex: 1, padding: "28px 10px", border: "none", borderRadius: 12, cursor: "pointer",
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, letterSpacing: 3,
                                background: "#1a1d25", color: "#e8e8e0" } }, label));
                    }))) : (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, Object.keys(ROUND_GROUPS["Indoor"]).map(function (r) { return renderRoundRow(r, favourites, history, selectedRound, setSelectedRound, toggleFavourite, startRound, maxRoundScore); }))))),
                homeStep === "round" && (React.createElement("div", null,
                    React.createElement("button", { onClick: function () { setHomeStep(homeEnv === "indoor" ? "env" : "category"); setSelectedRound(null); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11, padding: "0 0 14px 0" } }, "\u2190 BACK"),
                    setups.length > 0 && (React.createElement("div", { style: { marginBottom: 14, background: "#1a1d25", borderRadius: 10, padding: "12px 14px" } },
                        React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 8 } }, "SIGHT MARKS SETUP"),
                        scoringSetupId && (React.createElement("div", { style: { fontSize: 11, color: "#c8f55a", marginBottom: 8 } },
                            "\u2713 Using: ",
                            React.createElement("strong", null, (_a = setups.find(function (s) { return s.id === scoringSetupId; })) === null || _a === void 0 ? void 0 : _a.name))),
                        !scoringSetupId && (React.createElement("div", { style: { fontSize: 11, color: "#c8862a", marginBottom: 8 } }, "\u26A0 No setup selected")),
                        React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } },
                            React.createElement("button", { onClick: function () { return updateScoringSetup(null); }, style: { padding: "6px 11px", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10,
                                    background: scoringSetupId === null ? "#2a2d38" : "#141720",
                                    color: scoringSetupId === null ? "#e8e8e0" : "#444" } }, "None"),
                            setups.map(function (s) { return (React.createElement("button", { key: s.id, onClick: function () { return updateScoringSetup(s.id); }, style: { padding: "6px 11px", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10,
                                    background: scoringSetupId === s.id ? "#c8f55a" : "#141720",
                                    color: scoringSetupId === s.id ? "#0f1117" : "#888",
                                    fontWeight: scoringSetupId === s.id ? "600" : "400" } }, s.name)); })))),
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, Object.keys(ROUND_GROUPS[selectedGroup]).map(function (r) { return renderRoundRow(r, favourites, history, selectedRound, setSelectedRound, toggleFavourite, startRound, maxRoundScore); })))))),
            screen === "scoring" && (React.createElement("div", { style: { animation: "fadeUp 0.2s ease" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },
                    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                        React.createElement("button", { onClick: function () { return setScreen("home"); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer",
                                fontFamily: "'DM Mono',monospace", fontSize: 11, padding: 0 } }, "\u2190 MENU"),
                        React.createElement("div", { style: { fontSize: 11, color: "#888" } }, activeRound)),
                    React.createElement("div", { style: { fontSize: 9, padding: "3px 9px", borderRadius: 999,
                            background: isImperial ? "#2a1800" : "#001828",
                            color: isImperial ? "#c8862a" : "#4ab3f4",
                            border: "1px solid ".concat(isImperial ? "#5a3a00" : "#0a3a5a") } }, isWorcester ? "WORCESTER 5-ZONE" : isImperial ? "5-ZONE IMPERIAL" : "10-ZONE METRIC")),
                React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 14 } }, [
                    { label: "TOTAL", value: totalScore, sub: "/ ".concat(maxScore), color: "#c8f55a" },
                    { label: "HIGHEST POSSIBLE", value: livePossible, sub: "if perfect now",
                        color: livePossible === maxScore ? "#c8f55a" : "#e8e8e0" },
                    { label: "END ".concat(Math.min(endNumber, round.ends)), value: currentEndScore, sub: "".concat(round.arrowsPerEnd - currentEnd.length, " left") },
                    { label: isImperial ? "GOLDS" : "X COUNT", value: isImperial ? goldCount : xCount, color: "#ffd700" },
                ].map(function (_a) {
                    var label = _a.label, value = _a.value, sub = _a.sub, color = _a.color;
                    return (React.createElement("div", { key: label, style: { flex: 1, background: "#1a1d25", borderRadius: 10, padding: "10px 8px" } },
                        React.createElement("div", { style: { fontSize: 7, color: "#555", letterSpacing: 1.2 } }, label),
                        React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: color || "#e8e8e0", lineHeight: 1 } }, value),
                        sub && React.createElement("div", { style: { fontSize: 8, color: "#444" } }, sub)));
                })),
                React.createElement("div", { style: { marginBottom: 10 } },
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 7 } },
                        "CURRENT END \u2014 ",
                        currentEnd.length,
                        "/",
                        round.arrowsPerEnd),
                    React.createElement("div", { style: { display: "flex", gap: 5 } }, Array.from({ length: round.arrowsPerEnd }).map(function (_, i) {
                        var v = currentEnd[i];
                        return (React.createElement("div", { key: i, style: {
                                flex: 1, height: 40, borderRadius: 6,
                                background: v ? arrowBg(v, isImperial) : "#1a1d25",
                                color: v ? arrowText(v, isImperial) : "#2a2d38",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 13, fontWeight: 500,
                                border: v ? "none" : "1px dashed #252830",
                                transition: "background 0.12s",
                            } }, v || "?"));
                    }))),
                React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 10 } }, [["buttons", "? Numbers"], ["target", "? Target"]].map(function (_a) {
                    var _b = __read(_a, 2), mode = _b[0], label = _b[1];
                    return (React.createElement("button", { key: mode, onClick: function () { return setInputMode(mode); }, style: { flex: 1, padding: "8px", border: "none", borderRadius: 8, cursor: "pointer",
                            fontFamily: "'DM Mono',monospace", fontSize: 11,
                            background: inputMode === mode ? "#c8f55a" : "#1a1d25",
                            color: inputMode === mode ? "#0f1117" : "#555" } }, label));
                })),
                inputMode === "buttons" && (React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 5, marginBottom: 10 } }, arrowVals.map(function (v) { return (React.createElement("button", { key: v, className: "abtn", onClick: function () { return addArrow(v); }, disabled: currentEnd.length >= round.arrowsPerEnd, style: { height: 46, background: arrowBg(v, isImperial), color: arrowText(v, isImperial) } }, v)); }))),
                React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12 } },
                    React.createElement("button", { className: "abtn", onClick: removeLastArrow, disabled: currentEnd.length === 0, style: { flex: 1, height: 44, background: "#1a1d25", color: "#e8e8e0", fontSize: 12 } }, "\u2190 UNDO"),
                    React.createElement("button", { className: "abtn", onClick: submitEnd, disabled: currentEnd.length !== round.arrowsPerEnd || allEndsComplete, style: { flex: 2, height: 44, fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 2,
                            background: currentEnd.length === round.arrowsPerEnd ? "#c8f55a" : "#1a1d25",
                            color: currentEnd.length === round.arrowsPerEnd ? "#0f1117" : "#444" } },
                        "SUBMIT END ",
                        endNumber,
                        "/",
                        round.ends)),
                inputMode === "target" && (React.createElement(TargetFace, { isImperial: isImperial, isWorcester: isWorcester, disabled: currentEnd.length >= round.arrowsPerEnd, onScore: addArrow, onHit: function (hit) { return setHitPositions(function (prev) { return __spreadArray(__spreadArray([], __read(prev), false), [hit], false); }); }, onUndo: function () { return setHitPositions(function (prev) { return prev.slice(0, -1); }); }, arrows: currentEnd })),
                showSightModal && sightModalDist && (React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 20 } },
                    React.createElement("div", { style: { background: "#0d2015", border: "2px solid #2a6a3a", borderRadius: 16, padding: 28, width: "100%", maxWidth: 360 } },
                        React.createElement("div", { style: { fontSize: 9, color: "#4caf70", letterSpacing: 2, marginBottom: 6 } }, "DISTANCE CHANGE"),
                        React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, color: "#e8e8e0", letterSpacing: 3, marginBottom: 20 } },
                            "MOVE TO ",
                            sightModalDist.label),
                        scoringSetup ? (React.createElement("div", { style: { marginBottom: 20 } },
                            React.createElement("div", { style: { fontSize: 9, color: "#4caf70", letterSpacing: 1.5, marginBottom: 10 } },
                                scoringSetup.name,
                                " \u2014 SIGHT MARKS"),
                            (function () {
                                var mark = getSightMark(sightModalDist.label);
                                return mark ? (React.createElement("div", { style: { background: "#0a1a0f", borderRadius: 10, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },
                                    React.createElement("div", { style: { fontSize: 13, color: "#c8f55a" } }, sightModalDist.label),
                                    React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 42, color: "#c8f55a", letterSpacing: 2, lineHeight: 1 } }, mark.setting))) : (React.createElement("div", { style: { background: "#0a1a0f", borderRadius: 10, padding: "14px 18px", marginBottom: 14 } },
                                    React.createElement("div", { style: { fontSize: 11, color: "#2a5a30", fontStyle: "italic" } },
                                        "No mark recorded for ",
                                        sightModalDist.label)));
                            })(),
                            scoringSetup.marks.length > 0 && (React.createElement("div", null,
                                React.createElement("div", { style: { fontSize: 8, color: "#2a5a30", letterSpacing: 1.5, marginBottom: 6 } }, "ALL MARKS"),
                                React.createElement("div", { style: { background: "#0a1a0f", borderRadius: 10, overflow: "hidden" } }, __spreadArray([], __read(scoringSetup.marks), false).sort(function (a, b) {
                                    var ai = a.distance.includes("yds");
                                    var bi = b.distance.includes("yds");
                                    if (ai !== bi)
                                        return ai ? -1 : 1;
                                    return parseInt(a.distance) - parseInt(b.distance);
                                })
                                    .map(function (m, i, arr) { return (React.createElement("div", { key: m.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #0d2015" : "none",
                                        background: m.distance === sightModalDist.label ? "#0f2a18" : "transparent" } },
                                    React.createElement("div", { style: { fontSize: 11, color: m.distance === sightModalDist.label ? "#c8f55a" : "#4caf70" } }, m.distance),
                                    React.createElement("div", { style: { fontSize: 15, fontWeight: 500, color: m.distance === sightModalDist.label ? "#c8f55a" : "#e8e8e0" } }, m.setting))); })))))) : (React.createElement("div", { style: { marginBottom: 20, fontSize: 11, color: "#2a5a30", fontStyle: "italic" } }, "Select a setup on the home screen to see sight marks here.")),
                        React.createElement("button", { onClick: function () { return setShowSightModal(false); }, style: { width: "100%", padding: 14, background: "#c8f55a", color: "#0f1117", border: "none", borderRadius: 10,
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, letterSpacing: 3, cursor: "pointer" } }, "CONTINUE SHOOTING")))),
                ends.length > 0 && (React.createElement("div", null,
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 6 } }, "SCORECARD"),
                    React.createElement("div", { style: { background: "#1a1d25", borderRadius: 10, overflow: "hidden" } }, (function () {
                        var rows = [];
                        if (distances) {
                            distances.forEach(function (dist, di) {
                                var distEndsShot = ends.slice(distStartEnd[di], distStartEnd[di] + dist.ends);
                                var isDistComplete = distEndsShot.length === dist.ends;
                                var isDistStarted = distEndsShot.length > 0;
                                if (isDistStarted || di === currentDistIndex) {
                                    rows.push(React.createElement("div", { key: "dh-".concat(di), style: { padding: "7px 12px", background: "#141720", borderTop: di > 0 ? "2px solid #252830" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" } },
                                        React.createElement("span", { style: { fontSize: 9, color: "#c8862a", letterSpacing: 1.5, fontWeight: 500 } }, dist.label),
                                        React.createElement("span", { style: { fontSize: 9, color: "#444" } },
                                            dist.ends * round.arrowsPerEnd,
                                            " arrows")));
                                }
                                distEndsShot.forEach(function (end, ei) {
                                    var globalIdx = distStartEnd[di] + ei;
                                    var endTotal = end.reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                    var runningTotal = ends.slice(0, globalIdx + 1).flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                    rows.push(React.createElement("div", { key: "e-".concat(globalIdx), style: { display: "flex", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #1f2230" } },
                                        React.createElement("div", { style: { width: 24, color: "#444", fontSize: 9 } },
                                            "E",
                                            globalIdx + 1),
                                        React.createElement("div", { style: { flex: 1, display: "flex", gap: 3, flexWrap: "wrap" } }, end.map(function (v, j) { return (React.createElement("div", { key: j, style: { width: 22, height: 22, borderRadius: 3, background: arrowBg(v, isImperial), color: arrowText(v, isImperial), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 500 } }, v)); })),
                                        React.createElement("div", { style: { width: 26, textAlign: "right", fontSize: 13, color: "#c8f55a" } }, endTotal),
                                        React.createElement("div", { style: { width: 38, textAlign: "right", fontSize: 10, color: "#555" } }, runningTotal)));
                                });
                                if (isDistComplete) {
                                    var dAvg = (distScore(di) / distArrows(di)).toFixed(2);
                                    rows.push(React.createElement("div", { key: "davg-".concat(di), style: { padding: "7px 12px", background: "#0f1117", display: "flex", justifyContent: "space-between", alignItems: "center" } },
                                        React.createElement("span", { style: { fontSize: 9, color: "#555" } },
                                            dist.label,
                                            " total"),
                                        React.createElement("span", { style: { fontSize: 9, color: "#888" } },
                                            "avg ",
                                            React.createElement("span", { style: { color: "#c8f55a", fontSize: 11 } }, dAvg))));
                                }
                            });
                        }
                        else {
                            ends.forEach(function (end, i) {
                                var endTotal = end.reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                var runningTotal = ends.slice(0, i + 1).flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                rows.push(React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", padding: "8px 12px", borderBottom: i < ends.length - 1 ? "1px solid #1f2230" : "none" } },
                                    React.createElement("div", { style: { width: 24, color: "#444", fontSize: 9 } },
                                        "E",
                                        i + 1),
                                    React.createElement("div", { style: { flex: 1, display: "flex", gap: 3, flexWrap: "wrap" } }, end.map(function (v, j) { return (React.createElement("div", { key: j, style: { width: 22, height: 22, borderRadius: 3, background: arrowBg(v, isImperial), color: arrowText(v, isImperial), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 500 } }, v)); })),
                                    React.createElement("div", { style: { width: 26, textAlign: "right", fontSize: 13, color: "#c8f55a" } }, endTotal),
                                    React.createElement("div", { style: { width: 38, textAlign: "right", fontSize: 10, color: "#555" } }, runningTotal)));
                            });
                        }
                        if (allEndsComplete) {
                            var roundAvg = (totalScore / ends.flat().length).toFixed(2);
                            rows.push(React.createElement("div", { key: "roundavg", style: { padding: "10px 14px", background: "#141720", borderTop: "2px solid #252830", display: "flex", justifyContent: "space-between", alignItems: "center" } },
                                React.createElement("span", { style: { fontSize: 9, color: "#888", letterSpacing: 1.5 } }, "ROUND AVERAGE"),
                                React.createElement("span", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: "#c8f55a" } }, roundAvg)));
                        }
                        return rows;
                    })()))),
                showFinish && (React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 } },
                    React.createElement("div", { style: { background: "#1a1d25", borderRadius: 16, padding: 28, maxWidth: 320, width: "90%", textAlign: "center" } },
                        React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 12, letterSpacing: 3, color: "#555", marginBottom: 4 } }, "ROUND COMPLETE"),
                        React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 66, color: "#c8f55a", lineHeight: 1 } }, totalScore),
                        React.createElement("div", { style: { color: "#555", fontSize: 12, marginBottom: 4 } },
                            "/ ",
                            maxScore),
                        React.createElement("div", { style: { color: "#888", fontSize: 12, marginBottom: 6 } },
                            "avg ",
                            React.createElement("span", { style: { color: "#e8e8e0" } }, (totalScore / (ends.flat().length || 1)).toFixed(2)),
                            " per arrow"),
                        React.createElement("div", { style: { color: "#ffd700", fontSize: 13, marginBottom: 16 } }, isImperial ? "".concat(goldCount, " Gold").concat(goldCount !== 1 ? "s" : "") : "".concat(xCount, " X").concat(xCount !== 1 ? "s" : "")),
                        personalBest > 0 && totalScore > personalBest && (React.createElement("div", { style: { background: "#c8f55a", color: "#0f1117", borderRadius: 8, padding: "8px 12px", marginBottom: 14, fontSize: 12, fontWeight: 500 } }, "\uD83C\uDFF9 NEW PERSONAL BEST!")),
                        React.createElement("textarea", { value: finishNotes, onChange: function (e) { return setFinishNotes(e.target.value); }, placeholder: "Add notes\u2026 weather, equipment, how it felt", rows: 3, style: { width: "100%", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, padding: "10px 12px", color: "#e8e8e0", fontFamily: "'DM Mono',monospace", fontSize: 11, resize: "none", marginBottom: 14, outline: "none" } }),
                        React.createElement("button", { onClick: finishRound, style: { width: "100%", padding: 14, background: "#c8f55a", color: "#0f1117", border: "none", borderRadius: 8, fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 2, cursor: "pointer" } }, "SAVE & FINISH")))))),
            screen === "history" && !viewingRound && (React.createElement("div", { style: { animation: "fadeUp 0.2s ease" } }, history.length === 0 ? (React.createElement("div", { style: { textAlign: "center", color: "#555", marginTop: 60 } },
                React.createElement("div", { style: { fontSize: 38, marginBottom: 10 } }, "\uD83C\uDFF9"),
                React.createElement("div", { style: { fontSize: 12 } }, "No rounds scored yet."))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 8 } }, "PERSONAL BESTS"),
                React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 } }, Object.keys(ROUNDS).map(function (r) {
                    var best = history.filter(function (h) { return h.round === r; }).reduce(function (b, h) { return Math.max(b, h.score); }, 0);
                    if (!best)
                        return null;
                    return (React.createElement("div", { key: r, style: { background: "#1a1d25", borderRadius: 8, padding: "7px 11px" } },
                        React.createElement("div", { style: { fontSize: 9, color: "#555" } }, r),
                        React.createElement("div", { style: { fontSize: 16, fontFamily: "'Bebas Neue',sans-serif", color: "#c8f55a" } }, best)));
                })),
                React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 8 } }, "RECENT ROUNDS"),
                history.map(function (h) {
                    var _a;
                    return (React.createElement("div", { key: h.id, onClick: function () { return setViewingRound(h); }, style: { background: "#1a1d25", borderRadius: 10, padding: "12px 14px", marginBottom: 7, display: "flex", alignItems: "center", gap: 10, cursor: "pointer" } },
                        React.createElement("div", { style: { flex: 1 } },
                            React.createElement("div", { style: { fontSize: 12, marginBottom: 3 } }, h.round),
                            React.createElement("div", { style: { fontSize: 10, color: "#555" } },
                                h.date,
                                " ? ",
                                React.createElement("span", { style: { color: h.round === "Worcester" ? "#4ab3f4" : h.imperial ? "#c8862a" : "#4ab3f4" } }, h.round === "Worcester" ? "5-zone (5?4?3?2?1)" : h.imperial ? "5-zone" : "10-zone"),
                                " ? ",
                                h.imperial ? "".concat((_a = h.golds) !== null && _a !== void 0 ? _a : "?", "G") : "".concat(h.xs, "X"),
                                h.notes ? " ? ?" : "")),
                        React.createElement("div", { style: { textAlign: "right" } },
                            React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 26, color: "#c8f55a", lineHeight: 1 } }, h.score),
                            React.createElement("div", { style: { fontSize: 9, color: "#555" } }, h.maxPossible ? "avg ".concat((h.score / (h.maxPossible / (h.round === "Worcester" ? 5 : h.imperial ? 9 : 10))).toFixed(2)) : "")),
                        React.createElement("div", { style: { color: "#333", fontSize: 14 } }, "\u203A")));
                }),
                React.createElement("button", { onClick: function () { if (window.confirm("Clear all history?")) {
                        setHistory([]);
                        saveHistory([]);
                    } }, style: { width: "100%", marginTop: 10, padding: 10, background: "none", border: "1px solid #252830", borderRadius: 8, color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11 } }, "CLEAR HISTORY"))))),
            screen === "history" && viewingRound && (function () {
                var h = viewingRound;
                var imp = h.imperial;
                return (React.createElement("div", { style: { animation: "fadeUp 0.2s ease" } },
                    React.createElement("button", { onClick: function () { setViewingRound(null); setEditingNotes(false); setShowTargetFace(false); }, style: { background: "none", border: "none", color: "#c8f55a", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 12, padding: "0 0 16px 0", display: "flex", alignItems: "center", gap: 6 } }, "\u2190 BACK"),
                    React.createElement("div", { style: { marginBottom: 16 } },
                        React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 2 } }, h.round),
                        React.createElement("div", { style: { fontSize: 10, color: "#555" } },
                            h.date,
                            " ? ",
                            React.createElement("span", { style: { color: h.round === "Worcester" ? "#4ab3f4" : imp ? "#c8862a" : "#4ab3f4" } }, h.round === "Worcester" ? "5-zone (5?4?3?2?1)" : imp ? "5-zone (9?7?5?3?1)" : "10-zone"))),
                    React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } }, (function () {
                        var _a;
                        var isWorc = h.round === "Worcester";
                        var maxArrowVal = isWorc ? 5 : h.imperial ? 9 : 10;
                        var totalArrows = h.maxPossible / maxArrowVal;
                        var avg = (h.score / totalArrows).toFixed(2);
                        return [
                            { label: "SCORE", value: h.score, sub: "/ ".concat(h.maxPossible), color: "#c8f55a" },
                            { label: "HANDICAP", value: h.handicap !== null && h.handicap !== undefined ? h.handicap : "?", color: "#e8e8e0" },
                            { label: h.imperial ? "GOLDS" : "X COUNT", value: h.imperial ? ((_a = h.golds) !== null && _a !== void 0 ? _a : "?") : h.xs, color: "#ffd700" },
                        ].map(function (_a) {
                            var label = _a.label, value = _a.value, sub = _a.sub, color = _a.color;
                            return (React.createElement("div", { key: label, style: { flex: 1, background: "#1a1d25", borderRadius: 10, padding: "10px 10px" } },
                                React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5 } }, label),
                                React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: color, lineHeight: 1 } }, value),
                                sub && React.createElement("div", { style: { fontSize: 9, color: "#444" } }, sub)));
                        });
                    })()),
                    h.hitPositions && h.hitPositions.length > 0 && (React.createElement("div", { style: { marginBottom: 16 } },
                        React.createElement("button", { onClick: function () { return setShowTargetFace(function (v) { return !v; }); }, style: { width: "100%", padding: "10px", background: showTargetFace ? "#1a1d25" : "#0f1117",
                                border: "1px solid ".concat(showTargetFace ? "#c8f55a" : "#252830"), borderRadius: 10,
                                color: showTargetFace ? "#c8f55a" : "#555", cursor: "pointer",
                                fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 2 } },
                            "\uD83C\uDFAF ",
                            showTargetFace ? "HIDE TARGET FACE" : "VIEW TARGET FACE"),
                        showTargetFace && (React.createElement("div", { style: { marginTop: 12, display: "flex", flexDirection: "column", alignItems: "center" } },
                            React.createElement(TargetFace, { isImperial: h.imperial, isWorcester: h.round === "Worcester", disabled: true, onScore: function () { }, arrows: h.hitPositions.map(function (p) { return p.score; }), readOnlyHits: h.hitPositions }))))),
                    React.createElement("div", { style: { background: "#1a1d25", borderRadius: 10, padding: "12px 14px", marginBottom: 16 } },
                        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 } },
                            React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5 } }, "NOTES"),
                            !editingNotes && (React.createElement("button", { onClick: function () { setDraftNotes(h.notes || ""); setEditingNotes(true); }, style: { background: "none", border: "none", color: "#c8f55a", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10 } }, h.notes ? "EDIT" : "+ ADD"))),
                        editingNotes ? (React.createElement(React.Fragment, null,
                            React.createElement("textarea", { value: draftNotes, onChange: function (e) { return setDraftNotes(e.target.value); }, placeholder: "Weather, equipment, how it felt\u2026", rows: 4, autoFocus: true, style: { width: "100%", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, padding: "10px 12px", color: "#e8e8e0", fontFamily: "'DM Mono',monospace", fontSize: 11, resize: "none", outline: "none", marginBottom: 10 } }),
                            React.createElement("div", { style: { display: "flex", gap: 8 } },
                                React.createElement("button", { onClick: function () { return setEditingNotes(false); }, style: { flex: 1, padding: "8px", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11 } }, "CANCEL"),
                                React.createElement("button", { onClick: function () {
                                        var updated = history.map(function (entry) { return entry.id === h.id ? __assign(__assign({}, entry), { notes: draftNotes.trim() }) : entry; });
                                        setHistory(updated);
                                        saveHistory(updated);
                                        setViewingRound(__assign(__assign({}, h), { notes: draftNotes.trim() }));
                                        setEditingNotes(false);
                                    }, style: { flex: 2, padding: "8px", background: "#c8f55a", border: "none", borderRadius: 8, color: "#0f1117", cursor: "pointer", fontFamily: "'Bebas Neue',sans-serif", fontSize: 15, letterSpacing: 2 } }, "SAVE NOTES")))) : (React.createElement("div", { style: { fontSize: 12, color: h.notes ? "#e8e8e0" : "#333", fontStyle: h.notes ? "normal" : "italic", lineHeight: 1.6 } }, h.notes || "No notes recorded."))),
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 6 } }, "SCORECARD"),
                    React.createElement("div", { style: { background: "#1a1d25", borderRadius: 10, overflow: "hidden" } }, (function () {
                        var roundDef = ROUNDS[h.round];
                        var dists = roundDef === null || roundDef === void 0 ? void 0 : roundDef.distances;
                        var rows = [];
                        var endIndex = 0;
                        if (dists) {
                            var distStartIdx_1 = 0;
                            dists.forEach(function (dist, di) {
                                var distEnds = h.ends.slice(distStartIdx_1, distStartIdx_1 + dist.ends);
                                var distTotal = distEnds.flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                var distAvg = distEnds.length > 0 ? (distTotal / (distEnds.length * roundDef.arrowsPerEnd)).toFixed(2) : null;
                                rows.push(React.createElement("div", { key: "dh-".concat(di), style: { padding: "6px 12px", background: "#141720", borderBottom: "1px solid #1f2230", borderTop: di > 0 ? "2px solid #252830" : "none", display: "flex", justifyContent: "space-between" } },
                                    React.createElement("span", { style: { fontSize: 9, color: "#c8862a", letterSpacing: 1.5, fontWeight: 500 } }, dist.label),
                                    React.createElement("span", { style: { fontSize: 9, color: "#444" } },
                                        dist.ends * roundDef.arrowsPerEnd,
                                        " arrows")));
                                for (var e = 0; e < dist.ends; e++, endIndex++) {
                                    var end = h.ends[endIndex];
                                    if (!end)
                                        continue;
                                    var endTotal = end.reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                    var runningTotal = h.ends.slice(0, endIndex + 1).flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                    rows.push(React.createElement("div", { key: "e-".concat(endIndex), style: { display: "flex", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #1f2230" } },
                                        React.createElement("div", { style: { width: 24, color: "#444", fontSize: 9 } },
                                            "E",
                                            endIndex + 1),
                                        React.createElement("div", { style: { flex: 1, display: "flex", gap: 3, flexWrap: "wrap" } }, end.map(function (v, j) { return (React.createElement("div", { key: j, style: { width: 22, height: 22, borderRadius: 3, background: arrowBg(v, imp), color: arrowText(v, imp), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 500 } }, v)); })),
                                        React.createElement("div", { style: { width: 26, textAlign: "right", fontSize: 13, color: "#c8f55a" } }, endTotal),
                                        React.createElement("div", { style: { width: 38, textAlign: "right", fontSize: 10, color: "#555" } }, runningTotal)));
                                }
                                if (distAvg) {
                                    rows.push(React.createElement("div", { key: "davg-".concat(di), style: { padding: "7px 12px", background: "#0f1117", display: "flex", justifyContent: "space-between", alignItems: "center" } },
                                        React.createElement("span", { style: { fontSize: 9, color: "#555" } },
                                            dist.label,
                                            " avg"),
                                        React.createElement("span", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, color: "#c8f55a" } }, distAvg)));
                                }
                                distStartIdx_1 += dist.ends;
                            });
                        }
                        else {
                            (h.ends || []).forEach(function (end, i) {
                                var endTotal = end.reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                var runningTotal = h.ends.slice(0, i + 1).flat().reduce(function (s, v) { return s + arrowToScore(v); }, 0);
                                rows.push(React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", padding: "8px 12px", borderBottom: i < h.ends.length - 1 ? "1px solid #1f2230" : "none" } },
                                    React.createElement("div", { style: { width: 24, color: "#444", fontSize: 9 } },
                                        "E",
                                        i + 1),
                                    React.createElement("div", { style: { flex: 1, display: "flex", gap: 3, flexWrap: "wrap" } }, end.map(function (v, j) { return (React.createElement("div", { key: j, style: { width: 22, height: 22, borderRadius: 3, background: arrowBg(v, imp), color: arrowText(v, imp), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 500 } }, v)); })),
                                    React.createElement("div", { style: { width: 26, textAlign: "right", fontSize: 13, color: "#c8f55a" } }, endTotal),
                                    React.createElement("div", { style: { width: 38, textAlign: "right", fontSize: 10, color: "#555" } }, runningTotal)));
                            });
                        }
                        if (h.ends && h.ends.length > 0) {
                            var roundAvg = (h.score / h.ends.flat().length).toFixed(2);
                            rows.push(React.createElement("div", { key: "roundavg", style: { padding: "10px 14px", background: "#141720", borderTop: "2px solid #252830", display: "flex", justifyContent: "space-between", alignItems: "center" } },
                                React.createElement("span", { style: { fontSize: 9, color: "#888", letterSpacing: 1.5 } }, "ROUND AVERAGE"),
                                React.createElement("span", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: "#c8f55a" } }, roundAvg)));
                        }
                        return rows;
                    })())));
            })(),
            screen === "sights" && !activeSetup && (React.createElement("div", { style: { animation: "fadeUp 0.2s ease" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5 } }, "MY SETUPS"),
                    React.createElement("button", { onClick: createSetup, style: { background: "#c8f55a", border: "none", borderRadius: 8, padding: "7px 14px", color: "#0f1117", fontFamily: "'Bebas Neue',sans-serif", fontSize: 14, letterSpacing: 2, cursor: "pointer" } }, "+ NEW SETUP")),
                setups.length === 0 ? (React.createElement("div", { style: { textAlign: "center", color: "#555", marginTop: 60 } },
                    React.createElement("div", { style: { fontSize: 38, marginBottom: 10 } }, "\uD83C\uDFAF"),
                    React.createElement("div", { style: { fontSize: 12 } }, "No setups yet. Create one to record your sight marks."))) : (setups.map(function (s) { return (React.createElement("div", { key: s.id, onClick: function () { setActiveSetup(s.id); setEditingSetup(false); setAddingMark(false); }, style: { background: "#1a1d25", borderRadius: 10, padding: "14px 16px", marginBottom: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 } },
                    React.createElement("div", { style: { flex: 1 } },
                        React.createElement("div", { style: { fontSize: 13, marginBottom: 4 } }, s.name),
                        React.createElement("div", { style: { fontSize: 10, color: "#555" } },
                            [s.poundage && "".concat(s.poundage), s.arrowType].filter(Boolean).join(" ? ") || "No details added",
                            " ? ",
                            s.marks.length,
                            " mark",
                            s.marks.length !== 1 ? "s" : "")),
                    React.createElement("div", { style: { color: "#333", fontSize: 14 } }, "\u203A"))); })))),
            screen === "sights" && activeSetup && currentSetup && (React.createElement("div", { style: { animation: "fadeUp 0.2s ease" } },
                React.createElement("button", { onClick: function () { setActiveSetup(null); setEditingSetup(false); setAddingMark(false); }, style: { background: "none", border: "none", color: "#c8f55a", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 12, padding: "0 0 16px 0" } }, "\u2190 BACK"),
                React.createElement("div", { style: { background: "#1a1d25", borderRadius: 10, padding: "14px 16px", marginBottom: 16 } }, editingSetup ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 12 } }, "EDIT SETUP"),
                    [
                        { label: "Setup name", key: "name", placeholder: "e.g. Summer outdoor limbs" },
                        { label: "Poundage", key: "poundage", placeholder: "e.g. 36 lbs" },
                        { label: "Arrow", key: "arrowType", placeholder: "e.g. Easton X10 700" },
                        { label: "Notes", key: "notes", placeholder: "e.g. String, button settings?" },
                    ].map(function (_a) {
                        var label = _a.label, key = _a.key, placeholder = _a.placeholder;
                        return (React.createElement("div", { key: key, style: { marginBottom: 10 } },
                            React.createElement("div", { style: { fontSize: 9, color: "#555", marginBottom: 4 } }, label.toUpperCase()),
                            React.createElement("input", { value: draftSetup[key] || "", onChange: function (e) { return setDraftSetup(function (d) {
                                    var _a;
                                    return (__assign(__assign({}, d), (_a = {}, _a[key] = e.target.value, _a)));
                                }); }, placeholder: placeholder, onFocus: function (e) { return e.target.select(); }, style: { width: "100%", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, padding: "9px 12px", color: "#e8e8e0", fontFamily: "'DM Mono',monospace", fontSize: 11, outline: "none" } })));
                    }),
                    React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 4 } },
                        React.createElement("button", { onClick: function () { return setEditingSetup(false); }, style: { flex: 1, padding: "9px", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11 } }, "CANCEL"),
                        React.createElement("button", { onClick: updateSetupMeta, style: { flex: 2, padding: "9px", background: "#c8f55a", border: "none", borderRadius: 8, color: "#0f1117", cursor: "pointer", fontFamily: "'Bebas Neue',sans-serif", fontSize: 15, letterSpacing: 2 } }, "SAVE")))) : (React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
                    React.createElement("div", null,
                        React.createElement("div", { style: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, letterSpacing: 2, marginBottom: 4 } }, currentSetup.name),
                        currentSetup.poundage && React.createElement("div", { style: { fontSize: 11, color: "#888", marginBottom: 2 } },
                            "\u2696 ",
                            currentSetup.poundage),
                        currentSetup.arrowType && React.createElement("div", { style: { fontSize: 11, color: "#888", marginBottom: 2 } },
                            "\uD83C\uDFF9 ",
                            currentSetup.arrowType),
                        currentSetup.notes && React.createElement("div", { style: { fontSize: 11, color: "#555", marginTop: 6, lineHeight: 1.5 } }, currentSetup.notes)),
                    React.createElement("div", { style: { display: "flex", gap: 8 } },
                        React.createElement("button", { onClick: function () { setDraftSetup({ name: currentSetup.name, poundage: currentSetup.poundage, arrowType: currentSetup.arrowType, notes: currentSetup.notes }); setEditingSetup(true); }, style: { background: "none", border: "none", color: "#c8f55a", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10 } }, "EDIT"),
                        React.createElement("button", { onClick: function () { if (window.confirm("Delete \"".concat(currentSetup.name, "\"?")))
                                deleteSetup(activeSetup); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10 } }, "DELETE"))))),
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 } },
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5 } }, "SIGHT MARKS"),
                    !addingMark && (React.createElement("button", { onClick: function () { setAddingMark(true); setDraftMark({ distance: ALL_DISTANCES[0], setting: "" }); }, style: { background: "#c8f55a", border: "none", borderRadius: 8, padding: "6px 12px", color: "#0f1117", fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, letterSpacing: 2, cursor: "pointer" } }, "+ ADD MARK"))),
                addingMark && (React.createElement("div", { style: { background: "#1a1d25", borderRadius: 10, padding: "14px 16px", marginBottom: 12 } },
                    React.createElement("div", { style: { fontSize: 8, color: "#555", letterSpacing: 1.5, marginBottom: 12 } }, "NEW SIGHT MARK"),
                    React.createElement("div", { style: { marginBottom: 10 } },
                        React.createElement("div", { style: { fontSize: 9, color: "#555", marginBottom: 4 } }, "DISTANCE"),
                        React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } },
                            React.createElement("div", { style: { width: "100%", fontSize: 8, color: "#c8862a", marginBottom: 2, letterSpacing: 1 } }, "IMPERIAL"),
                            IMPERIAL_DISTANCES.map(function (d) { return (React.createElement("button", { key: d, onClick: function () { return setDraftMark(function (m) { return (__assign(__assign({}, m), { distance: d })); }); }, style: { padding: "5px 10px", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10,
                                    background: draftMark.distance === d ? "#c8862a" : "#0f1117",
                                    color: draftMark.distance === d ? "#0f1117" : "#888" } }, d)); }),
                            React.createElement("div", { style: { width: "100%", fontSize: 8, color: "#4ab3f4", marginBottom: 2, marginTop: 6, letterSpacing: 1 } }, "METRIC"),
                            METRIC_DISTANCES.map(function (d) { return (React.createElement("button", { key: d, onClick: function () { return setDraftMark(function (m) { return (__assign(__assign({}, m), { distance: d })); }); }, style: { padding: "5px 10px", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10,
                                    background: draftMark.distance === d ? "#4ab3f4" : "#0f1117",
                                    color: draftMark.distance === d ? "#0f1117" : "#888" } }, d)); }))),
                    React.createElement("div", { style: { marginBottom: 12 } },
                        React.createElement("div", { style: { fontSize: 9, color: "#555", marginBottom: 4 } }, "SETTING"),
                        React.createElement("input", { value: draftMark.setting, onChange: function (e) { return setDraftMark(function (m) { return (__assign(__assign({}, m), { setting: e.target.value })); }); }, placeholder: "e.g. 100  or  920 block 4", onFocus: function (e) { return e.target.select(); }, style: { width: "100%", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, padding: "9px 12px", color: "#e8e8e0", fontFamily: "'DM Mono',monospace", fontSize: 12, outline: "none" } })),
                    React.createElement("div", { style: { display: "flex", gap: 8 } },
                        React.createElement("button", { onClick: function () { return setAddingMark(false); }, style: { flex: 1, padding: "9px", background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 8, color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 11 } }, "CANCEL"),
                        React.createElement("button", { onClick: addMark, disabled: !draftMark.setting.trim(), style: { flex: 2, padding: "9px", background: draftMark.setting.trim() ? "#c8f55a" : "#1a1d25", border: "none", borderRadius: 8, color: draftMark.setting.trim() ? "#0f1117" : "#444", cursor: "pointer", fontFamily: "'Bebas Neue',sans-serif", fontSize: 15, letterSpacing: 2 } }, "SAVE MARK")))),
                currentSetup.marks.length === 0 && !addingMark ? (React.createElement("div", { style: { textAlign: "center", color: "#333", fontSize: 12, padding: "30px 0" } }, "No sight marks yet.")) : (React.createElement("div", { style: { background: "#1a1d25", borderRadius: 10, overflow: "hidden" } }, __spreadArray([], __read(currentSetup.marks), false).sort(function (a, b) {
                    var aImp = a.distance.includes("yds");
                    var bImp = b.distance.includes("yds");
                    if (aImp !== bImp)
                        return aImp ? -1 : 1;
                    return parseInt(a.distance) - parseInt(b.distance);
                })
                    .map(function (mark, i, arr) { return (React.createElement("div", { key: mark.id, style: { padding: "10px 14px", borderBottom: i < arr.length - 1 ? "1px solid #1f2230" : "none" } }, editingMarkId === mark.id ? (React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } },
                    React.createElement("div", { style: { fontSize: 11, color: mark.distance.includes("yds") ? "#c8862a" : "#4ab3f4", width: 52, flexShrink: 0 } }, mark.distance),
                    React.createElement("input", { defaultValue: mark.setting, onBlur: function (e) { updateMark(mark.id, e.target.value); setEditingMarkId(null); }, autoFocus: true, onFocus: function (e) { return e.target.select(); }, style: { flex: 1, background: "#0f1117", border: "1px solid #2a2d38", borderRadius: 6, padding: "6px 10px", color: "#e8e8e0", fontFamily: "'DM Mono',monospace", fontSize: 12, outline: "none" } }),
                    React.createElement("button", { onClick: function () { return setEditingMarkId(null); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 11, fontFamily: "'DM Mono',monospace" } }, "\u2715"))) : (React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                    React.createElement("div", { style: { fontSize: 11, color: mark.distance.includes("yds") ? "#c8862a" : "#4ab3f4", width: 52, flexShrink: 0 } }, mark.distance),
                    React.createElement("div", { style: { flex: 1, fontSize: 13 } }, mark.setting),
                    React.createElement("button", { onClick: function () { return setEditingMarkId(mark.id); }, style: { background: "none", border: "none", color: "#555", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10 } }, "EDIT"),
                    React.createElement("button", { onClick: function () { return deleteMark(mark.id); }, style: { background: "none", border: "none", color: "#3a2020", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10 } }, "\u2715"))))); }))))))));
}
